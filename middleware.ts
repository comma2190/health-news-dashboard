export function middleware(req) {
  const url = new URL(req.url);
  const path = url.pathname;

  if (
    path === '/login.html' ||
    path.startsWith('/api/login') ||
    path === '/favicon.ico'
  ) {
    return;
  }

  const auth = req.cookies.get('auth')?.value;

  if (auth === 'ok') {
    return;
  }

  return Response.redirect(new URL('/login.html', req.url));
}

export const config = {
  matcher: '/:path*',
};
