import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import * as jose from "jose"

export async function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value
    if (!token) return NextResponse.redirect(new URL("/signin", req.url))

    const secretEnv = process.env.JWT_SECRET
    if (!secretEnv) return NextResponse.redirect(new URL("/signin", req.url))
      

    try {
        const secret = new TextEncoder().encode(secretEnv)
        await jose.jwtVerify(token, secret)
        return NextResponse.next()
    } catch {
        return NextResponse.redirect(new URL("/signin", req.url))
    }
}


export const config = {
    matcher: [
        '/listings/:path*',
        '/profile/:path*',
        '/saved/:path*',
    ],
};
