import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { groq } from 'next-sanity'

export const revalidate = 60

// Get one cover image per category to use as the panel background
const landingQuery = groq`{
  "art": *[_type == "project" && category == "art" && defined(coverImage)] | order(date desc, _createdAt desc)[0]{ coverImage, title },
  "commercial": *[_type == "project" && category == "commercial" && defined(coverImage)] | order(date desc, _createdAt desc)[0]{ coverImage, title }
}`

export default async function Home() {
  const { art, commercial } = await client.fetch(landingQuery)

  return (
    <main className="h-screen w-screen flex flex-col md:flex-row overflow-hidden">
      {/* ART PANEL */}
      <Link
        href="/art"
        className="relative group flex-1 overflow-hidden bg-black"
      >
        {art?.coverImage && (
          <Image
            src={urlFor(art.coverImage).width(1600).url()}
            alt=""
            fill
            className="object-cover opacity-60 transition-all duration-700 group-hover:opacity-80 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-6xl md:text-8xl font-bold tracking-wider transition-transform duration-500 group-hover:scale-110">
            ART
          </h2>
        </div>
      </Link>

      {/* COMMERCIAL PANEL */}
      <Link
        href="/commercial"
        className="relative group flex-1 overflow-hidden bg-black"
      >
        {commercial?.coverImage && (
          <Image
            src={urlFor(commercial.coverImage).width(1600).url()}
            alt=""
            fill
            className="object-cover opacity-60 transition-all duration-700 group-hover:opacity-80 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-6xl md:text-8xl font-bold tracking-wider transition-transform duration-500 group-hover:scale-110">
            COMMERCIAL
          </h2>
        </div>
      </Link>
    </main>
  )
}