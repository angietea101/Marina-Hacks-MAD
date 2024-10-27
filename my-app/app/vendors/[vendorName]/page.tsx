import { db } from "@/lib/db";
import Post from "@/components/Post";
import Link from "next/link";

async function getPosts(){
    const posts = await db.post.findMany({
        where: { published: true },
        include: {
            author: {
                select: { username: true }
            }
        }
    });
    return posts;
}

export default async function VendorPage({
    params,
}: {
    params: { vendorName: string };
}) {
    const posts = await getPosts();

    return (
        <div>
            <Link href={'/create-post'} className="text-blue-600">Create Post</Link>
            <h1>Vendor Page {params.vendorName}</h1>
            {posts.map((post) => (
                <Post 
                key={post.id}
                id={post.id}
                title={post.title}
                content={post.content}
                author={post.author}
                />
            ))}
        </div>
    );
}
