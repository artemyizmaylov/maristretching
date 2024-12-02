import Link from "next/link";
import Image from "next/image";

export default function CourseCard({ data }) {
    return (
        <div className="container pb-20 border-b">
            <h3 className="mb-10 lg:mb-20 font-extralight text-4xl sm:text-7xl text-pink uppercase">{data.title}</h3>
            <div className="flex flex-col-reverse lg:flex-row gap-10 sm:gap-7">
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
                    <button className="sm:text-3xl font-semibold uppercase text-white bg-purple rounded-3xl p-5 max-w-md w-full self-center md:self-start">Купить курс</button>
                </div>
                <div className="flex flex-col gap-7 justify-between basis-1/2">
                    <Image src={data.image} alt="#" width={515} height={300} className="w-full" />
                    <ul className="flex flex-wrap">
                        {data.tags.map((item) => (
                            <li className="pl-3 pr-3 first-of-type:border-l border-r border-l-green" key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}