'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function Header() {
    const pathname = usePathname();
    const navRef = useRef(null);
    const btnRef = useRef(null);
    const linksStyle = 'hover:text-pink font-normal';
    const [transparent, setTransparent] = useState(0);

    const links = [
        ['Главная', '/'],
        ['Обо мне', '/#about-me'],
        ['Курсы', '/#courses'],
        ['Блог', '/blog'],
        ['Контакты', '/contacts'],
    ];

    const onScrollCallback = () => {
        const windowPos = parseInt(window.scrollY);
        setTransparent(windowPos / 100);
    };

    const onClick = () => {
        switch (navRef.current.style.maxHeight) {
            case '1000px':
                navRef.current.style.maxHeight = '48px';
                btnRef.current.classList.remove('opened');
                break;
            case '48px':
                navRef.current.style.maxHeight = '1000px';
                btnRef.current.classList.add('opened');
                break;
            default:
                navRef.current.style.maxHeight = '1000px';
                btnRef.current.classList.add('opened');
                break;
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScrollCallback);
        return () => {
            window.removeEventListener('scroll', onScrollCallback);
        }
    });

    return (
        <header id="header" className={`border-b border-green py-4 sticky top-0`} style={{ 'backgroundColor': `rgba(255,249,239,${transparent})` }}>
            <button type="button" className=" nav-toggle w-8 h-8 absolute top-10 right-6 lg:hidden" onClick={onClick} ref={btnRef}>
                <span className="bar-top"></span>
                <span className="bar-mid"></span>
                <span className="bar-bot"></span>
            </button>
            <div className="container flex flex-col lg:flex-row justify-between items-center relative max-h-12 lg:max-h-[1000px] overflow-hidden transition-all" ref={navRef}>
                <h1 className="text-green uppercase text-3xl pb-6 pt-2 lg:p-0"><Link href="/">Mari Stretching</Link></h1>
                <nav className="flex flex-col gap-6 lg:flex-row lg:gap-11">
                    {links.map(([title, url]) => (
                        <Link key={title} href={url} onClick={onClick} className={`${linksStyle}${pathname === url ? ' text-pink underline' : ''}`}>{title}</Link>
                    ))}
                </nav>
                <Link href="#" className="text-green uppercase lg:border border-green rounded-full pt-10 lg:p-4">Telegram</Link>
            </div>
        </header>
    );
}