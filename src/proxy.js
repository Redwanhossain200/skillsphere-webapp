import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);
import { NextResponse } from 'next/server';

export async function proxy(request) {
  const isAuthRoute =
    request.nextUrl.pathname.startsWith('/login') ||
    request.nextUrl.pathname.startsWith('/register');
  const isProtectedRoute =
    request.nextUrl.pathname.startsWith('/profile/update') ||
    (request.nextUrl.pathname.startsWith('/courses/') &&
      request.nextUrl.pathname.length > 9);

  try {
    const url = process.env.BETTER_AUTH_URL || request.nextUrl.origin;
    const response = await fetch(`${url}/api/auth/get-session`, {
      headers: {
        cookie: request.headers.get('cookie') || '',
      },
    });

    if (!response.ok) {
      throw new Error(
        `Auth session check failed with status: ${response.status}`,
      );
    }

    const session = await response.json();

    if (isProtectedRoute && !session) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    if (isAuthRoute && session) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  } catch (error) {
    console.error('Proxy session check failed:', error);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile/:path*', '/courses/:id*', '/login', '/register'],
};

export default proxy;
