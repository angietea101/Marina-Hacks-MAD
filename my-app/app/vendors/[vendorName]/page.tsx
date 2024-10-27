import { db } from "@/lib/db";
import Post from "@/components/Post";
import Link from "next/link";
import styles from './page.module.css';

const imageMap = {
    subway: {
        background: '/subway-background.png',
        logo: '/subway-circle-logo.png',
    },
    chipotle: {
        background: '/chipotle-background.jpg',
        logo: '/chipotle-circle-logo.png',
    },
    dominos: {
        background: '/dominos-background.jpg',
        logo: '/dominos-circle-logo.png',
    },
};

async function getPosts(vendorName: string) {
    const posts = await db.post.findMany({
        where: { 
            published: true,
            vendor: {
                vendorName: {
                    equals: vendorName,
                    mode: 'insensitive', 
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
    const vendor = params.vendorName.toLowerCase() as keyof typeof imageMap;
    const vendorImages = imageMap[vendor];

    return (
        <div className={styles.container}>
            <div className={styles.vendorWrapper}>
                <div className={styles.circle}>
                    <img src={vendorImages.logo} alt="Circle Image" />
                </div>
                <img src={vendorImages.background} alt={`${params.vendorName} background`} className={styles.vendorImage} />
                <h1 className={styles.vendorTitle}>{params.vendorName}</h1>
                <Link className={styles.createPostButton} href={`${params.vendorName}/create-post?vendorName=${params.vendorName}`}>
                    <span className="plus-sign">+</span>
                </Link>
            </div>
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
