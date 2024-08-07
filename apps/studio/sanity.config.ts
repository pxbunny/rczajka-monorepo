import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { types } from './schemas';
import { structure } from './deskStructure';

export default defineConfig({
  name: 'default',
  title: 'www.rczajka.me',

  projectId: 'p7wzac3o',
  dataset: 'production',

  plugins: [structureTool({ structure }), visionTool()],
  schema: { types },
})
