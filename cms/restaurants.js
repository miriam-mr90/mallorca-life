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
      label: 'Background Image',
      name: 'photo',
      widget: 'image',
      required: true,
      media_library: { config: { multiple: false } },
    },
  ],
}
