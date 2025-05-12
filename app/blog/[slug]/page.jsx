import Image from "next/image";
import { getPostData } from "@/api";

export default function BlogArticle({ searchParams }) {
    const data = getPostData(searchParams.search)

    return (
        <div className="pt-20">
            <h2 className="uppercase text-pink font-extralight text-7xl mb-20">{data.title}</h2>
            <div className="flex gap-20">
                <Image src={data.image} width={400} height={400} alt="#" />
                <p>{data.content}</p>
            </div>
        </div>
    );
}
