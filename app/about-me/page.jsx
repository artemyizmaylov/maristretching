import Image from 'next/image';
import Link from 'next/link';
import about1 from '@/app/images/about-me1.webp';

export default function AboutMe() {
    return (
        <main className="pt-20 px-4 relative">
            <div className='pt-20'>
                <h2 className="text-pink font-extralight text-4xl sm:text-7xl uppercase">Обо мне</h2>
                <Image src={about1} alt="#" width={476} height={639} className="object-contain md:w-1/2" />
                <div className="flex flex-col justify-between w-full md:w-1/2 gap-6">
                    <p className="text-center sm:text-right">
                        Меня зовут Мария Дягилева, я врач и тренер.
                        Моя история началась с большой любви к движению. Всю жизнь я занималась спортом, и чтобы узнать еще больше о теле и здоровье, я окончила медицинский университет и стала врачом.
                        Сейчас я учусь на врача-нутрициолога, продолжаю регулярно проходить различные обучения в качестве тренера, занимаюсь персонально, веду группы в Петербурге и провожу такие направления как пилатес, растяжка, восстановление после родов, МФР и двигательную терапию.
                        Но также большую часть моей жизни занимает блог: я активно развиваю YouTube канал, на котором вы можете увидеть много полезных тренировок, а также телеграм канал, где вдохновляю на занятия из любви к себе и делюсь важной информацией о здоровье.
                    </p>
                    <Link href="#" className="underline underline-offset-4 italic hover:text-pink text-right">Дипломы и сертификаты</Link>
                </div>
            </div>
        </main>
    );
}