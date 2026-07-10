import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isLang, type Lang } from "@/lib/i18n";

function preferredLang(request: NextRequest): Lang {
  const cookie = request.cookies.get("lang")?.value;
  if (cookie && isLang(cookie)) return cookie;
  const header = request.headers.get("accept-language") ?? "";
  return header.toLowerCase().includes("vi") ? "vi" : "en";
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];
  if (isLang(firstSegment)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLang(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip static files (contain a dot), Next internals, and API routes
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
