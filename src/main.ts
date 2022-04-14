import { createSSRApp } from 'vue'
import { store, key } from './stores'
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)
  app.use(store, key)
  return {
    app,
  }
}
