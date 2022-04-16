import { createSSRApp } from "vue";
// @ts-ignore
import App from "./App.vue";
import { key, store } from "./stores";

export function createApp() {
  const app = createSSRApp(App);
  app.use(store, key);
  return {
    app,
  };
}
