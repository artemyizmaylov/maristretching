import Link from "next/link";
import Image from "next/image";
import video1 from '../images/video1.png'

export default function IndexCourseCard() {
    return (
        <div className="container flex flex-wrap gap-y-10 py-20 border-b">
            <h3 className="font-extralight text-7xl text-pink uppercase grow basis-full">Похудение и рельеф</h3>
            <div className="flex flex-col gap-y-8 basis-1/2">
                <p className="text-left">Уникальная программа похудения и комплекс тренировок для быстрого сжиросжигания в домашних условиях. Самые эффективные упражнения и тренировки на все тело.</p>
                <Link href="#" className="text-3xl uppercase underline underline-offset-8 hover:text-pink pb-5">Подробнее</Link>
                <span className="text-4xl font-normal pb-5">2990р</span>
                <button className="text-3xl font-semibold uppercase text-white bg-purple rounded-3xl py-5 max-w-md">Купить курс</button>
            </div>
            <div className="basis-1/2 self-end flex flex-col gap-y-4">
                <Image src={video1} />
                <div className="flex divide-x">
                    <span className="lowercase pr-4">Нужен только коврик</span>
                    <span className="lowercase pl-4">Доступ 3 месяца</span>
                </div>
            </div>
        </div>
    );
}