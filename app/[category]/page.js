import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { projectsByCategoryQuery } from '@/sanity/lib/queries'

export const revalidate = 60

export async function generateStaticParams() {
  return [{ category: 'art' }, { category: 'commercial' }]
}

export async function generateMetadata({ params }) {
  const { category } = await params
  const title = category.charAt(0).toUpperCase() + category.slice(1)
  return { title: `${title} — Iza` }
}

export default async function CategoryPage({ params }) {
  const { category } = await params

  if (category !== 'art' && category !== 'commercial') {
    notFound()
  }

  const projects = await client.fetch(projectsByCategoryQuery, { category })
  const heading = category === 'art' ? 'Art' : 'Commercial'
  const subhead = category === 'art' ? 'Personal Work' : 'Selected Clients'
  const indexNum = category === 'art' ? '01' : '02'

  return (
    <main className="max-w-[1800px] mx-auto px-6 md:px-12 pt-12 md:pt-20 pb-24">
      {/* Header */}
      <header className="mb-16 md:mb-24 grid grid-cols-12 gap-6 items-end">
        <div className="col-span-12 md:col-span-8">
          <p className="font-mono text-[10px] uppercase tracking-widest mb-4">
  <span className="text-klein">{indexNum}</span> <span className="text-ink/50">— {subhead}</span>
</p>
          <h1 className="font-display text-6xl md:text-8xl tracking-tight leading-none">{heading}</h1>
        </div>
        <div className="col-span-12 md:col-span-4 md:text-right">
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
            {projects.length.toString().padStart(2, '0')} {projects.length === 1 ? 'Project' : 'Projects'}
          </p>
        </div>
      </header>

      {/* Grid */}
      {projects.length === 0 ? (
        <p className="font-mono text-xs uppercase tracking-widest text-ink/50">
          No projects yet — coming soon.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-12 md:gap-y-16">
          {projects.map((project) => (
            <Link
              key={project._id}
              href={`/${project.category}/${project.slug}`}
              className="group"
            >
             <div className="relative aspect-square overflow-hidden bg-cream">
  {project.coverImage && (
    <Image
      src={urlFor(project.coverImage).width(1000).url()}
      alt={project.title}
      fill
      className="object-cover grayscale mix-blend-multiply transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:scale-[1.03]"
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  )}
</div>
              <div className="mt-4 flex items-baseline justify-between">
                <h2 className="font-display text-lg md:text-xl tracking-tight">
                  {project.title}
                </h2>
                {project.date && (
                  <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
                    {new Date(project.date).getFullYear()}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  )
}