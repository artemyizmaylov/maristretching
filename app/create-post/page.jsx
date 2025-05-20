'use client';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import PostForm from '../ui/post-form';

export default function CreatePost() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/api/auth/signin?callbackUrl=/create-post');
        }
    }, [status, router]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-2xl mx-auto p-4 pt-40">
            <h1 className="text-3xl mb-4">Новый пост</h1>
            <PostForm />
        </div>
    );
}