import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-200 mt-24">
<div className="max-w-[1800px] mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">        <div>
          <p className="font-display text-base">Iza</p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 mt-1">
            © {year} — All work shown is the property of the artist.
          </p>
        </div>

        <nav className="flex flex-wrap gap-6 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
          <Link href="/art" className="hover:text-ink">Art</Link>
          <Link href="/commercial" className="hover:text-ink">Commercial</Link>
          <Link href="/about" className="hover:text-ink">About</Link>
          <Link href="/contact" className="hover:text-ink">Contact</Link>
        </nav>
      </div>
    </footer>
  )
}