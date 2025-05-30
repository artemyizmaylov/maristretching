import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ data }) {

    return (
        <div className="max-w-[407px] flex flex-col gap-4">
            <Link href={
                {
                    pathname: `/blog/${data.id}`,
                    query: {
                        search: data.id
                    }
                }
            }>
                <Image src={data.image} width={400} height={400} alt="Изображение" className="aspect-square object-cover" />
            </Link>
            <Link href={
                {
                    pathname: `/blog/${data.id}`,
                    query: {
                        search: data.id
                    }
                }
            }>
                <h6 className="font-medium line-clamp-1">{data.title}</h6>
            </Link>
            <p className="line-clamp-2">{data.content}</p>
        </div>
    );
}