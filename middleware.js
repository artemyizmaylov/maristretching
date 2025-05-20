import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
    const { pathname } = req.nextUrl;
    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (pathname.startsWith("/create-post") && !session) {
        return NextResponse.redirect(new URL("/api/auth/signin?callbackUrl=/create-post", req.url));
    }

    return NextResponse.next();
}