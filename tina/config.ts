import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: 'main',
  clientId: process.env.TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',
  build: { outputFolder: 'admin', publicFolder: 'public' },
  media: { tina: { mediaRoot: 'images', publicFolder: 'public' } },
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Posts',
        path: 'content/posts',
        format: 'mdx',
        fields: [
          { type: 'string', name: 'title', label: 'Title', isTitle: true, required: true },
          { type: 'string', name: 'description', label: 'Description', required: false, ui: { component: 'textarea' } },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
            templates: [
              { name: 'Counter', label: 'Counter', fields: [{ name: 'counter', label: 'Counter', type: 'string' }] },
              {
                name: 'Image',
                label: 'Image',
                fields: [
                  { name: 'src', label: 'Image', type: 'string', required: false, ui: { component: 'image' } },
                  { name: 'alt', label: 'Description', type: 'string', required: false },
                ],
              },
            ],
          },
        ],
        ui: { router: ({ document }) => `/posts/${document._sys.filename}` },
      },
      {
        name: 'page',
        label: 'Pages',
        path: 'content/pages',
        format: 'mdx',
        fields: [
          { type: 'string', name: 'title', label: 'Title', isTitle: true, required: true },
          { type: 'string', name: 'description', label: 'Description', required: false, ui: { component: 'textarea' } },
          { type: 'rich-text', name: 'body', label: 'Body', isBody: true },
        ],
        ui: { router: ({ document }) => `/${document._sys.filename}` },
      },
    ],
  },
});
