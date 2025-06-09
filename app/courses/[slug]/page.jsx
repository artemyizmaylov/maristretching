import { readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from "next/image";
import Link from "next/link";
import Faq from '@/app/ui/faq';

async function getCourseData(slug) {
    try {
        const coursesDirectory = path.join(process.cwd(), 'public/courses');
        const fullPath = path.join(coursesDirectory, `${slug}.md`);
        const fileContents = readFileSync(fullPath, 'utf-8');

        const matterResult = matter(fileContents);
        const inCourse = matterResult.data.inCourse?.split(';') || [];
        const forWhom = matterResult.data.forWhom?.split(';') || [];
        const tags = matterResult.data.tags?.split(';') || [];

        return {
            ...matterResult.data,
            inCourse,
            tags,
            forWhom,
        };
    } catch (error) {
        console.error('Error loading course data:', error);
        return null;
    }
}

export default async function CoursePage({ params }) {
    const { slug } = await params;
    const data = await getCourseData(slug);

    if (!data) {
        return <div>Курс не найден</div>;
    }

    return (
        <section className="pt-20 container">
            <h2 className="text-pink font-extralight text-4xl sm:text-7xl uppercase">О курсе {data.title}</h2>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:items-stretch lg:justify-between pt-10 gap-6">
                <Image
                    src={data.image}
                    alt="Изображение курса"
                    width={530}
                    height={620}
                    className="w-[530px] h-[620px] object-cover"
                    priority
                />
                <div className="flex flex-col justify-between gap-6">
                    <h3 className="uppercase text-3xl mb-4">Подойдет тем, кто хочет:</h3>
                    <ul className="flex flex-col gap-6 border-b-whitegreen border-b pb-4">
                        {data.forWhom.map((item, index) => (
                            <li className="uppercase list-disc ml-5" key={index}>{item}</li>
                        ))}
                    </ul>
                    <ul className="border-b-whitegreen border-b pb-6 flex flex-wrap">
                        {data.tags.map((item, index) => (
                            <li className="pl-3 pr-3 first-of-type:border-l border-r border-l-green" key={index}>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <span className="text-5xl">{data.price}₽</span>
                    <Link
                        className="text-3xl font-semibold uppercase text-white bg-purple rounded-3xl py-8 text-center hover:bg-purple-dark transition-colors"
                        href={data.skillspace || '#'}
                    >
                        купить курс
                    </Link>
                </div>
            </div>

            <section className="pt-20">
                <h3 className="text-pink font-extralight text-5xl uppercase mb-10">Что входит в курс:</h3>
                <div className="flex flex-col lg:flex-row gap-6">
                    <ul className="flex flex-col list-disc gap-5">
                        {data.inCourse.map((item, index) => (
                            <li className="text-base sm:text-xl uppercase ml-5" key={index}>{item}</li>
                        ))}
                    </ul>
                    <ul className="flex flex-col gap-8">
                        {data.h1 && (
                            <li>
                                <h6 className="font-normal text-base sm:text-xl uppercase mb-2">{data.h1}</h6>
                                <p className="lowercase text-sm sm:text-xl">{data.h1p}</p>
                            </li>
                        )}
                        {data.h2 && (
                            <li>
                                <h6 className="font-normal text-base sm:text-xl uppercase mb-2">{data.h2}</h6>
                                <p className="lowercase text-sm sm:text-xl">{data.h2p}</p>
                            </li>
                        )}
                        {data.h3 && (
                            <li>
                                <h6 className="font-normal text-base sm:text-xl uppercase mb-2">{data.h3}</h6>
                                <p className="lowercase text-sm sm:text-xl">{data.h3p}</p>
                            </li>
                        )}
                    </ul>
                </div>
            </section>

            <section className="pt-20 container">
                <h2 className="text-4xl sm:text-7xl text-green font-extralight uppercase mb-10">Часто задаваемые вопросы</h2>
                <ul className="flex flex-col gap-7">
                    <Faq>
                        <h3 className="text-3xl uppercase">{data.question1}</h3>
                        <p>{data.question1text}</p>
                    </Faq>
                    <Faq>
                        <h3 className="text-3xl uppercase">{data.question2}</h3>
                        <p>{data.question2text}</p>
                    </Faq>
                    <Faq>
                        <h3 className="text-3xl uppercase">{data.question3}</h3>
                        <p>{data.question3text}</p>
                    </Faq>
                    <Faq>
                        <h3 className="text-3xl uppercase">{data.question4}</h3>
                        <p>{data.question4text}</p>
                    </Faq>
                    <Faq>
                        <h3 className="text-3xl uppercase">{data.question5}</h3>
                        <p>{data.question5text}</p>
                    </Faq>
                </ul>
            </section>
        </section>
    );
}