import Image from "next/image";
import Link from "next/link";
import Slider from "./ui/slider";
import Banner from "./ui/banner";
import heroImg from "./images/hero.webp"
import aboutMe from './images/about-me1.webp'

export const dynamic = 'force-dynamic'; // Добавляем эту строку для динамического поведения

async function loadCourses() {
  try {
    const response = await fetch(`${process.env.LOCAL_ADDRES}/api/get-sorted-courses`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const courses = await response.json();

    return courses;
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}

export default async function Home() {
  const courses = await loadCourses();

  return (
    <main className="py-20 px-4 relative overflow-hidden">
      <Image src={heroImg} alt="Картинка на весь экран" width={4531} height={3021} className="absolute top-0 left-0 w-full h-dvh -z-10 object-cover origin-right" />
      <div className="gradient absolute top-0 left-0 w-full h-dvh -z-9 opacity-75 lg:hidden" />

      <section id="hero" className="relative w-full h-screen flex flex-col justify-center items-center sm:items-start px-4 sm:px-8 md:px-12 lg:px-20 py-20 gap-8 sm:gap-12 overflow-hidden">
        <h1 className="font-extralight text-4xl sm:text-7xl text-green uppercase text-center sm:text-left animate-fadeIn">
          Mari Stretching
        </h1>
        <p className="text-2xl max-w-[537px] text-center sm:text-left leading-relaxed animate-fadeIn delay-100">
          Я Мари и моя миссия - рассказывать о тренировках и здоровье из любви к себе.
          Хочу, чтобы вы полюбили тренировки также, как я люблю их создавать для вас.
        </p>
        <Link
          className="font-medium sm:text-2xl text-white px-10 py-6 bg-pink rounded-3xl max-w-[435px] hover:bg-green text-center"
          href="https://mari-stretching.tilda.ws/spb"
        >
          Занятия в Петербурге
        </Link>
      </section>

      <section className="max-w-7xl mx-auto py-16 sm:py-24">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-stretch">
          <div className="w-full lg:w-1/2 flex flex-col gap-8 sm:gap-10">
            <h2 className="text-pink font-extralight text-4xl sm:text-6xl lg:text-7xl uppercase leading-tight">
              Почему пилатес?
            </h2>
            <div className="space-y-10">
              <div className="group">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-4 pb-2 border-b border-pink/20 group-hover:border-pink transition-colors duration-500">
                  ТЕЛО
                </h3>
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700">
                  Меня зовут Мария Дягилева, и моя жизнь — это движение. С детства спорт был моей страстью, а стремление глубже понять тело и здоровье привело меня в медицинский университет. Теперь я врач, тренер и вечный ученик: учусь на нутрициолога, прохожу курсы, работаю с клиентами и веду группы в Петербурге. Пилатес, растяжка, восстановление после родов, МФР и двигательная терапия — мои инструменты для того, чтобы помогать людям чувствовать себя сильными и свободными в своем теле.
                </p>
              </div>
              <div className="group">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-4 pb-2 border-b border-pink/20 group-hover:border-pink transition-colors duration-500">
                  РАЗУМ
                </h3>
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700">
                  Но спорт — не просто физическая практика. Это философия, вдохновение и забота о себе. Поэтому я веду блог: на YouTube делюсь тренировками, а в Telegram — знаниями о здоровье и мотивацией. Для меня важно, чтобы движение приносило радость, а осознанность стала привычкой. Ведь гармония начинается с любви к себе — и я покажу, как ее найти.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative overflow-hidden">
            <Image
              src={aboutMe}
              alt="Пилатес - польза для тела и разума"
              width={600}
              height={900}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <Banner />

      <section className="container pt-20 scroll-m-4 md:scroll-m-20 animate-fadeIn" id="courses">
        <Slider data={courses} />
      </section>
    </main>
  );
}