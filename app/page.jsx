import Image from "next/image";
import Link from "next/link";
import Slider from "./ui/slider";

import Banner from "./ui/banner";


export default async function Home() {

  async function loadCourses() {
    try {
      const response = await fetch('http://localhost:3000/api/get-sorted-courses', {
        next: { revalidate: 0 } // Для App Router
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const courses = await response.json(); // Декодируем JSON

      return courses;
    } catch (error) {
      console.error("Fetch error:", error);
      return [];
    }
  }

  const courses = await loadCourses();

  return (
    <main className="py-20 px-4 relative">
      <Image src={'/images/hero.webp'} alt="#" width={1440} height={967} className="absolute top-0 left-0 w-full h-dvh -z-10 object-cover origin-right" />

      <section id="hero" className="container full-screen flex flex-col items-center sm:items-baseline pt-10 sm:pt-20 gap-14">
        <h1 className="font-extralight text-4xl sm:text-7xl text-green uppercase">Mari Stretching</h1>
        <p className="text-2xl max-w-[537px]">
          Я Мари и моя миссия - рассказывать о тренировках и здоровье из любви к себе.
          Хочу, чтобы вы полюбили тренировки также, как я люблю их создавать для вас.
        </p>
        <Link className="font-semibold sm:text-2xl text-center text-white px-10 py-6 bg-pink rounded-3xl max-w-[435px] z-0" href="#">
          Занятия в Петербурге
        </Link>
      </section>

      <section className="container pt-20 flex flex-col md:flex-row justify-between items-center md:items-stretch gap-6">
        <div className="flex flex-col justify-between w-full md:w-1/2 gap-6">
          <h2 className="text-pink font-extralight text-4xl sm:text-7xl uppercase">Почему пилатес?</h2>
          <h3 className="text-3xl">ТЕЛО</h3>
          <p className="">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita infinito spirito distinctio. </p>
          <h3 className="text-3xl">РАЗУМ</h3>
          <p className="">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asper.</p>
        </div>
        <Image src={'/images/about-me2.webp'} alt="#" width={476} height={639} className="object-contain md:w-1/2" />
      </section>

      <Banner />

      <section className="container pt-20" id="courses">
        <Slider data={courses} />
      </section>
    </main>
  );
}