import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: '/genShin/',
    alias: {
      "utils": resolve("src/utils"),
      "assets": resolve("src/assets")
    }
})
