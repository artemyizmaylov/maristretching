export default function Banner() {
    return (
        <div className="marquee-smooth mt-20 h-32 bg-whitepurple block w-screen -translate-x-[16px] text-white text-3xl uppercase text-center pt-12">
            <div class="marquee-inner flex">
                <span>Важное объявление! Специальное предложение! </span>
                <span aria-hidden="true">Важное объявление! Специальное предложение! </span>
                <span aria-hidden="true">Важное объявление! Специальное предложение! </span>
            </div>
        </div>
    );
}