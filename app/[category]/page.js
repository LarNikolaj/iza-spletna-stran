'use client'

import Image from 'next/image'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { projectsByCategoryQuery } from '@/sanity/lib/queries'

export default function CategoryPage() {
  const { category } = useParams()
  const [projects, setProjects] = useState([])
  const [hoveredProject, setHoveredProject] = useState(null)

  useEffect(() => {
    if (category !== 'art' && category !== 'commercial') return
    client.fetch(projectsByCategoryQuery, { category }).then(setProjects)
  }, [category])

  if (category !== 'art' && category !== 'commercial') {
    notFound()
  }

  const previewProject = hoveredProject

  return (
    <>
      {/* Fixed preview — pinned to right side, with gutters matching page padding */}
     <aside className="hidden md:block fixed right-6 md:right-12 top-53 bottom-12 w-[calc(41.666%-3rem)] z-10">
        <div className="relative w-full h-full bg-cream overflow-hidden">
          {projects.map((project) => (
            project.coverImage && (
              <Image
                key={project._id}
                src={urlFor(project.coverImage).width(1600).url()}
                alt={project.title}
                fill
                className={`object-cover transition-opacity duration-500 ease-out ${
                  previewProject?._id === project._id ? 'opacity-100' : 'opacity-0'
                }`}
                sizes="(max-width: 1800px) 40vw, 720px"
              />
            )
          ))}
        </div>
      </aside>

      {/* Main content area */}
      <main className="w-full px-6 md:px-12 pt-12 md:pt-20 pb-24">
        <div className="grid grid-cols-12 gap-6 md:gap-12">
          {/* Project list — left side */}
          <div className="col-span-12 md:col-span-7">
          <div className="mb-4">
  <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
    Project List
  </p>
</div>

            <ul className="border-t border-ink/15">
              {projects.map((project, i) => (
                <li key={project._id} className="border-b border-ink/15">
                  <Link
                    href={`/${project.category}/${project.slug}`}
                    className="group grid grid-cols-12 gap-4 items-baseline py-5 md:py-6 transition-colors"
                    onMouseEnter={() => setHoveredProject(project)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="col-span-2 md:col-span-1">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50 group-hover:text-klein transition-colors">
                        {(i + 1).toString().padStart(2, '0')}
                      </p>
                    </div>
                    <div className="col-span-7 md:col-span-8">
                      <h2 className="font-mono text-base md:text-lg tracking-wide transition-transform duration-500 group-hover:translate-x-2">
  {project.title}
</h2>
                    </div>
                    <div className="col-span-3 text-right">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
                        {project.date ? new Date(project.date).getFullYear() : '—'}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empty spacer column (image floats over this on desktop) */}
          <div className="hidden md:block md:col-span-5" />
        </div>
      </main>
    </>
  )
}