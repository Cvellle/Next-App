import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';

export default function middleware(req: Request) {
  const url = new URL(req.url);

  // Redirect root `/` to default locale
  if (url.pathname === '/') {
    return NextResponse.redirect(new URL('/en', req.url));
  }

  return createMiddleware({
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
  })(req);
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
