import { ImBlog } from 'react-icons/im';
import { defineField, defineType } from 'sanity';

export const blogSingletonData = {
  name: 'blog',
  title: 'Blog',
  icon: ImBlog,
};

export default defineType({
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
  ...blogSingletonData,
});
