import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
 plugins: [vue(),vueJsx()],
 test:{
   globals:true,
   environment: "jsdom",
 },
 resolve: {
  alias: {
    "@":  path.resolve(__dirname, './src')
  },
},
css: {
  preprocessorOptions: {
    scss: {
      additionalData: `@import "@/styles/_variables.scss";@import "@/styles/_mixins.scss";`,
    },
  },
}
})