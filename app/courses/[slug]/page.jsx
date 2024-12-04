import Image from "next/image";
import { getCourseData } from "@/api"


export default function Course({ searchParams }) {
    const data = getCourseData(searchParams.search);

    return (
        <section className="pt-20 container">
            <h2 className="text-pink font-extralight text-4xl sm:text-7xl uppercase">О курсе {data.title}</h2>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:items-stretch lg:justify-between pt-10 gap-6">
                <Image src={data.image} width={530} height={620} className="w-[530px] h-[620px] object-cover" />
                <div className="flex flex-col justify-between gap-6">
                    <h3 className="uppercase text-3xl mb-4">Подойдет тем, кто хочет:</h3>
                    <ul className="flex flex-col gap-6 border-b-whitegreen border-b pb-4">
                        {data.forWhom.map((item) => (
                            <li className="uppercase list-disc" key={item}>{item}</li>
                        ))}
                    </ul>
                    <ul className="border-b-whitegreen border-b pb-6 flex flex-wrap">
                        {data.tags.map((item) => (
                            <li className="pl-3 pr-3 first-of-type:border-l border-r border-l-green" key={item}>{item}</li>
                        ))}
                    </ul>
                    <span className="text-5xl">{data.price}р</span>
                    <button type="button" className="text-3xl font-semibold uppercase text-white bg-purple rounded-3xl py-8">купить курс</button>
                </div>
            </div>

            <section className="pt-20">
                <h3 className="text-pink font-extralight text-5xl uppercase mb-10">Что входит в курс:</h3>
                <div className="flex gap-6">
                    <ul className="flex flex-col list-disc gap-5">
                        {data.inCourse.map((item) => (
                            <li className="text-base sm:text-xl uppercase" key={item}>{item}</li>
                        ))}
                    </ul>
                    <ul className="flex flex-col gap-8">
                        <li>
                            <h6 className="font-normal text-base sm:text-xl uppercase mb-2">{data.h1}</h6>
                            <p className="lowercase text-sm sm:text-xl">{data.h1p}</p>
                        </li>
                        <li>
                            <h6 className="font-normal text-base sm:text-xl uppercase mb-2">{data.h2}</h6>
                            <p className="lowercase text-sm sm:text-xl">{data.h2p}</p>
                        </li>
                        <li>
                            <h6 className="font-normal text-base sm:text-xl uppercase mb-2">{data.h3}</h6>
                            <p className="lowercase text-sm sm:text-xl">{data.h3p}</p>
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    )
}