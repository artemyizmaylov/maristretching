import { NextResponse } from 'next/server';
import matter from 'gray-matter';
import fs from 'fs/promises';
import path from 'path';

// Важные настройки кеширования
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
    try {
        const postsDir = path.join(process.cwd(), 'public/posts');
        const files = await fs.readdir(postsDir);

        const posts = await Promise.all(
            files.map(async (fileName) => {
                const fileContents = await fs.readFile(path.join(postsDir, fileName), 'utf-8');

                const matterResult = matter(fileContents);
                const content = matterResult.content

                return {
                    id: fileName.replace('.mdx', ''),
                    content,
                    ...matterResult.data
                };
            })
        );

        const sortedPosts = posts.sort((a, b) => {
            if (a.date < b.date) {
                return 1;
            } else {
                return -1;
            }
        });

        return NextResponse.json(sortedPosts);

    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to load posts' },
            { status: 500 }
        );
    }
}