export default function BlogLayout({ children }) {
    return (
        <main className="container">
            <h1 className="uppercase text-green font-extralight text-7xl my-20">Блог</h1>
            {children}
        </main>
    );
}