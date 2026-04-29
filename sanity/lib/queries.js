import { groq } from 'next-sanity'

// Fetch all projects, newest first
export const allProjectsQuery = groq`
  *[_type == "project"] | order(date desc, _createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    coverImage,
    date
  }
`

// Fetch all projects in a specific category
export const projectsByCategoryQuery = groq`
  *[_type == "project" && category == $category] | order(date desc, _createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    coverImage,
    date
  }
`

// Fetch one project by its slug
export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    subtitle,
    "slug": slug.current,
    category,
    coverImage,
    description,
    videoUrl,
    gallery[]{
      ...,
      "aspectRatio": asset->metadata.dimensions.aspectRatio
    },
    date
  }
`