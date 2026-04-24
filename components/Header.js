'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  if (pathname === '/') return null

  const linkClass = (active) =>
  `font-mono text-xs uppercase tracking-widest transition-colors ${
    active ? 'text-klein' : 'text-neutral-500 hover:text-ink'
  }`

  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-neutral-200">
<div className="max-w-[1800px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">        <Link
          href="/"
          className="font-display text-xl tracking-tight"
          onClick={close}
        >
          Iza
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
        <nav className="md:hidden border-t border-neutral-200 px-6 py-6 flex flex-col gap-5">
          <Link href="/art" onClick={close} className={linkClass(pathname.startsWith('/art'))}>Art</Link>
          <Link href="/commercial" onClick={close} className={linkClass(pathname.startsWith('/commercial'))}>Commercial</Link>
          <Link href="/about" onClick={close} className={linkClass(pathname === '/about')}>About</Link>
          <Link href="/contact" onClick={close} className={linkClass(pathname === '/contact')}>Contact</Link>
        </nav>
      )}
    </header>
  )
}