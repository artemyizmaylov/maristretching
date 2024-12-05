'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function Header() {
    const pathname = usePathname();
    const headerRef = useRef(null);
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
        if (!btnRef.current.classList.contains('opened')) {
            setTransparent(windowPos / 100);
        }
    };

    const menuOpen = () => {
        headerRef.current.style.backgroundColor = 'rgba(255, 249, 239, 100)';
        navRef.current.style.minHeight = '100dvh';
        btnRef.current.classList.add('opened');
    };

    const menuClose = () => {
        const windowPos = parseInt(window.scrollY);

        headerRef.current.style.backgroundColor = `rgba(255,249,239,${windowPos / 100})`;
        navRef.current.style.minHeight = '48px';
        btnRef.current.classList.remove('opened');
    };

    const onMenuButtonClick = () => {
        switch (navRef.current.style.minHeight) {
            case '48px':
                menuOpen();
                break;
            case '100dvh':
                menuClose();
                break;
            default:
                menuOpen();
                break;
        }
    };

    const onLinksClick = () => {
        menuClose();
    };

    useEffect(() => {
        window.addEventListener('scroll', onScrollCallback);
        return () => {
            window.removeEventListener('scroll', onScrollCallback);
        }
    });

    return (
        <header id="header" className={"border-b border-green p-4 fixed w-full top-0 left-0 z-10"} style={{ 'backgroundColor': `rgba(255,249,239,${transparent})` }} ref={headerRef}>
            <button type="button" className="nav-toggle w-8 h-8 absolute top-10 right-6 lg:hidden z-10" onClick={onMenuButtonClick} ref={btnRef}>
                <span className="bar-top"></span>
                <span className="bar-mid"></span>
                <span className="bar-bot"></span>
            </button>
            <div className="container flex flex-col lg:flex-row items-center justify-between relative max-h-12 lg:max-h-max overflow-hidden transition-all" ref={navRef}>
                <h1 className="text-green uppercase text-2xl sm:text-3xl pb-6 pt-3 sm:pt-2 lg:p-0"><Link href="/">Mari Stretching</Link></h1>
                <nav className="flex flex-col gap-6 lg:flex-row lg:gap-11 flex-grow lg:flex-grow-0 justify-center">
                    {links.map(([title, url]) => (
                        <Link key={title} href={url} onClick={onLinksClick} className={`${linksStyle}${pathname === url ? ' text-pink underline' : ''}`}>{title}</Link>
                    ))}
                </nav>
                <Link href="#" className="text-green uppercase lg:border border-green rounded-full pt-10 lg:p-4 flex-grow lg:flex-grow-0">Telegram</Link>
            </div>
        </header>
    );
}