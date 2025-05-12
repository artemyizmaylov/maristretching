import ArticleCard from "@/app/ui/article-card";
import { getSortedPostsData } from "@/api";

export default function Blog() {
    const posts = getSortedPostsData();

    return (
        <div className="pt-20">
            <h1 className="uppercase text-green font-extralight text-7xl mb-20">Блог</h1>
            <div className="flex flex-wrap gap-20">
                {posts.map((post) => (
                    <ArticleCard key={post.id} data={post} />
                ))}
            </div>
        </div>
    );
}