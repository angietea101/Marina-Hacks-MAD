import { User } from "@prisma/client";

type PostProps = {
    id: number;
    title: string;
    content?: string;
    author: { username: string };
    vendor: { vendorName: string };
};

export default function Post({ id, title, content, author, vendor }: PostProps) {
    return (
        <div>
            <h3>{author.username}</h3>
            <h4>{title}</h4>
            <p>{content}</p>
            <p>{vendor.vendorName}</p>
        </div>
    );
}
