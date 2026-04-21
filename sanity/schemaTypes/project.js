export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The URL path for this project, e.g. "golden-hour". Click Generate to auto-create from title.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Is this Art or Commercial work?',
      options: {
        list: [
          { title: 'Art', value: 'art' },
          { title: 'Commercial', value: 'commercial' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'The main image shown in listings and as the project hero.',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short paragraph about this project.',
      rows: 4,
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      description: 'All the images in this project. Drag to reorder.',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Alt text',
              type: 'string',
              description: 'For accessibility and SEO. Describe the image briefly.',
            },
          ],
        },
      ],
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'When was this project made?',
    },
  ],
  orderings: [
    {
      title: 'Date, newest first',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'coverImage',
    },
    prepare({ title, category, media }) {
      return {
        title,
        subtitle: category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Uncategorized',
        media,
      }
    },
  },
}