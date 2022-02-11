
import { ModuleOptions, ModuleHooks } from './module'

declare module '@nuxt/schema' {
  interface NuxtConfig { ['ariaui']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['ariaui']?: ModuleOptions }
  interface NuxtHooks extends ModuleHooks {}
}


export { default } from './module'
