import { NextResponse } from 'next/server';

export function middleware(req) {

  const auth = req.cookies.get('auth');

  const path = req.nextUrl.pathname;

  if(
    path === '/login.html' ||
    path.startsWith('/api/login')
  ){
    return NextResponse.next();
  }

  if(auth?.value === 'ok'){
    return NextResponse.next();
  }

  return NextResponse.redirect(
    new URL('/login.html', req.url)
  );
}
