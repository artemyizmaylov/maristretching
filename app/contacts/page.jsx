import Link from "next/link";

export default function Contacts() {
    const links = [
        ['Вконтакте', '/vk'],
        ['Telegram', '/telegram'],
        ['Instagram', '/instagram'],
        ['Tiktok', '/tiktok'],
        ['Youtube', '/youtube'],
    ];

    return (
        <main className="pt-20 px-4 relative container">
            <h1 className="font-extralight text-5xl md:text-7xl text-center md:text-left uppercase text-green my-20">Mari Stretching</h1>
            <div className="flex justify-between">
                <p className="md:text-3xl uppercase basis-1/2">Больше анонсов, тренировок и&nbsp;новостей в <Link href="#">telegram</Link>, присоединяйся!</p>
                <ul className="flex flex-col gap-8">
                    {links.map(([title, url]) => (
                        <li key={title} className="text-right"><Link href={url} className="nd:text-3xl uppercase hover:text-pink">{title}</Link></li>
                    ))}
                </ul>
            </div>
            <form className="flex flex-col pt-20">
                <h2 className="font-extralight md:text-6xl text-whitepurple uppercase mb-10">Обратная связь</h2>
                <p className="md:text-3xl mb-20">Пожалуйста, заполните форму обратной связи, если у вас остались какие-то вопросы. Или напишите нам на <Link href="#">email</Link></p>
                <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-6 sm:grid-rows-3 grid-flow-col gap-x-16 gap-y-8 mb-20">
                    <input type="text" name="name" id="name" placeholder="Имя" className="form-input bg-white border-x-0 border-t-0 placeholder:font-extralight md:text-xl placeholder:uppercase md:placeholder:text-3xl focus:border-b-pink focus:placeholder:text-base px-0" style={{ 'boxShadow': 'none', 'outline': 'none' }} />
                    <input type="email" name="email" id="email" placeholder="Email" className="form-input bg-white border-x-0 border-t-0 placeholder:font-extralight md:text-xl placeholder:uppercase md:placeholder:text-3xl focus:border-b-pink focus:placeholder:text-base px-0" style={{ 'boxShadow': 'none', 'outline': 'none' }} />
                    <input type="phone" name="phone" id="phone" placeholder="Телефон" className="form-input bg-white border-x-0 border-t-0 placeholder:font-extralight md:text-xl placeholder:uppercase md:placeholder:text-3xl focus:border-b-pink focus:placeholder:text-base px-0" style={{ 'boxShadow': 'none', 'outline': 'none' }} />
                    <input type="textarea" name="text" id="text" placeholder="Текст сообщения" className="form-input bg-white border-x-0 border-t-0 placeholder:font-extralight md:text-xl placeholder:uppercase md:placeholder:text-3xl focus:border-b-pink focus:placeholder:text-base placeholder:align-top px-0 row-span-3" style={{ 'boxShadow': 'none', 'outline': 'none' }} />
                </div>
                <button className="font-semibold md:text-4xl uppercase text-white bg-whitegreen rounded-3xl py-4 w-full max-w-80 self-center sm:self-end hover:bg-pink">Отправить</button>
            </form>
        </main>
    );
}