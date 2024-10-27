import { db } from "@/lib/db";
import Post from "@/components/Post";
import Link from "next/link";

async function getPosts(vendorName: string) {
    const posts = await db.post.findMany({
        where: { 
            published: true,
            vendor: {
                vendorName: {
                    equals: vendorName,
                    mode: 'insensitive', // This makes the search case-insensitive
                }
            }
        },
        include: {
            author: {
                select: { username: true }
            },
            vendor: {
                select: { vendorName: true }
            }
        }
    });
    console.log('Fetched Posts:', posts, '\n');
    return posts;
}

export default async function VendorPage({
    params,
}: {
    params: { vendorName: string };
}) {
    const posts = await getPosts(params.vendorName);

    return (
        <div>
            <Link href={`${params.vendorName}/create-post?vendorName=${params.vendorName}`} className="text-blue-600">Create Post</Link>
            <h1>Vendor Page {params.vendorName}</h1>
            {posts.map((post) => (
                <Post 
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    author={post.author}
                    vendor={post.vendor}
                />
            ))}
        </div>
    );
}
