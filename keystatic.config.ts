import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },

  ui: {
    brand: {
      name: 'Ashee Jay Ventures',
    },
  },

  collections: {
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/data/post/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        excerpt: fields.text({
          label: 'Excerpt',
          description: 'Short summary shown in the blog list.',
          multiline: true,
        }),
        image: fields.image({
          label: 'Cover Image',
          directory: 'src/assets/images/blog',
          publicPath: '~/assets/images/blog',
        }),
        category: fields.text({ label: 'Category' }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (props) => props.value,
        }),
        author: fields.text({ label: 'Author', defaultValue: 'Ashee Jay Ventures' }),
        publishDate: fields.date({ label: 'Publish Date' }),
        draft: fields.checkbox({ label: 'Draft (unpublished)', defaultValue: false }),
        content: fields.markdoc({
          label: 'Content',
          extension: 'mdoc',
        }),
      },
    }),

    projects: collection({
      label: 'Projects & Gallery',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { contentField: 'description' },
      schema: {
        title: fields.slug({ name: { label: 'Project Title' } }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Furniture & Interior Décor', value: 'furniture' },
            { label: 'Bamboo Products', value: 'bamboo' },
            { label: 'Construction & Building Works', value: 'construction' },
            { label: 'Solar Energy Solutions', value: 'solar' },
            { label: 'Electrical Works', value: 'electrical' },
            { label: 'Procurement & Supplies', value: 'procurement' },
            { label: 'Agriculture & Agro Products', value: 'agriculture' },
          ],
          defaultValue: 'furniture',
        }),
        image: fields.image({
          label: 'Project Image',
          directory: 'src/assets/images/projects',
          publicPath: '~/assets/images/projects',
        }),
        location: fields.text({ label: 'Location (e.g. Kaduna, Nigeria)', defaultValue: 'Kaduna, Nigeria' }),
        completionDate: fields.date({ label: 'Completion Date' }),
        featured: fields.checkbox({ label: 'Featured on homepage', defaultValue: false }),
        description: fields.markdoc({
          label: 'Project Description',
          extension: 'mdoc',
        }),
      },
    }),
  },
});
