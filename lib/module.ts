import path from 'path'
import { defineNuxtModule, addPluginTemplate } from '@nuxt/kit'

import { ConfigType } from 'aria-ui-core/dist/utils/config'

export default defineNuxtModule<ConfigType>({
  meta: {
    name: 'aria-ui-nuxt',
    configKey: 'ariaUI',
  },
  defaults: {
    defaultHomePath: '/',
    defaultLinkTag: 'nuxt-link',
  },
  setup(options) {
    addPluginTemplate({
      src: path.resolve(__dirname, 'templates/plugin.ts'),
      options,
    })
  },
})
