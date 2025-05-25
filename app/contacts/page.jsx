'use client'

import { useState } from "react";
import Link from "next/link";

export default function Contacts() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        text: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState(null);

    const links = [
        ['Telegram', 'https://t.me/mari_stretching'],
        ['Youtube', 'https://www.youtube.com/@mari_stretching'],
        ['Rutube', 'https://rutube.ru/u/maristretching/'],
        ['Вконтакте', 'https://vk.com/maristretching'],
        ['Pinterest', 'https://ru.pinterest.com/mari_stretching/'],
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage({ text: 'Сообщение успешно отправлено!', isError: false });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    text: ''
                });
            } else {
                throw new Error(data.message || 'Ошибка при отправке формы');
            }
        } catch (error) {
            setMessage({ text: error.message || 'Произошла ошибка при отправке', isError: true });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container animate-fadeIn">
            <h1 className="font-extralight text-5xl md:text-7xl text-center md:text-left uppercase text-green my-20">Mari Stretching</h1>
            <div className="flex justify-between">
                <p className="md:text-3xl uppercase basis-1/2">Больше анонсов, тренировок и&nbsp;новостей в <Link href="#">telegram</Link>, присоединяйся!</p>
                <ul className="flex flex-col gap-8">
                    {links.map(([title, url]) => (
                        <li key={title} className="text-right"><Link href={url} className="nd:text-3xl uppercase hover:text-pink">{title}</Link></li>
                    ))}
                </ul>
            </div>
            <form className="flex flex-col pt-20" onSubmit={handleSubmit}>
                <h2 className="font-extralight md:text-6xl text-purple uppercase mb-10">Обратная связь</h2>
                <p className="md:text-3xl mb-20">Пожалуйста, заполните форму обратной связи, если у вас остались какие-то вопросы.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-6 sm:grid-rows-3 grid-flow-col gap-x-16 gap-y-8 mb-20">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Имя"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input bg-white border-x-0 border-t-0 placeholder:font-extralight md:text-xl placeholder:uppercase md:placeholder:text-3xl focus:border-b-pink focus:placeholder:text-base px-0"
                        style={{ boxShadow: 'none', outline: 'none' }}
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input bg-white border-x-0 border-t-0 placeholder:font-extralight md:text-xl placeholder:uppercase md:placeholder:text-3xl focus:border-b-pink focus:placeholder:text-base px-0"
                        style={{ boxShadow: 'none', outline: 'none' }}
                    />
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="Телефон"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input bg-white border-x-0 border-t-0 placeholder:font-extralight md:text-xl placeholder:uppercase md:placeholder:text-3xl focus:border-b-pink focus:placeholder:text-base px-0"
                        style={{ boxShadow: 'none', outline: 'none' }}
                    />
                    <textarea
                        name="text"
                        id="text"
                        placeholder="Текст сообщения"
                        value={formData.text}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="form-input bg-white border-x-0 border-t-0 placeholder:font-extralight md:text-xl placeholder:uppercase md:placeholder:text-3xl focus:border-b-pink focus:placeholder:text-base placeholder:align-top px-0 row-span-3"
                        style={{ boxShadow: 'none', outline: 'none' }}
                    />
                </div>
                {message && (
                    <div className={`mb-4 ${message.isError ? 'text-red-500' : 'text-green-500'}`}>
                        {message.text}
                    </div>
                )}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="font-semibold md:text-4xl uppercase text-white bg-whitegreen rounded-3xl py-4 w-full max-w-80 self-center sm:self-end hover:bg-pink disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Отправка...' : 'Отправить'}
                </button>
            </form>
        </div>
    );
}