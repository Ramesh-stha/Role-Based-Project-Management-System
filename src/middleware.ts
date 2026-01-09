import { NextResponse, NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET;

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  //  Skip static files
  if (
    /\.(png|jpg|jpeg|gif|svg|css|js|woff|woff2|ttf|eot)$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  //  Allow auth pages
  if (pathname === "/login" || pathname === "/signup") {
    return NextResponse.next();
  }

  if (!JWT_SECRET) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  //  Get token
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }


  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(JWT_SECRET)
    );

    const role = payload.role as string;

    //  Root redirect
    if (pathname === "/") {
      if (role === "admin") {
        return NextResponse.redirect(new URL("/admin", req.url));
      }
      if (role === "member") {
        return NextResponse.redirect(new URL("/member", req.url));
      }
      if (role === "manager") {
        return NextResponse.redirect(new URL("/manager", req.url));
      }
      return NextResponse.redirect(new URL("/login", req.url));
    }


    //  Role-based access
    if (pathname.startsWith("/admin") && role === "admin") {
      return NextResponse.next();
    }

    if (pathname.startsWith("/member") && role === "member") {
      return NextResponse.next();
    }

    if (pathname.startsWith("/manager") && role === "manager") {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/", req.url));
  } catch (err) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}


export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};


