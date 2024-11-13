import Link from "next/link";
import Image from "next/image";

export default function CourseCard({ data }) {
    return (
        <div className="container flex flex-wrap gap-y-10 py-20 border-b">
            <h3 className="font-extralight text-7xl text-pink uppercase grow basis-full">{data.title}</h3>
            <div className="flex flex-col gap-y-8 basis-1/2">
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
                    className="text-3xl uppercase underline underline-offset-8 hover:text-pink pb-5">Подробнее</Link>
                <span className="text-4xl font-normal pb-5">{data.price}р</span>
                <button className="text-3xl font-semibold uppercase text-white bg-purple rounded-3xl py-5 max-w-md">Подробнее</button>
            </div>
            <div className="basis-1/2 self-end flex flex-col gap-y-4">
                <Image src={data.image} alt="#" width={516} height={302} />
                <div className="flex divide-x">
                    {data.tags.map((tag) => (
                        <span key={tag} className="lowercase pr-4">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}