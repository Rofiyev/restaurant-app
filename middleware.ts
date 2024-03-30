import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const authRoutes = ["/auth/sign-in", "/auth/sign-up"];
const adminRoutes = ["/admin", "/admin/booking", "/admin/restaurant"];
const userRoutes = ["/user-profile", "/user-profile/booking"];
const authAdminRoutes = ["/auth-admin/sign-in"];

export async function middleware(request: NextRequest) {
  const currentUser = await request.cookies.get("currentUser")?.value;
  const role = request.cookies.get("role")?.value;

  if (
    (authRoutes.includes(request.nextUrl.pathname) && currentUser) ||
    (currentUser && role === "admin")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (
    (adminRoutes.includes(request.nextUrl.pathname) && role !== "user") ||
    (authAdminRoutes.includes(request.nextUrl.pathname) && role !== "user")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (userRoutes.includes(request.nextUrl.pathname) && role !== "admin") {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
