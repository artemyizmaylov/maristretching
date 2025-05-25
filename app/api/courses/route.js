import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import matter from "gray-matter";
import transliteration from "../utils/transliteration";

export async function POST(request) {
    const data = await request.formData();
    const file = data.get("image");

    // Сохранение изображения
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const imagePath = path.join(process.cwd(), "public/images", file.name);
    await writeFile(imagePath, buffer);

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
        image: `/images/${file.name}`,
    });

    const slug = transliteration(data.get("title"));
    const coursePath = path.join(process.cwd(), "public/courses", `${slug}.md`);

    await writeFile(coursePath, courseContent);

    return NextResponse.json({ success: true });
}