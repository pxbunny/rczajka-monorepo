import { blogSingletonData } from './documents/blog';
import { portfolioSingletonData } from './documents/portfolio';

export const singletons = [
  portfolioSingletonData,
  blogSingletonData,
];

export const singletonTypes = new Set(singletons.map(s => s.name));

export const singletonActions = new Set(['publish', 'discardChanges', 'restore']);
