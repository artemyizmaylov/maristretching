import { getAllCourses } from "@/api";

import Image from "next/image";
import Link from "next/link";
import CourseCard from "@/app/ui/course-card";

import hero from '@/app/images/hero.webp'
import about1 from '@/app/images/about-me1.webp';
import about2 from '@/app/images/about-me2.webp';

export default function Home() {
  const courses = getAllCourses();

  return (
    <main className="pt-20 px-4 relative">
      <Image src={hero} alt="#" width={1440} height={967} className="absolute top-0 left-0 w-full h-dvh -z-10 object-cover origin-right" />

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

      <section className="container pt-20 max-h-[90dvh] flex flex-col-reverse md:flex-row justify-between items-center md:items-stretch gap-6" id="about-me" >
        <Image src={about1} alt="#" width={476} height={639} className="object-contain md:w-1/2" />
        <div className="flex flex-col justify-between w-full md:w-1/2 gap-6">
          <h2 className="text-pink font-extralight text-4xl sm:text-7xl uppercase text-center md:text-right">Обо мне</h2>
          <p className="text-center sm:text-right">
            Меня зовут Мария Дягилева, я врач и тренер.
            Моя история началась с большой любви к движению. Всю жизнь я занималась спортом, и чтобы узнать еще больше о теле и здоровье, я окончила медицинский университет и стала врачом.
            Сейчас я учусь на врача-нутрициолога, продолжаю регулярно проходить различные обучения в качестве тренера, занимаюсь персонально, веду группы в Петербурге и провожу такие направления как пилатес, растяжка, восстановление после родов, МФР и двигательную терапию.
            Но также большую часть моей жизни занимает блог: я активно развиваю YouTube канал, на котором вы можете увидеть много полезных тренировок, а также телеграм канал, где вдохновляю на занятия из любви к себе и делюсь важной информацией о здоровье.
          </p>
          <Link href="#" className="underline underline-offset-4 italic hover:text-pink text-right">Дипломы и сертификаты</Link>
        </div>
      </section>

      <section className="container pt-20 max-h-[90dvh] flex flex-col md:flex-row justify-between items-center md:items-stretch gap-6">
        <div className="flex flex-col justify-between w-full md:w-1/2 gap-6">
          <h2 className="text-pink font-extralight text-4xl sm:text-7xl uppercase">Почему пилатес?</h2>
          <h3 className="text-3xl">ТЕЛО</h3>
          <p className="">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita infinito spirito distinctio. </p>
          <h3 className="text-3xl">РАЗУМ</h3>
          <p className="">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asper.</p>
        </div>
        <Image src={about2} alt="#" width={476} height={639} className="object-contain md:w-1/2" />
      </section>

      <section className="container pt-20" id="courses">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            data={course}
          />
        ))}
      </section>
    </main>
  );
}