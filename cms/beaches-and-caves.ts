export const beaches = {
  name: 'Beaches and Caves',
  label: 'Beaches',
  editor: { preview: false },
  label_singular: 'Beach',
  folder: 'content/beaches',
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
      label: 'Description',
      name: 'description',
      widget: 'string',
      required: true,
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
      options: ['Beach', 'Cave', 'Other'],
    },
  ],
}
