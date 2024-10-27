import { User } from "@prisma/client";
import styles from "./Post.module.css";

type PostProps = {
    id: number;
    title: string;
    content?: string;
    author: { username: string };
    vendor: { vendorName: string };
};

export default function Post({ id, title, content, author, vendor }: PostProps) {
    return (
        <div className={styles.container}>
            <div className={styles.postContainer}>
                <div className={styles.subjectWrapper}>
                    <h3>{title}</h3>
                    <h3>|</h3>
                    <h3>@{author.username}</h3>
                </div>
                <p>{content}</p>
            </div>
        </div>
    );
}
