import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { allProjectsQuery } from '@/sanity/lib/queries'

export const revalidate = 60 // rebuild the page every 60 seconds at most

export default async function Home() {
  const projects = await client.fetch(allProjectsQuery)

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">All Projects</h1>

      {projects.length === 0 ? (
        <p>No projects yet. Add one in the Studio.</p>
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
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  {project.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  )
}