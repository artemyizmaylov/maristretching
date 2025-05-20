'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PostForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState(null);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('image', file);

        try {
            const res = await fetch('/api/posts', {
                method: 'POST',
                body: formData,
            });

            if (res.ok) {
                router.push('/blog');
            }
        } catch (error) {
            console.error('Ошибка создания поста:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                placeholder="Заголовок"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border rounded"
                required
            />
            <textarea
                placeholder="Содержание"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-2 border rounded h-64"
                required
            />
            <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                accept="image/*"
                className="w-full p-2 border rounded"
                required
            />
            <button
                type="submit"
                className="bg-pink text-white px-6 py-2 rounded"
            >
                Опубликовать
            </button>
        </form>
    );
}