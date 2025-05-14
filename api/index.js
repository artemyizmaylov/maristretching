import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'public/posts');
const coursesDirectory = path.join(process.cwd(), 'public/courses');

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.mdx$/, '');

        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);
        const content = matterResult.content

        return {
            id,
            content,
            ...matterResult.data
        };
    });

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

export function getSortedCourses() {
    const fileNames = fs.readdirSync(coursesDirectory);

    const allCoursesData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.mdx$/, '');

        const fullPath = path.join(coursesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);
        const content = matterResult.content
        const tags = matterResult.data.tags.split(';');

        return {
            id,
            content,
            ...matterResult.data,
            tags,
        };
    });

    return allCoursesData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
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