import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]); //google dns

import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  console.log(session);

  // return NextResponse.next();

  //   const isLoggedIn = false;

  if (session) {
    return NextResponse.next();
  }

  //   if (isLoggedIn) {
  //     return NextResponse.next();
  //   }

  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  //   matcher: ["/career", "/about-us"],
  matcher: ["/career", "/news/:path*"],
};
