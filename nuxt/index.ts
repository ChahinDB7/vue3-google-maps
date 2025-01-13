import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@chahindb7/vue3-google-map',
    configKey: 'vue3GoogleMap',
    compatibility: {
      nuxt: '>=3.0.0'
    }
  }, 
  defaults: {},
  setup() {
    // @ts-expect-error
    const { resolve } = createResolver(import.meta.url)

    addPlugin(resolve('./plugin.ts'))
  }
})