import Image from "next/image";
import Link from "next/link";
import CourseCard from "./ui/course-card";
import img from './images/bg.png'
import img1 from './images/test-img2.png';

export default function Home() {
  return (
    <main className="pt-20">
      <Image src={img} alt="#" quality={100} className="absolute top-0 -z-10 object-cover w-full h-dvh origin-right" />

      <section className="container h-dvh mx-20 flex flex-col gap-12">
        <h1 className="font-extralight text-7xl text-green uppercase">Mari Stretching</h1>
        <p className="text-2xl w-1/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac feugiat velit. Nulla elementum felis placerat, interdum metus eget, congue risus. Nullam at euismod erat.</p>
        <Link className="font-semibold text-2xl text-center text-white px-10 py-6 bg-pink rounded-3xl max-w-[435px] leading-6" href="#">Запись на консультацию</Link>
      </section>

      <section id="about-me" className="container flex py-20">
        <Image src={img1} alt="#" className="object-contain basis-1/2" />
        <div className="basis-1/2 flex flex-col justify-between">
          <h2 className="text-pink font-extralight text-7xl uppercase text-right">Обо мне</h2>
          <p className="font-normal text-right"> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita infinito spirito distinctio.
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus. </p>
          <Link href="#" className="underline underline-offset-4 italic hover:text-pink block text-right">Дипломы и сертификаты</Link>
        </div>
      </section>

      <section className="container flex flex-wrap items-end items-stretch">
        <h2 className="text-pink font-extralight text-7xl uppercase basis-full">Почему пилатес?</h2>
        <div className="basis-1/2 flex flex-col justify-between">
          <h3 className="text-3xl">ТЕЛО</h3>
          <p className="font-normal">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita infinito spirito distinctio. </p>
          <h3 className="text-3xl">РАЗУМ</h3>
          <p className="font-normal">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asper.</p>
        </div>
        <Image src={img1} alt="#" className="object-contain basis-1/2" />
      </section>

      <section id="courses">
        <CourseCard />
        <CourseCard />
      </section>

      <div className="test">

      </div>
    </main>
  );
}
