'use client'

import Image from 'next/image'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { projectBySlugQuery } from '@/sanity/lib/queries'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

export default function ProjectPage() {
  const { category, slug } = useParams()
  const [project, setProject] = useState(null)
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  useEffect(() => {
    client.fetch(projectBySlugQuery, { slug }).then(setProject)
  }, [slug])

  if (category !== 'art' && category !== 'commercial') {
    notFound()
  }

  if (!project) {
    return (
      <main className="w-full px-6 md:px-12 pt-12 md:pt-20 pb-24 min-h-[60vh]">
        <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50">Loading…</p>
      </main>
    )
  }

  // Filter out empty/invalid gallery slots
  const galleryImages = (project.gallery || []).filter((img) => img?.asset)

  // Convert YouTube/Vimeo URLs into embed URLs
  const embedUrl = getEmbedUrl(project.videoUrl)

  // Build lightbox slides from gallery images
  const lightboxSlides = galleryImages.map((image) => ({
    src: urlFor(image).width(2400).url(),
    alt: image.alt || project.title,
  }))

  return (
    <>
      <main className="w-full px-6 md:px-12 pt-12 md:pt-20 pb-24">
        {/* Two-column hero: text left, sticky cover right */}
        <div className="grid grid-cols-12 gap-6 md:gap-12 mb-24 md:mb-32">
          {/* Left column: subtitle, title, body */}
{/* Left column: subtitle, title (top) + body (bottom) */}
<div
  className="col-span-12 md:col-span-7 flex flex-col"
  style={{ minHeight: 'calc(100vh - 15rem - 3rem)' }}
>
  {/* Top: subtitle + title */}
  <div>
    {project.subtitle && (
      <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-4">
        {project.subtitle}
      </p>
    )}
    <h1 className="font-display text-7xl md:text-[10rem] lg:text-[14rem] tracking-tight leading-[0.9]">
      {project.title}
    </h1>
  </div>

  {/* Bottom: description */}
  {project.description && (
    <div className="mt-auto pt-24 max-w-3xl font-mono text-base md:text-lg leading-loose tracking-wide text-ink whitespace-pre-wrap">
      {project.description}
    </div>
  )}
</div>

          {/* Right column: sticky cover image */}
          <div className="col-span-12 md:col-span-5">
            <div className="md:sticky md:top-60">
  <div
    className="relative overflow-hidden bg-cream-dark"
    style={{ height: 'calc(100vh - 15rem - 3rem)' }}
  >
                {project.coverImage && (
                  <Image
                    src={urlFor(project.coverImage).width(1600).url()}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Optional video embed */}
        {embedUrl && (
          <div className="mb-24 md:mb-32">
            <div className="relative w-full aspect-video bg-cream-dark overflow-hidden">
              <iframe
                src={embedUrl}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={project.title}
              />
            </div>
          </div>
        )}

        {/* Adaptive gallery grid */}
        {galleryImages.length > 0 && (
          <AdaptiveGallery
            images={galleryImages}
            onImageClick={(index) => setLightboxIndex(index)}
            projectTitle={project.title}
          />
        )}

        {/* Footer back link */}
        <div className="mt-24 pt-12 border-t border-ink/15 text-center">
          <Link
            href={`/${category}`}
            className="font-mono text-[10px] uppercase tracking-widest text-ink/50 hover:text-klein transition-colors"
          >
            ← Back to {category}
          </Link>
        </div>
      </main>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={lightboxSlides}
        styles={{ container: { backgroundColor: 'rgba(26, 26, 26, 0.95)' } }}
      />
    </>
  )
}

// Decides how many columns the gallery should use based on the average aspect ratio
// of the images: very portrait → 4 cols, balanced → 3 cols, wide → 2 cols
function AdaptiveGallery({ images, onImageClick, projectTitle }) {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 md:gap-6">
      {images.map((image, i) => (
        <button
          key={i}
          onClick={() => onImageClick(i)}
          className="group relative block w-full mb-4 md:mb-6 overflow-hidden bg-cream-dark cursor-pointer break-inside-avoid"
          style={{ aspectRatio: image.aspectRatio || 1 }}
        >
          <Image
            src={urlFor(image).width(1200).url()}
            alt={image.alt || `${projectTitle} — image ${i + 1}`}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </button>
      ))}
    </div>
  )
}

// Convert various video URLs to embeddable iframe URLs
function getEmbedUrl(url) {
  if (!url) return null

  // YouTube: https://youtube.com/watch?v=ID or https://youtu.be/ID
  const youtubeMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}`
  }

  // Vimeo: https://vimeo.com/ID
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/)
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`
  }

  return null
}