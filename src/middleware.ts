import {NextRequest, NextResponse} from "next/server";

export async function middleware(request: NextRequest) {
    const isLoggedIn = true;
    if (isLoggedIn) {
        return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
    matcher: "/"
}