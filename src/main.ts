import { createPinia } from "pinia";
import piniaPluginPersistUni from "pinia-plugin-persist-uni";
import { createSSRApp } from "vue";
// @ts-ignore
import App from "./App.vue";

export function createApp() {
  const app = createSSRApp(App);
  const pinia = createPinia();
  pinia.use(piniaPluginPersistUni);
  app.use(pinia);
  return {
    app,
  };
}
