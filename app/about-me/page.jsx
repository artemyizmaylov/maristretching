import Image from 'next/image';
import Link from 'next/link';
import about1 from '@/app/images/about-me1.webp';

export default function AboutMe() {
    return (
        <>
            <h2 className="text-pink font-extralight text-4xl sm:text-7xl uppercase pt-10 sm:pt-20">Обо мне</h2>
            <div className='pt-10 sm:pt-20 flex flex-col md:flex-row justify-between items-center gap-20'>
                <Image src={about1} alt="#" width={476} height={639} className="object-contain" />
                <div className="flex flex-col gap-6">
                    <p className="text-justify">
                        Меня зовут Мария Дягилева, я врач и тренер.
                        Моя история началась с большой любви к движению. Всю жизнь я занималась спортом, и чтобы узнать еще больше о теле и здоровье, я окончила медицинский университет и стала врачом.
                        Сейчас я учусь на врача-нутрициолога, продолжаю регулярно проходить различные обучения в качестве тренера, занимаюсь персонально, веду группы в Петербурге и провожу такие направления как пилатес, растяжка, восстановление после родов, МФР и двигательную терапию.
                        Но также большую часть моей жизни занимает блог: я активно развиваю YouTube канал, на котором вы можете увидеть много полезных тренировок, а также телеграм канал, где вдохновляю на занятия из любви к себе и делюсь важной информацией о здоровье.
                    </p>
                    <Link href="#" className="underline underline-offset-4 italic hover:text-pink text-right">Дипломы и сертификаты</Link>
                </div>
            </div>
        </>
    );
}