import ArticleCard from "../ui/article-card";

export default function Blog() {
    return (
        <div className="flex flex-wrap gap-y-[145px] justify-center lg:justify-between">
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
        </div>
    );
}