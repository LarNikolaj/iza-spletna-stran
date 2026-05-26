import { NextResponse } from 'next/server'

const PASSWORD = 'iza2025' // change this to whatever you want

export function middleware(request) {
  const cookie = request.cookies.get('site-password')
  const { pathname } = request.nextUrl

  // Allow the password check endpoint through
  if (pathname === '/api/unlock') return NextResponse.next()

  // If cookie matches, allow through
  if (cookie?.value === PASSWORD) return NextResponse.next()

  // Otherwise show the password page
  const url = request.nextUrl.clone()
  url.pathname = '/locked'
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next|fonts|favicon|studio).*)'],
}