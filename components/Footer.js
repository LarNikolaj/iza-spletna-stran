import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <div>
          <p className="text-sm font-bold tracking-wide">IZA</p>
          <p className="text-xs text-gray-500 mt-1">© {year} All work shown is the property of the artist.</p>
        </div>

        <nav className="flex flex-wrap gap-6 text-xs uppercase tracking-wide text-gray-500">
          <Link href="/art" className="hover:text-black">Art</Link>
          <Link href="/commercial" className="hover:text-black">Commercial</Link>
          <Link href="/about" className="hover:text-black">About</Link>
          <Link href="/contact" className="hover:text-black">Contact</Link>
        </nav>
      </div>
    </footer>
  )
}