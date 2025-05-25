// app/blog/[slug]/page.js
import Image from "next/image";
import { MDXRemote } from 'next-mdx-remote/rsc';
import { readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Компоненты для MDX
const components = {
    h1: ({ children }) => <h1 className="text-4xl font-bold text-green mb-6">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-semibold text-pink mt-10 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-medium text-pink mt-8 mb-3">{children}</h3>,
    p: ({ children }) => <p className="text-lg leading-relaxed text-gray-800 mb-5">{children}</p>,
    a: ({ href, children }) => (
        <a href={href} className="text-pink underline hover:text-green transition-colors">
            {children}
        </a>
    ),
    ul: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>,
    li: ({ children }) => <li className="text-gray-700">{children}</li>,
    blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-pink pl-4 italic text-gray-600 my-6">
            {children}
        </blockquote>
    ),
    img: (props) => (
        <div className="my-8">
            <Image
                {...props}
                width={800}
                height={500}
                className="rounded-lg shadow-md object-cover"
                alt={props.alt || "Изображение в статье"}
            />
        </div>
    ),
};

async function getPostData(slug) {
    const postsDirectory = path.join(process.cwd(), 'public/posts');
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = readFileSync(fullPath, 'utf-8');

    const matterResult = matter(fileContents);

    return {
        content: matterResult.content,
        ...matterResult.data
    };
}

export default async function BlogArticle({ params }) {
    const data = await getPostData(params.slug);

    return (
        <article className="py-20 max-w-4xl mx-auto">
            <div className="mb-16">
                <h1 className="uppercase text-pink font-extralight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                    {data.title}
                </h1>
                {data.date && (
                    <time dateTime={data.date} className="text-gray-500">
                        {new Date(data.date).toLocaleDateString('ru-RU')}
                    </time>
                )}
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
                {data.image && (
                    <div className="lg:w-1/3 flex-shrink-0">
                        <Image
                            src={data.image}
                            width={400}
                            height={600}
                            alt={data.title}
                            className="rounded-lg shadow-xl object-cover w-full h-auto"
                            priority
                        />
                    </div>
                )}

                <div className="flex-1 prose prose-lg max-w-none">
                    <MDXRemote source={data.content} components={components} />
                </div>
            </div>
        </article>
    );
}