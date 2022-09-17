import { getSession } from 'next-auth/react';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;

  if (
    pathname.includes('/api/auth') ||
    token ||
    pathname.includes('/login') ||
    pathname.includes('_next')
  ) {
    return NextResponse.next();
  } else {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}
