import category from './documents/category';
import post from './documents/post';
import author from './documents/author';
import portforlio from './documents/portfolio';
import blockContent from './types/blockContent';

const documents = [
  author,
  category,
  portforlio,
  post,
];

export const types = [
  ...documents,
  // types
  blockContent,
];
