import uni from "@dcloudio/vite-plugin-uni";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "~@/uni.scss";`,
      },
    },
  },
  plugins: [uni(), checker({ typescript: true })],
});
