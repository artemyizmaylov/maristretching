import ArticleCard from "../ui/article-card";
import { getSortedPostsData } from "@/api";

export default function Blog() {
    const posts = getSortedPostsData();

    return (
        <div className="pt-20">
            <h1 className="uppercase text-green font-extralight text-7xl mb-20">Блог</h1>
            <div className="flex flex-wrap gap-y-[145px] justify-center lg:justify-between">
                {posts.map((post) => (
                    <ArticleCard key={post.id} data={post} />
                ))}
            </div>
        </div>
    );
}