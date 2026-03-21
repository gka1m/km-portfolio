import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const auth = req.headers.get("authorization");
  const validCredentials = Buffer.from(
    `admin:${process.env.ADMIN_SECRET}`,
  ).toString("base64");

  if (auth !== `Basic ${validCredentials}`) {
    return new NextResponse("Unauthorized", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Admin"' },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/resume/upload"], // ← upload protected, GET is public
};
