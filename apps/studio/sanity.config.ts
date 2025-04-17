import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

import { singletonActions, singletonTypes, types } from './schemas';
import { structure } from './deskStructure';
import { Logo } from './components';

export default defineConfig({
  name: 'default',
  title: 'Rafał Czajka',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,

  icon: Logo,
  tasks: { enabled: false },
  scheduledPublishing: { enabled: false },

  plugins: [
    structureTool({ structure }),
    visionTool()
  ],

  schema: {
    types,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    comments: { enabled: false },
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
