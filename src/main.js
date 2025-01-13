import { createApp } from 'vue'
import App from './App.vue'

// Import components
import { GoogleMap, Marker } from './index.ts'

const app = createApp(App)

// Register components globally
app.component('GoogleMap', GoogleMap)
app.component('Marker', Marker)

// Mount the app
app.mount('#app')
