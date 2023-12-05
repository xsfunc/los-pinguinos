import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import zipPack from 'vite-plugin-zip-pack'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    zipPack({ outDir: 'dist' }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
    },
  },

  // relative path for build
  base: '',
})
