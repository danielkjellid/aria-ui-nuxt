// @ts-ignore
import AriaUI from 'aria-ui-core'
// @ts-ignore
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(({ vueApp }) => {
  // @ts-ignore
  vueApp.use(AriaUI, <%= JSON.stringify(options, null, 2) %>)
})
