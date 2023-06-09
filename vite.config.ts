import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@atoms', replacement: '/src/atoms' },
      { find: '@data', replacement: '/src/data' },
      { find: '@styles', replacement: '/src/styles' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@components', replacement: '/src/components' },
      { find: '@', replacement: '/src' },
    ],
  },
});
