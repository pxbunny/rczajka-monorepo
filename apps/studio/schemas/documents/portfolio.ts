import { ImProfile } from 'react-icons/im';
import { defineField, defineType } from 'sanity';

export const portfolioSingletonData = {
  name: 'portfolio',
  title: 'Portfolio',
  icon: ImProfile,
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
      name: 'job_position',
      title: 'Job Position',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
  ...portfolioSingletonData,
});
