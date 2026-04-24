import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { projectsByCategoryQuery } from '@/sanity/lib/queries'

export const revalidate = 60

// Tells Next.js which category values are valid URLs
export async function generateStaticParams() {
  return [{ category: 'art' }, { category: 'commercial' }]
}

// Sets the browser tab title based on category
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

  return (
    <main className="min-h-screen p-8 max-w-7xl mx-auto">
      <Link href="/" className="text-sm text-gray-500 hover:text-black">
        ← Home
      </Link>

      <header className="mt-8 mb-12">
        <h1 className="text-5xl font-bold">{heading}</h1>
        <p className="text-sm text-gray-500 mt-2">
          {projects.length} {projects.length === 1 ? 'project' : 'projects'}
        </p>
      </header>

      {projects.length === 0 ? (
        <p className="text-gray-500">No projects yet in this category.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project._id}
              href={`/${project.category}/${project.slug}`}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                {project.coverImage && (
                  <Image
                    src={urlFor(project.coverImage).width(800).url()}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
              </div>
              <div className="mt-2">
                <h2 className="text-lg">{project.title}</h2>
                {project.date && (
                  <p className="text-sm text-gray-500">
                    {new Date(project.date).toLocaleDateString('en-US', { year: 'numeric' })}
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