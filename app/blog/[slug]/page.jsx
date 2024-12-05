import Image from "next/image";
import { getPostData } from "@/api";

export default function BlogArticle({ searchParams }) {
    const data = getPostData(searchParams.search)

    return (
        <div className="pt-20">
            <Image src={data.image} width={400} height={400} alt="#" />
            <h2>{data.title}</h2>
            <p>{data.content}</p>
        </div>
    );
}