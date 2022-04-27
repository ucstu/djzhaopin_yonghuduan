import uni from "@dcloudio/vite-plugin-uni";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni(), checker({ typescript: true })],
});
