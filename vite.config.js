import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: {
        main: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
        themes: fileURLToPath(new URL('./src/themes/index.ts', import.meta.url)),
      },
      fileName: (format, entryName) => {
        const formatExtensionMap = {
          es: "mjs",
          cjs: "cjs",
          umd: "umd.js",
        };

        const ext = formatExtensionMap[format];

        if (entryName === "themes") {
          return `themes/index.${ext}`;
        }

        return `vue3-google-maps.${format}.js`
      },
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
    },
    sourcemap: true, // Enable sourcemaps for debugging (optional)
  },
})
