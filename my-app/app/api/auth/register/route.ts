import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { hash } from "bcrypt";

export async function POST(request: Request) {
    try {
        const { name, email, username, password } = await request.json();
        
        // Check if email already exists
        const existingUserByEmail = await db.user.findUnique({
            where: { email: email }
        });
        if (existingUserByEmail) {
            return NextResponse.json({ user: null, message: "User with this email already exists" }, { status: 409 });
        }
        
        // Check if username already exists
        const existingUserByUsername = await db.user.findUnique({
            where: { username: username }
        });
        if (existingUserByUsername) {
            return NextResponse.json({ user: null, message: "User with this username already exists" }, { status: 409 });
        }

        const hashedPassword = await hash(password, 10);
        const newUser = await db.user.create({
            data: {
                username,
                email,
                password: hashedPassword
            }
        });

        console.log({ email, password });
        return NextResponse.json({ user: newUser, message: "User created successfully" }, { status: 201 });
    } catch (error: any) {
        console.error(error.message);
        // Return a response in case of an error
        return NextResponse.json({ user: null, message: "Internal server error" }, { status: 500 });
    }
}
