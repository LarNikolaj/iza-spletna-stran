import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { projectBySlugQuery } from '@/sanity/lib/queries'

export const revalidate = 60

export default async function ProjectPage({ params }) {
  const { category, slug } = await params

  if (category !== 'art' && category !== 'commercial') {
    notFound()
  }

  const project = await client.fetch(projectBySlugQuery, { slug })

  if (!project || project.category !== category) {
    notFound()
  }

  return (
    <main className="min-h-screen p-8 max-w-6xl mx-auto">
      <Link href="/" className="text-sm text-gray-500 hover:text-black">
        ← Back
      </Link>

      <header className="mt-8 mb-12">
        <p className="text-sm uppercase tracking-wide text-gray-500">
          {project.category}
        </p>
        <h1 className="text-5xl font-bold mt-2">{project.title}</h1>
        {project.date && (
          <p className="text-sm text-gray-500 mt-2">
            {new Date(project.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
            })}
          </p>
        )}
      </header>

      {project.coverImage && (
        <div className="relative aspect-[16/10] mb-12 bg-gray-100">
          <Image
            src={urlFor(project.coverImage).width(1600).url()}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>
      )}

      {project.description && (
        <div className="max-w-2xl mx-auto mb-16">
          <p className="text-lg leading-relaxed whitespace-pre-wrap">
            {project.description}
          </p>
        </div>
      )}

      {project.gallery && project.gallery.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.gallery.map((image, i) => (
            <div key={i} className="relative aspect-[4/5] bg-gray-100">
              <Image
                src={urlFor(image).width(1200).url()}
                alt={image.alt || `${project.title} — image ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      )}
    </main>
  )
}