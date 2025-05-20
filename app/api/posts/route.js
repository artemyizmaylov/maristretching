import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import matter from "gray-matter";

export async function POST(request) {
    const data = await request.formData();
    const file = data.get("image");

    // Сохранение изображения
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const imagePath = path.join(process.cwd(), "public/uploads", file.name);
    await writeFile(imagePath, buffer);

    // Создание MDX файла
    const postContent = matter.stringify(data.get("content"), {
        title: data.get("title"),
        date: new Date().toISOString(),
        author: data.get("author"),
        image: `/uploads/${file.name}`,
    });

    const slug = data.get("title").toLowerCase().replace(/ /g, "-");
    const postPath = path.join(process.cwd(), "posts", `${slug}.mdx`);
    await writeFile(postPath, postContent);

    return NextResponse.json({ success: true });
}