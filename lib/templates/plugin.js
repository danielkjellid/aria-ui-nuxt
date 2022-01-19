import AriaUI from 'aria-ui-core'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(AriaUI)
})
