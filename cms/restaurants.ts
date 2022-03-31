export const restaurants = {
  name: 'Restaurants',
  label: 'Restaurants',
  editor: { preview: false },
  label_singular: 'Restaurant',
  folder: 'content/restaurants',
  create: true,
  slug: '{{slug}}',
  extension: 'json',
  format: 'json',
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: true,
    },
    {
      label: 'Cover Image',
      name: 'cover',
      widget: 'image',
      required: false,
      media_library: { config: { multiple: false } },
    },
    {
      label: 'Address',
      name: 'address',
      widget: 'string',
    },
    {
      label: 'Location Link',
      name: 'locationLink',
      widget: 'string',
    },
    {
      label: 'Type',
      name: 'type',
      widget: 'select',
      options: ['Asian', 'Italian', 'Mediterranean', 'Mexican', 'Other'],
    },
  ],
}