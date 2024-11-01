import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await getServerSession();

    if (!session) {
        return NextResponse.json({ error: "Not authorized" }), { status: 400}
    }
    return NextResponse.json({ success: session }, {status: 200})
}
