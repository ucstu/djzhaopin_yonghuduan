import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use './src/styles/element/index.scss' as *;`,
      },
    },
  },
  plugins: [vue(),
  AutoImport({
    resolvers: [ElementPlusResolver({
      importStyle: "sass",
    })],
  }),
  Components({
    resolvers: [ElementPlusResolver({
      importStyle: "sass",
    })],
  }),
  ElementPlus({
    useSource: true,
  })]
})
