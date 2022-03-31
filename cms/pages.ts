export const pages = {
  name: 'Pages',
  label: 'Pages',
  editor: { preview: false },
  label_singular: 'Page',
  folder: 'content/pages',
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
      label: 'Builder',
      name: 'builder',
      widget: 'list',
      types: [
        {
          label: 'Header Image',
          name: 'header',
          widget: 'object',
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
        },
        {
          label: 'CTA Section',
          name: 'cta',
          widget: 'object',
          fields: [
            {
              label: 'Title',
              name: 'title',
              widget: 'string',
              required: true,
            },
            {
              label: 'Link',
              name: 'link',
              widget: 'string',
            },
          ],
        },
        {
          label: 'Content',
          name: 'content',
          widget: 'object',
          fields: [
            {
              name: 'Content',
              widget: 'markdown',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
