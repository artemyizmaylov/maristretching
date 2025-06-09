'use client'

import Link from "next/link";
import Image from "next/image";

export default function CourseCard({ data }) {
    return (
        <div className="container pb-12 max-w-[70%] md:max-w-[85%]">
            <h3 className="font-extralight text-4xl sm:text-7xl text-pink uppercase text-center pb-2 sm:pb-7 lg:pb-20 leading-[1.3]">{data.title}</h3>
            <div className="flex flex-col-reverse lg:flex-row gap-2 sm:gap-7">
                <div className="flex flex-col gap-7 justify-between basis-1/2">
                    <p className="text-left">{data.annotation}</p>
                    <Link
                        href={
                            {
                                pathname: `/courses/${data.id}`,
                                query: {
                                    search: data.id
                                }
                            }
                        }
                        className="sm:text-3xl uppercase underline underline-offset-8 hover:text-pink">
                        Подробнее
                    </Link>
                    <span className="text-4xl font-normal">{data.price}р</span>
                    <Link
                        className="sm:text-3xl font-semibold uppercase text-white bg-purple rounded-3xl p-5 max-w-md w-full self-center md:self-start text-center"
                        href={data.skillspace}
                    >
                        Купить курс
                    </Link>
                </div>
                <div className="flex flex-col gap-7 justify-between basis-1/2 h-[450px]">
                    <Link href={
                        {
                            pathname: `/courses/${data.id}`,
                            query: {
                                search: data.id
                            }
                        }
                    }
                        className="relative w-full h-full hidden lg:block">
                        <Image src={data.image} alt="Изображение" fill className="aspect-square object-cover hidden lg:block " />
                    </Link>
                    <ul className="hidden flex-wrap md:flex justify-center lg:justify-start">
                        {data.tags.map((item) => (
                            <li className="pl-3 pr-3 first-of-type:border-l border-r border-l-green text-sm lg:text-xl" key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}