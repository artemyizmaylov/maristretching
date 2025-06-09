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
    const courseContent = matter.stringify('', {
        title: data.get("title"),
        date: new Date().toISOString(),
        skillspace: data.get("skillspace"),
        price: data.get("price"),
        tags: data.get("tags"),
        forWhom: data.get("forWhom"),
        inCourse: data.get("inCourse"),
        h1: data.get("h1"),
        h1p: data.get("h1p"),
        h2: data.get("h2"),
        h2p: data.get("h2p"),
        h3: data.get("h3"),
        h3p: data.get("h3p"),
        annotation: data.get("annotation"),
        image: `/images/${finalFileName}`,
        question1: data.get("question1"),
        question1text: data.get("question1text"),
        question2: data.get("question2"),
        question2text: data.get("question2text"),
        question3: data.get("question3"),
        question3text: data.get("question3text"),
        question4: data.get("question4"),
        question4text: data.get("question4text"),
        question5: data.get("question5"),
        question5text: data.get("question5text"),
    });

    const slug = transliteration(data.get("title"));
    const coursePath = path.join(process.cwd(), "public/courses", `${slug}.md`);

    await writeFile(coursePath, courseContent);

    exec('pm2 restart maristretching');
    return NextResponse.json({ success: true });
}