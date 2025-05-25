'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

export default function CreateCourse() {
    const { data: status } = useSession();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            title: '',
            skillspace: '',
            price: '',
            tags: '',
            forWhom: '',
            inCourse: '',
            h1: '',
            h1p: '',
            h2: '',
            h2p: '',
            h3: '',
            h3p: '',
            annotation: '',
            image: null
        }
    });

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/api/auth/signin?callbackUrl=/create-course');
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
            setError('Пожалуйста, выберите изображение');
            return;
        }

        // Проверка типа файла
        const file = data.image[0];
        if (!file.type.startsWith('image/')) {
            setError('Файл должен быть изображением');
            return;
        }

        setIsSubmitting(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append('title', data.title);
            formData.append('skillspace', data.skillspace);
            formData.append('price', data.price);
            formData.append('tags', data.tags);
            formData.append('forWhom', data.forWhom);
            formData.append('inCourse', data.inCourse);
            formData.append('h1', data.h1);
            formData.append('h1p', data.h1p);
            formData.append('h2', data.h2);  // Исправлено!
            formData.append('h2p', data.h2p); // Исправлено!
            formData.append('h3', data.h3);  // Исправлено!
            formData.append('h3p', data.h3p); // Исправлено!
            formData.append('annotation', data.annotation);
            formData.append('image', file);  // Передаём файл напрямую

            const response = await fetch('/api/courses', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Ошибка при создании курса');
            }

            reset();
            setPreviewImage(null);
            alert('Курс успешно создан!');
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
            <h1 className="text-3xl font-bold mb-6">Создать новый курс</h1>

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
                    <label htmlFor="skillspace" className="block text-sm font-medium mb-1">
                        Ссылка
                    </label>
                    <input
                        {...register('skillspace', { required: 'skillspace is required' })}
                        type="text"
                        id="skillspace"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Введите ссылку"
                    />
                </div>
                <div>
                    <label htmlFor="price" className="block text-sm font-medium mb-1">
                        Цена
                    </label>
                    <input
                        {...register('price', { required: 'price is required' })}
                        type="text"
                        id="price"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Введите цену"
                    />
                </div>
                <div>
                    <label htmlFor="tags" className="block text-sm font-medium mb-1">
                        Тэги
                    </label>
                    <input
                        {...register('tags', { required: 'tags is required' })}
                        type="text"
                        id="tags"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Введите тэги, разделитель - ;"
                    />
                </div>
                <div>
                    <label htmlFor="forWhom" className="block text-sm font-medium mb-1">
                        Подойдет тем, кто хочет...
                    </label>
                    <input
                        {...register('forWhom', { required: 'forWhom is required' })}
                        type="text"
                        id="forWhom"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Введите текст, разделитель - ;"
                    />
                </div>
                <div>
                    <label htmlFor="inCourse" className="block text-sm font-medium mb-1">
                        Что входит в курс?
                    </label>
                    <input
                        {...register('inCourse', { required: 'inCourse is required' })}
                        type="text"
                        id="inCourse"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Введите текст, разделитель - ;"
                    />
                </div>
                <div>
                    <label htmlFor="h1" className="block text-sm font-medium mb-1">
                        Заголовок 1
                    </label>
                    <input
                        {...register('h1', { required: 'h1 is required' })}
                        type="text"
                        id="h1"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Введите заголовок"
                    />
                </div>
                <div>
                    <label htmlFor="h1p" className="block text-sm font-medium mb-1">
                        Текст 1
                    </label>
                    <input
                        {...register('h1p', { required: 'h1p is required' })}
                        type="text"
                        id="h1p"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Введите текст"
                    />
                </div>
                <div>
                    <label htmlFor="h2" className="block text-sm font-medium mb-1">
                        Заголовок 2
                    </label>
                    <input
                        {...register('h2', { required: 'h2 is required' })}
                        type="text"
                        id="h2"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Введите заголовок"
                    />
                </div>
                <div>
                    <label htmlFor="h2p" className="block text-sm font-medium mb-1">
                        Текст 2
                    </label>
                    <input
                        {...register('h2p', { required: 'h2p is required' })}
                        type="text"
                        id="h2p"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Введите текст"
                    />
                </div>
                <div>
                    <label htmlFor="h3" className="block text-sm font-medium mb-1">
                        Заголовок 3
                    </label>
                    <input
                        {...register('h3', { required: 'h3 is required' })}
                        type="text"
                        id="h3"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Введите заголовок"
                    />
                </div>
                <div>
                    <label htmlFor="h3p" className="block text-sm font-medium mb-1">
                        Текст 3
                    </label>
                    <input
                        {...register('h3p', { required: 'h3p is required' })}
                        type="text"
                        id="h3p"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Введите текст"
                    />
                </div>

                <div>
                    <label htmlFor="annotation" className="block text-sm font-medium mb-1">
                        Введите аннотацию
                    </label>
                    <input
                        {...register('annotation', { required: 'annotation is required' })}
                        type="text"
                        id="annotation"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Введите аннотацию"
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
                            <Image
                                width={500}
                                height={500}
                                src={previewImage}
                                alt="Preview"
                                className="max-w-xs max-h-40 object-contain"
                            />
                        </div>
                    )}
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