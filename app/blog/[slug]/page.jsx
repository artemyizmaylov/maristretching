'use client'

import Post, { metadata } from '@/app/posts/post.mdx';

export default function BlogArticle() {

    return (
        <div className="pt-20">
            <Post />
            {console.log(metadata)}
        </div>
    );
}