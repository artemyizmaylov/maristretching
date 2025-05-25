import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import matter from "gray-matter";
import transliteration from "../utils/transliteration";
import { revalidatePath } from 'next/cache';
import { exec } from "child_process";

export async function POST(request) {
    const data = await request.formData();
    const file = data.get("image");

    // Обработка имени файла
    const originalName = file.name;
    const fileExtension = path.extname(originalName); // Получаем расширение (.jpg, .png и т.д.)

    // Транслитерация и очистка имени файла
    const cleanName = transliteration(originalName)
        .replace(/\s+/g, '-') // Заменяем пробелы на дефисы
        .replace(/[^a-zA-Z0-9-.]/g, '') // Удаляем все спецсимволы кроме дефисов и точек
        .replace(/-+/g, '-') // Убираем множественные дефисы
        .replace(/\.+/g, '.') // Убираем множественные точки
        .toLowerCase();

    // Формируем новое имя файла (без расширения + расширение)
    const baseName = path.basename(cleanName, fileExtension);
    const finalFileName = `${baseName}${fileExtension}`;

    // Сохранение изображения
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const imagePath = path.join(process.cwd(), "public/images", finalFileName);
    await writeFile(imagePath, buffer);
    revalidatePath('/images');

    // Создание MDX файла
    const postContent = matter.stringify(data.get("content"), {
        title: data.get("title"),
        date: new Date().toISOString(),
        image: `/images/${finalFileName}`,
    });

    const slug = transliteration(data.get("title"));
    const postPath = path.join(process.cwd(), "public/posts", `${slug}.md`);
    await writeFile(postPath, postContent);

    exec('pm2 restart maristretching');
    return NextResponse.json({
        success: true,
        fileName: finalFileName // Можно вернуть новое имя файла для отладки
    });
}