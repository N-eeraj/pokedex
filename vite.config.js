import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/pokedex/' : '/',
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, './src'),
      '@pages' : path.resolve(__dirname, './src/pages'),
      '@components' : path.resolve(__dirname, './src/components'),
      '@icons' : path.resolve(__dirname, './src/assets/icons'),
      '@images' : path.resolve(__dirname, './src/assets/images'),
      '@hooks' : path.resolve(__dirname, './src/hooks'),
    }
  },
  plugins: [react()],
})