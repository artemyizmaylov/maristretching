import ArticleCard from "@/app/ui/article-card";

export const dynamic = 'force-dynamic'; // Добавляем эту строку для динамического поведения

async function loadPosts() {
    try {
        const response = await fetch(`/api/get-sorted-posts`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error);
        return [];
    }
}

export default async function Blog() {

    const posts = await loadPosts();

    return (
        <div className="min-h-screen container">
            <div className="pt-10 sm:pt-20 animate-fadeIn">
                <h1 className="uppercase text-green font-extralight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-10 sm:mb-16 text-left">
                    Блог
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
                    {posts.map((post) => (
                        <ArticleCard
                            key={post.id}
                            data={post}
                            className="transition-transform duration-300 hover:scale-[1.02]"
                        />
                    ))}
                </div>

                {posts.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        Пока нет статей в блоге
                    </div>
                )}
            </div>
        </div>
    );
}