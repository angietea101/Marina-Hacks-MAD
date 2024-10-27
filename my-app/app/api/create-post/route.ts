import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const res = await request.json();
    const { title, content } = res;

    const result = await db.post.create({
        data: {
            title,
            content,
            published: true,
            author: {create: {
                username: '1234dd56bill',
                email: '12345d6d@gmail.com',
                password: '123456'
            }},
            vote: 0,
            vendor: {create: {
                id: 5,
                resturantName: "Frostbites",
            }}
        }
    });
    

    return NextResponse.json({ result });
}
