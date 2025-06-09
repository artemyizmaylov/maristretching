export default function Banner() {
    return (
        <div className="relative w-screen left-1/2 -translate-x-1/2 mt-20 h-24 md:h-32 overflow-hidden bg-purple text-white text-xl md:text-3xl uppercase">
            <div className="marquee-smooth absolute top-0 left-0 w-full h-full flex items-center whitespace-nowrap">
                <div className="marquee-inner flex items-center">
                    <span className="px-4">{process.env.BANNER}&nbsp;</span>
                    <span className="px-4" aria-hidden="true">{process.env.BANNER}&nbsp;</span>
                    <span className="px-4" aria-hidden="true">{process.env.BANNER}&nbsp;</span>
                </div>
            </div>
        </div>
    );
}