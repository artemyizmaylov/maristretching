import Image from "next/image";
import Link from "next/link";
import Slider from "./ui/slider";
import Banner from "./ui/banner";
import heroImg from "./images/hero.webp"
import aboutMe from './images/about-me1.webp'

export const dynamic = 'force-dynamic'; // Добавляем эту строку для динамического поведения

async function loadCourses() {
  try {
    const response = await fetch(`/api/get-sorted-courses`);

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

      <section id="hero" className="relative w-full min-h-screen flex flex-col justify-center items-center sm:items-start px-4 sm:px-8 md:px-12 lg:px-20 py-20 gap-8 sm:gap-12 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-pink/10 blur-3xl -z-10"></div>
        <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-green/10 blur-3xl -z-10"></div>
        <h1 className="font-extralight text-4xl sm:text-7xl text-green uppercase text-center sm:text-left animate-fadeIn">
          Mari Stretching
        </h1>
        <p className="text-2xl max-w-[537px] text-center sm:text-left leading-relaxed animate-fadeIn delay-100">
          Я Мари и моя миссия - рассказывать о тренировках и здоровье из любви к себе.
          Хочу, чтобы вы полюбили тренировки также, как я люблю их создавать для вас.
        </p>
        <Link
          className="font-semibold sm:text-2xl text-white px-10 py-6 bg-pink rounded-3xl max-w-[435px] hover:bg-pink-dark duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform animate-fadeIn delay-200 text-center"
          href="https://mari-stretching.tilda.ws/spb"
        >
          Занятия в Петербурге
        </Link>
      </section>

      <section className="max-w-7xl mx-auto py-16 sm:py-24">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-stretch">
          <div className="w-full lg:w-1/2 flex flex-col gap-8 sm:gap-10">
            <h2 className="text-pink font-extralight text-4xl sm:text-6xl lg:text-7xl uppercase leading-tight hover:scale-[1.01] transition-transform duration-300">
              Почему пилатес?
            </h2>
            <div className="space-y-10">
              <div className="group">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-4 pb-2 border-b border-pink/20 group-hover:border-pink transition-colors duration-500">
                  ТЕЛО
                </h3>
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita infinito spirito distinctio.
                </p>
              </div>
              <div className="group">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-4 pb-2 border-b border-pink/20 group-hover:border-pink transition-colors duration-500">
                  РАЗУМ
                </h3>
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <Image
              src={aboutMe}
              alt="Пилатес - польза для тела и разума"
              width={600}
              height={900}
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
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