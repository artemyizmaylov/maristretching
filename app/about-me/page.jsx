import Image from 'next/image';
import Link from 'next/link';
import aboutMe from '../images/about-me2.webp'

export default function AboutMe() {
    return (
        <div className="max-w-7xl mx-auto py-10 sm:py-20 container">
            {/* Заголовок с анимацией при наведении */}
            <h2 className="text-pink font-extralight text-4xl sm:text-6xl lg:text-7xl uppercase pb-10 sm:pb-16">
                Обо мне
            </h2>

            {/* Контент с адаптивным расположением */}
            <div className="flex flex-col md:flex-row gap-12 lg:gap-16 xl:gap-24 lg:items-center">
                {/* Изображение с плавным увеличением */}
                <div className="w-full md:w-1/2 relative group">
                    <Image
                        src={aboutMe}
                        alt="Мария Дягилева - врач и тренер"
                        width={600}
                        height={800}
                        className="h-[calc(100vh-160px)] object-cover object-top rounded-lg shadow-xl w-full transition-all duration-500 group-hover:shadow-2xl"
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

            {/* Блок "Мой путь" */}
            <div className="mt-20 sm:mt-32">
                <h2 className="text-pink font-extralight text-4xl sm:text-6xl lg:text-7xl uppercase pb-10 sm:pb-16">
                    Мой путь
                </h2>

                <div className="relative">
                    {/* Вертикальная линия таймлайна */}
                    <div className="absolute left-4 sm:left-1/2 h-full w-0.5 bg-pink/20 -z-10"></div>

                    {/* Элементы таймлайна */}
                    <div className="space-y-12">
                        {/* 2018 */}
                        <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">
                            <div className="sm:absolute left-4 sm:left-1/2 sm:-translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-pink text-white font-medium text-xs">
                                2018
                            </div>
                            <div className="sm:w-1/2 sm:pr-12 sm:mt-0 sm:text-right ml-12 sm:ml-0">
                                <p className="text-lg sm:text-xl font-medium text-gray-900">Поступление в медицинский университет</p>
                                <p className="text-gray-600">Начинаю проводить первые занятия в Петербурге</p>
                            </div>
                            <div className="sm:w-1/2 sm:pl-12 hidden sm:block"></div>
                        </div>

                        {/* 2019 */}
                        <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">
                            <div className="sm:absolute left-4 sm:left-1/2 sm:-translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-pink text-white font-medium text-xs">
                                2019
                            </div>
                            <div className="sm:w-1/2 sm:pr-12 hidden sm:block"></div>
                            <div className="sm:w-1/2 sm:pl-12 ml-12 sm:ml-0">
                                <p className="text-lg sm:text-xl font-medium text-gray-900">Участие в фитнес-проектах</p>
                                <p className="text-gray-600">Работа в качестве тренера-наставника</p>
                            </div>
                        </div>

                        {/* 2021 */}
                        <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">
                            <div className="sm:absolute left-4 sm:left-1/2 sm:-translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-pink text-white font-medium text-xs">
                                2021
                            </div>
                            <div className="sm:w-1/2 sm:pr-12 sm:mt-0 sm:text-right ml-12 sm:ml-0">
                                <p className="text-lg sm:text-xl font-medium text-gray-900">Обучение по растяжке</p>
                                <p className="text-gray-600">Освоение новых методик работы с телом</p>
                            </div>
                            <div className="sm:w-1/2 sm:pl-12 hidden sm:block"></div>
                        </div>

                        {/* 2022 */}
                        <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">
                            <div className="sm:absolute left-4 sm:left-1/2 sm:-translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-pink text-white font-medium text-xs">
                                2022
                            </div>
                            <div className="sm:w-1/2 sm:pr-12 hidden sm:block"></div>
                            <div className="sm:w-1/2 sm:pl-12 ml-12 sm:ml-0">
                                <p className="text-lg sm:text-xl font-medium text-gray-900">Развитие блога и обучение</p>
                                <p className="text-gray-600">Инструктор по пилатесу, онлайн-занятия</p>
                            </div>
                        </div>

                        {/* 2023 */}
                        <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">
                            <div className="sm:absolute left-4 sm:left-1/2 sm:-translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-pink text-white font-medium text-xs">
                                2023
                            </div>
                            <div className="sm:w-1/2 sm:pr-12 sm:mt-0 sm:text-right ml-12 sm:ml-0">
                                <p className="text-lg sm:text-xl font-medium text-gray-900">Первый курс и двигательная терапия</p>
                                <p className="text-gray-600">Выпуск курсов, углубление в терапию</p>
                            </div>
                            <div className="sm:w-1/2 sm:pl-12 hidden sm:block"></div>
                        </div>

                        {/* 2024 */}
                        <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">
                            <div className="sm:absolute left-4 sm:left-1/2 sm:-translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-pink text-white font-medium text-xs">
                                2024
                            </div>
                            <div className="sm:w-1/2 sm:pr-12 hidden sm:block"></div>
                            <div className="sm:w-1/2 sm:pl-12 ml-12 sm:ml-0">
                                <p className="text-lg sm:text-xl font-medium text-gray-900">Окончание университета и новые достижения</p>
                                <p className="text-gray-600">100 000 подписчиков на YouTube, обучение нутрициологии, очные занятия</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}