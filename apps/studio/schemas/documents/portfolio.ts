import {defineField, defineType} from 'sanity';

export default defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      readOnly: true,
      initialValue: 'Rafał Czajka',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
    }),
  ]
});
