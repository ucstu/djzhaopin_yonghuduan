import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";
import { createSSRApp } from "vue";
// @ts-ignore
import App from "./App.vue";

export function createApp() {
  const app = createSSRApp(App);
  const pinia = createPinia();
  pinia.use(piniaPluginPersist);
  app.use(pinia);
  return {
    app,
  };
}
