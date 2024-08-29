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
    const linksStyle = 'hover:text-pink font-normal';

    return (
        <header className="border-b border-green py-4 sticky top-0">
            <div className="container flex justify-between items-center">
                <h1 className="text-green uppercase text-3xl">Mari Stretching</h1>
                <nav className="flex gap-11">
                    {links.map(([title, url]) => (
                        <Link key={title} href={url} className={`${linksStyle}${pathname === url ? ' text-pink underline' : ''}`}>{title}</Link>
                    ))}
                </nav>
                <Link href="#" className="text-green uppercase border border-green rounded-full p-4">Telegram</Link>
            </div>
        </header>
    );
}