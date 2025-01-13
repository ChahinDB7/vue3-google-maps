import { defineNuxtPlugin } from '#app'
import { GoogleMap, Marker } from '../src/index'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('GoogleMap', GoogleMap)
  nuxtApp.vueApp.component('Marker', Marker)
})
