import { defineConfig } from 'vite'
import { resolve } from 'path'
import { ogImagePlugin } from './vite-plugins/og-image-plugin.js'

export default defineConfig({
  plugins: [ogImagePlugin()],
  root: '.',
  publicDir: false, // Disable automatic public dir copying
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    assetsInlineLimit: 0, // Never inline assets
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        banner: resolve(__dirname, 'banner.html')
      },
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `img/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    host: true
  }
})
