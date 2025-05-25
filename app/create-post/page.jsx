'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export default function CreatePost() {
    const { data: status } = useSession();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const { register, handleSubmit, watch, reset } = useForm({
        defaultValues: {
            title: '',
            content: '',
            image: null
        }
    });

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/api/auth/signin?callbackUrl=/create-post');
        }
    }, [status, router]);

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const onSubmit = async (data) => {
        if (!data.image || data.image.length === 0) {
            setError('Please select an image');
            return;
        }

        setIsSubmitting(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append('title', data.title);
            formData.append('content', data.content);
            formData.append('image', data.image[0]);

            const response = await fetch('/api/posts', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to create post');
            }

            reset();
            setPreviewImage(null);
            alert('Post created successfully!');
        } catch (err) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (status === 'loading') {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    return (
        <div className="max-w-2xl mx-auto p-4 pt-40">
            <h1 className="text-3xl font-bold mb-6">Создать новый пост</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium mb-1">
                        Заголовок
                    </label>
                    <input
                        {...register('title', { required: 'Title is required' })}
                        type="text"
                        id="title"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Введите заголовок"
                    />
                </div>

                <div>
                    <label htmlFor="image" className="block text-sm font-medium mb-1">
                        Изображение
                    </label>
                    <input
                        {...register('image', { required: 'Image is required' })}
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                    {previewImage && (
                        <div className="mt-2">
                            <img
                                src={previewImage}
                                alt="Preview"
                                className="max-w-xs max-h-40 object-contain"
                            />
                        </div>
                    )}
                </div>

                <div>
                    <label htmlFor="content" className="block text-sm font-medium mb-1">
                        Содержание (Markdown)
                    </label>
                    <textarea
                        {...register('content', { required: 'Content is required' })}
                        id="content"
                        rows={12}
                        className="w-full px-4 py-2 border rounded-md font-mono text-sm focus:ring-2 focus:ring-blue-500"
                        placeholder="Напишите ваш пост в формате Markdown..."
                    ></textarea>
                </div>

                {error && (
                    <div className="text-red-500 text-sm">{error}</div>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-4 py-2 bg-blue-600 text-black border rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                >
                    {isSubmitting ? 'Сохранение...' : 'Опубликовать'}
                </button>
            </form>
        </div>
    );
}