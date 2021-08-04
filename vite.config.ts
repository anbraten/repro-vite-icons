import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import Icons from 'vite-plugin-icons';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Icons()],
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
});
