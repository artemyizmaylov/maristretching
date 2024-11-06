export async function getAllPosts() {
    const context = require.context('../app/posts', false, /\.mdx$/);
    const posts = []
    for (const key of context.keys()) {
        const post = key.slice(2);
        posts.push({
            slug: post.replace('.mdx', ''),
        })
    }
    console.log(posts);

    return posts;
}