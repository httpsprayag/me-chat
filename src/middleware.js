/* eslint-disable react-hooks/rules-of-hooks */
import { useAuth } from "./utils/useAuth";

export async function middleware(request) {
  const user = false;
  if (!user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/", "/profile", "/admin"],
};
