import ArticleCard from "@/app/ui/article-card";

export default async function Blog() {

    async function loadPosts() {
        try {
            const response = await fetch('http://localhost:3000/api/get-sorted-posts', {
                next: { revalidate: 0 }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const posts = await response.json();

            return posts;
        } catch (error) {
            console.error("Fetch error:", error);
            return [];
        }
    }

    const posts = await loadPosts();

    return (
        <div className="pt-10 sm:pt-20">
            <h1 className="uppercase text-green font-extralight text-4xl sm:text-7xl mb-10 sm:mb-20">Блог</h1>
            <div className="flex flex-wrap gap-10 sm:gap-20 justify-center">
                {posts.map((post) => (
                    <ArticleCard key={post.id} data={post} />
                ))}
            </div>
        </div>
    );
}