import ArticleCard from "../ui/article-card";

export default function Blog() {
    return (
        <div className="">
            <h1 className="uppercase text-green font-extralight text-7xl my-20">Блог</h1>
            <div className="flex flex-wrap gap-y-[145px] justify-center lg:justify-between">
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </div>
        </div>
    );
}