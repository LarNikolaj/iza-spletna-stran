import { NextResponse } from 'next/server'

const PASSWORD = 'iza2025'

export function middleware(request) {
  const cookie = request.cookies.get('site-password')
  if (cookie?.value === PASSWORD) return NextResponse.next()
  return NextResponse.redirect(new URL('/locked', request.url))
}

export const config = {
  matcher: ['/((?!_next|favicon|fonts|studio|locked|api/unlock).*)'],
}