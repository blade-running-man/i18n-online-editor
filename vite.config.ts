import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { defineConfig } from 'vite'
import { resolve as pathResolve } from 'path'

const resolve = (path: string) => pathResolve(__dirname, path)
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  server: {
    host: true,
    open: true,
    // port: 3000,
  },
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  base: '/i18n-online-editor/',
})
