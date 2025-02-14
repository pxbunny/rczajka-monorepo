import category from './documents/category';
import blog from './documents/blog';
import post from './documents/post';
import author from './documents/author';
import portforlio from './documents/portfolio';
import blockContent from './types/blockContent';

const documents = [
  author,
  blog,
  category,
  portforlio,
  post,
];

export const types = [
  ...documents,
  // types
  blockContent,
];
