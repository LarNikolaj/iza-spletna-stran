'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const year = new Date().getFullYear()

  // Hide footer on landing and category list pages
  if (pathname === '/' || pathname === '/art' || pathname === '/commercial') {
    return null
  }

  return (
    <footer className="border-t border-ink/15 mt-24">
      <div className="w-full px-6 md:px-12 py-10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <div>
          <p className="font-display text-base">Iza</p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mt-1">
            © {year} — All work shown is the property of the artist.
          </p>
        </div>

        <nav className="flex flex-wrap gap-6 font-mono text-[10px] uppercase tracking-widest text-ink/50">
          <Link href="/art" className="hover:text-ink">Art</Link>
          <Link href="/commercial" className="hover:text-ink">Commercial</Link>
          <Link href="/about" className="hover:text-ink">About</Link>
          <Link href="/contact" className="hover:text-ink">Contact</Link>
        </nav>
      </div>
    </footer>
  )
}