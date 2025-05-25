import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'public/posts');
const coursesDirectory = path.join(process.cwd(), 'public/courses');

export function getPostData(name) {
    const fullPath = path.join(postsDirectory, `${name}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const matterResult = matter(fileContents);
    const content = matterResult.content;

    return {
        content,
        ...matterResult.data
    };
}

export function getCourseData(name) {
    const fullPath = path.join(coursesDirectory, `${name}.md`);
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