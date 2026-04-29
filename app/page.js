import Link from 'next/link'

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col md:flex-row overflow-hidden bg-cream -mt-32 md:-mt-40">
      <Panel
        href="/art"
        label="Art"
        meta="Personal Work"
        index="01"
      />
      <div className="hidden md:block w-px bg-ink/15 z-10" />
      <div className="md:hidden h-px bg-ink/15 z-10" />
      <Panel
        href="/commercial"
        label="Commercial"
        meta="Selected Clients"
        index="02"
      />

      <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-20">
        <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
          Photography &amp; Art — Slovenia
        </p>
      </div>
      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-20">
        <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
          Choose a section
        </p>
      </div>
    </main>
  )
}

function Panel({ href, label, meta, index }) {
  return (
    <Link
      href={href}
      className="relative group flex-1 overflow-hidden flex flex-col items-center justify-center transition-colors duration-500 ease-out hover:bg-cream-dark"
    >
      <p className="font-mono text-[10px] uppercase tracking-widest mb-4 transition-colors duration-500 ease-out">
        <span className="text-klein">{index}</span>{' '}
        <span className="text-ink/50 group-hover:text-ink/70">— {meta}</span>
      </p>
      <h2 className="font-display text-7xl md:text-9xl tracking-tight text-ink transition-transform duration-500 ease-out group-hover:scale-[1.03]">
        {label}
      </h2>
    </Link>
  )
}