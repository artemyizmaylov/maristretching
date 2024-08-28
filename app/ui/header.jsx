'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const links = [
        ['Главная', '/'],
        ['Обо мне', '/about-me'],
        ['Курсы', '/courses'],
        ['Блог', '/blog'],
        ['Контакты', '/contacts'],
    ];
    const style = 'hover:text-pink';

    return (
        <header className="flex justify-between items-center border-b border-green py-4 page-x-padding">
            <h1 className="text-green uppercase">Mari Stretching</h1>
            <nav className="flex gap-11">
                {links.map(([title, url]) => (
                    <Link key={title} href={url} className={`${style} ${pathname === url ? 'text-pink underline' : ''}`}>{title}</Link>
                ))}
            </nav>
            <Link href="#" className="text-green uppercase border border-green rounded-full p-4">Telegram</Link>
        </header>
    );
}