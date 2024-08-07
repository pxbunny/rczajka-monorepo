import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'p7wzac3o',
    dataset: 'production'
  },
  project: {
    basePath: '/studio'
  }
})
