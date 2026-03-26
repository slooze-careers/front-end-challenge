import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'slooze-super-secret-key-12345');

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  const { pathname } = req.nextUrl;

  const loginUrl = new URL('/login', req.url);

  if (!token) {
    if (pathname.startsWith('/dashboard') || pathname.startsWith('/products')) {
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }

  try {
    const { payload } = await jwtVerify(token, SECRET);

    // Dashboard restricted to Manager only
    if (pathname.startsWith('/dashboard') && payload.role !== 'Manager') {
      return NextResponse.redirect(new URL('/products', req.url));
    }

    // Role-based redirect from root and login
    if (pathname === '/' || pathname === '/login') {
      if (payload.role === 'Manager') {
        return NextResponse.redirect(new URL('/dashboard', req.url));
      } else {
        return NextResponse.redirect(new URL('/products', req.url));
      }
    }

    return NextResponse.next();
  } catch (err) {
    // Invalid token
    if (pathname.startsWith('/dashboard') || pathname.startsWith('/products')) {
      const res = NextResponse.redirect(loginUrl);
      res.cookies.delete('token');
      return res;
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
