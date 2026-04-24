import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { projectBySlugQuery } from '@/sanity/lib/queries'

export const revalidate = 60

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = await client.fetch(projectBySlugQuery, { slug })
  if (!project) return { title: 'Not Found — Iza' }
  return { title: `${project.title} — Iza` }
}

export default async function ProjectPage({ params }) {
  const { category, slug } = await params

  if (category !== 'art' && category !== 'commercial') {
    notFound()
  }

  const project = await client.fetch(projectBySlugQuery, { slug })

  if (!project || project.category !== category) {
    notFound()
  }

  const subhead = category === 'art' ? 'Personal Work' : 'Selected Clients'
  const indexNum = category === 'art' ? '01' : '02'

  return (
    <main className="max-w-[1800px] mx-auto px-6 md:px-12 pt-12 md:pt-20 pb-24">
      {/* Breadcrumb back */}
      <Link
  href={`/${category}`}
  className="inline-block font-mono text-[10px] uppercase tracking-widest mb-12 group"
>
  <span className="text-ink/50 group-hover:text-klein transition-colors">←</span>{' '}
  <span className="text-klein">{indexNum}</span>{' '}
  <span className="text-ink/50 group-hover:text-ink transition-colors">— {category}</span>
</Link>

      {/* Project header */}
      <header className="mb-16 md:mb-24 grid grid-cols-12 gap-6 items-end">
        <div className="col-span-12 md:col-span-8">
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-4">
            {subhead}
          </p>
          <h1 className="font-display text-5xl md:text-7xl tracking-tight leading-[1.05]">
            {project.title}
          </h1>
        </div>
        <div className="col-span-12 md:col-span-4 md:text-right space-y-2">
          {project.date && (
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
              {new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
            </p>
          )}
          {project.gallery && project.gallery.length > 0 && (
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
              {project.gallery.length} {project.gallery.length === 1 ? 'Image' : 'Images'}
            </p>
          )}
        </div>
      </header>

      {/* Cover image — full width, centered */}
      {project.coverImage && (
        <div className="relative aspect-[16/10] mb-16 md:mb-24 bg-cream-dark overflow-hidden">
          <Image
            src={urlFor(project.coverImage).width(2400).url()}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 1800px) 100vw, 1800px"
            priority
          />
        </div>
      )}

      {/* Description */}
      {project.description && (
        <div className="max-w-2xl mx-auto mb-16 md:mb-24">
          <p className="font-display text-xl md:text-2xl leading-relaxed text-ink/80 whitespace-pre-wrap">
            {project.description}
          </p>
        </div>
      )}

      {/* Gallery — alternating sizes */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {project.gallery.map((image, i) => {
            // Alternating layout pattern: full, half-left, half-right, two-thirds, repeat
            const layouts = [
              'col-span-12',                                  // full width
              'col-span-12 md:col-span-6',                    // half left
              'col-span-12 md:col-span-6 md:col-start-7',     // half right
              'col-span-12 md:col-span-8 md:col-start-3',     // two-thirds centered
            ]
            const layoutClass = layouts[i % layouts.length]

            // Aspect ratio varies too
            const aspects = ['aspect-[16/10]', 'aspect-[4/5]', 'aspect-[4/5]', 'aspect-[3/2]']
            const aspectClass = aspects[i % aspects.length]

            // Skip empty image slots
if (!image?.asset) return null

return (
  <figure key={i} className={layoutClass}>
    <div className={`relative ${aspectClass} bg-cream-dark overflow-hidden`}>
      <Image
        src={urlFor(image).width(2000).url()}
        alt={image.alt || `${project.title} — image ${i + 1}`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 80vw"
      />
    </div>
                {image.alt && (
                  <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-widest text-ink/50">
                    Fig. {(i + 1).toString().padStart(2, '0')} — {image.alt}
                  </figcaption>
                )}
              </figure>
            )
          })}
        </div>
      )}

      {/* Footer back link */}
      <div className="mt-24 pt-12 border-t border-ink/15 text-center">
        <Link
          href={`/${category}`}
          className="font-mono text-[10px] uppercase tracking-widest text-ink/50 hover:text-ink transition-colors"
        >
          ← Back to {category}
        </Link>
      </div>
    </main>
  )
}