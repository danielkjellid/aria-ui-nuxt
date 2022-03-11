
import { ModuleOptions } from './module'

declare module '@nuxt/schema' {
  interface NuxtConfig { ['ariaui']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['ariaui']?: ModuleOptions }
}


export { default } from './module'
