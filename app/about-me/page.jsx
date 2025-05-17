import Image from 'next/image';
import Link from 'next/link';

export default function AboutMe() {
    return (
        <div className="max-w-7xl mx-auto py-10 sm:py-20">
            {/* Заголовок с анимацией при наведении */}
            <h2 className="text-pink font-extralight text-4xl sm:text-6xl lg:text-7xl uppercase pb-10 sm:pb-16">
                Обо мне
            </h2>

            {/* Контент с адаптивным расположением */}
            <div className="flex flex-col md:flex-row gap-12 lg:gap-16 xl:gap-24 lg:items-center">
                {/* Изображение с плавным увеличением */}
                <div className="w-full md:w-1/2 relative group">
                    <Image
                        src={'/images/about-me1.webp'}
                        alt="Мария Дягилева - врач и тренер"
                        width={600}
                        height={800}
                        className="rounded-lg shadow-xl object-cover w-full h-auto transition-all duration-500 group-hover:shadow-2xl"
                        priority
                    />
                </div>

                {/* Текстовый блок */}
                <div className="w-full md:w-1/2 space-y-6">
                    <div className="space-y-4 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-800">
                        <p>
                            Меня зовут <span className="font-semibold text-pink">Мария Дягилева</span>, я врач и тренер.
                        </p>
                        <p>
                            Моя история началась с большой любви к движению. Всю жизнь я занималась спортом, и чтобы узнать еще больше о теле и здоровье, я окончила медицинский университет и стала врачом.
                        </p>
                        <p>
                            Сейчас я учусь на врача-нутрициолога, продолжаю регулярно проходить различные обучения в качестве тренера, занимаюсь персонально, веду группы в Петербурге и провожу такие направления как пилатес, растяжка, восстановление после родов, МФР и двигательную терапию.
                        </p>
                        <p>
                            Но также большую часть моей жизни занимает блог: я активно развиваю YouTube канал, на котором вы можете увидеть много полезных тренировок, а также телеграм канал, где вдохновляю на занятия из любви к себе и делюсь важной информацией о здоровье.
                        </p>
                    </div>

                    {/* Кнопка с плавным эффектом */}
                    <Link
                        href="#"
                        className="inline-block self-end mt-6 px-6 py-3 bg-pink text-white rounded-full hover:bg-pink-dark transition-colors duration-300 shadow-md hover:shadow-lg text-center lg:text-right"
                    >
                        Дипломы и сертификаты
                    </Link>
                </div>
            </div>
        </div>
    );
}