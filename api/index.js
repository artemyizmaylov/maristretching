import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');
const coursesDirectory = path.join(process.cwd(), 'courses');

export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.mdx$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
        const content = matterResult.content

        // Combine the data with the id
        return {
            id,
            content,
            ...matterResult.data
        };
    });
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getPostData(name) {
    const fullPath = path.join(postsDirectory, `${name}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const matterResult = matter(fileContents);
    const content = matterResult.content;

    return {
        content,
        ...matterResult.data
    };
}

export function getAllCourses() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(coursesDirectory);

    const allCoursesData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.mdx$/, '');

        // Read markdown file as string
        const fullPath = path.join(coursesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
        const content = matterResult.content
        const tags = matterResult.data.tags.split(';');

        // Combine the data with the id
        return {
            id,
            content,
            ...matterResult.data,
            tags,
        };
    });

    return allCoursesData;
}

export function getCourseData(name) {
    const fullPath = path.join(coursesDirectory, `${name}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const matterResult = matter(fileContents);
    const inCourse = matterResult.data.inCourse.split(';');
    const forWhom = matterResult.data.forWhom.split(';');
    const tags = matterResult.data.tags.split(';');

    return {
        ...matterResult.data,
        inCourse,
        tags,
        forWhom,
    };
}