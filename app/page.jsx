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
    <main className="pt-24 px-4 relative">
      <Image src={hero} alt="#" width={1440} height={967} className="absolute top-0 left-0 w-full h-dvh -z-10 object-cover origin-right" />

      <section className="container full-screen flex flex-col items-center sm:items-baseline pt-10 sm:pt-20 gap-14">
        <h1 className="font-extralight text-4xl sm:text-7xl text-green uppercase">Mari Stretching</h1>
        <p className="text-2xl max-w-[537px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac feugiat velit. Nulla elementum felis placerat, interdum metus eget, congue risus. Nullam at euismod erat.</p>
        <Link className="font-semibold sm:text-2xl text-center text-white px-10 py-6 bg-pink rounded-3xl max-w-[435px] z-0" href="#">Запись на консультацию</Link>
      </section>

      <section id="about-me" className="container mt-20 flex flex-col-reverse md:flex-row justify-between items-center md:items-stretch gap-6">
        <Image src={about1} alt="#" width={476} height={639} className="object-contain md:w-1/2" />
        <div className="flex flex-col justify-between w-full md:w-1/2 gap-6">
          <h2 className="text-pink font-extralight text-4xl sm:text-7xl uppercase text-center md:text-right">Обо мне</h2>
          <p className="text-center sm:text-right"> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita infinito spirito distinctio.
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus. </p>
          <Link href="#" className="underline underline-offset-4 italic hover:text-pink text-right">Дипломы и сертификаты</Link>
        </div>
      </section>

      <section className="container mt-20 flex flex-col md:flex-row justify-between items-center md:items-stretch gap-6">
        <div className="flex flex-col justify-between w-full md:w-1/2 gap-6">
          <h2 className="text-pink font-extralight text-4xl sm:text-7xl uppercase">Почему пилатес?</h2>
          <h3 className="text-3xl">ТЕЛО</h3>
          <p className="">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita infinito spirito distinctio. </p>
          <h3 className="text-3xl">РАЗУМ</h3>
          <p className="">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asper.</p>
        </div>
        <Image src={about2} alt="#" width={476} height={639} className="object-contain md:w-1/2" />
      </section>

      <section id="courses">
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