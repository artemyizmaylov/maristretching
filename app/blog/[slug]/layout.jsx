import BackwardButton from "@/app/ui/backward-btn";

export default function BlogArticleLayout({ children }) {
    return (
        <div className="relative mt-10 container">
            <BackwardButton className="absolute" />
            {children}
        </div>
    );
}