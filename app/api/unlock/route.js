import { NextResponse } from 'next/server'

const PASSWORD = 'iza2025' // must match middleware.js

export async function POST(request) {
  const { password } = await request.json()
  if (password === PASSWORD) {
    const res = NextResponse.json({ ok: true })
    res.cookies.set('site-password', PASSWORD, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    })
    return res
  }
  return NextResponse.json({ error: 'wrong' }, { status: 401 })
}