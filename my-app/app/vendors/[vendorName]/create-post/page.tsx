"use client"

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const router = useRouter();
    const searchParams = useSearchParams();
    const vendorName = searchParams.get('vendorName');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        try {
            await fetch('/api/create-post', {
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, content, vendorName: vendorName })
            });
            router.push(`/vendors/${vendorName}`);
        } catch (error) {
            console.error(error);
        }

        setTitle('');
        setContent('');
    };

    return (
        <main>
            <Link href={`/vendors/${vendorName}`}>View Feed</Link>
            <h1>Create Post for {vendorName}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="content">Content:</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </main>
    );
}
