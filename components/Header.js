'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import TypingName from './TypingName'

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  if (pathname === '/') return null

  const linkClass = (active) =>
    `font-display text-5xl md:text-7xl tracking-tight transition-colors leading-none ${
      active ? 'text-klein' : 'text-ink hover:text-ink/40'
    }`

  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-cream/90 backdrop-blur-sm border-b border-ink/15">
      <div className="w-full px-6 md:px-12 h-32 md:h-40 flex items-center justify-between">
        <Link
  href="/"
  className="font-display text-5xl md:text-7xl tracking-tight leading-none"
  onClick={close}
>
  <TypingName />
</Link>

        <nav className="hidden md:flex items-center gap-10">
          <Link href="/art" className={linkClass(pathname.startsWith('/art'))}>Art</Link>
          <Link href="/commercial" className={linkClass(pathname.startsWith('/commercial'))}>Commercial</Link>
          <Link href="/about" className={linkClass(pathname === '/about')}>About</Link>
          <Link href="/contact" className={linkClass(pathname === '/contact')}>Contact</Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-ink transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-ink transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-ink/15 px-6 py-8 flex flex-col gap-6">
          <Link href="/art" onClick={close} className={linkClass(pathname.startsWith('/art'))}>Art</Link>
          <Link href="/commercial" onClick={close} className={linkClass(pathname.startsWith('/commercial'))}>Commercial</Link>
          <Link href="/about" onClick={close} className={linkClass(pathname === '/about')}>About</Link>
          <Link href="/contact" onClick={close} className={linkClass(pathname === '/contact')}>Contact</Link>
        </nav>
      )}
    </header>
  )
}