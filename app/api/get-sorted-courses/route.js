import { NextResponse } from 'next/server';
import matter from 'gray-matter';
import fs from 'fs/promises';
import path from 'path';

// Важные настройки кеширования
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
    try {
        const coursesDir = path.join(process.cwd(), 'public/courses');
        const files = await fs.readdir(coursesDir);

        const courses = await Promise.all(
            files.map(async (fileName) => {
                const fileContents = await fs.readFile(path.join(coursesDir, fileName), 'utf-8');

                const matterResult = matter(fileContents);
                const content = matterResult.content
                const tags = matterResult.data.tags.split(';');

                return {
                    id: fileName.replace('.mdx', ''),
                    content,
                    ...matterResult.data,
                    tags,
                };
            })
        );

        const sortedCourses = courses.sort((a, b) => {
            if (a.date < b.date) {
                return 1;
            } else {
                return -1;
            }
        });

        return NextResponse.json(sortedCourses);

    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to load posts' },
            { status: 500 }
        );
    }
}