import { NextResponse } from "next/server";

export async function middleware(request) {
  const cookie = request.cookies.get("email");
  if (!cookie) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
}

export const config = {
  matcher: ["/", "/profile", "/admin"],
};
