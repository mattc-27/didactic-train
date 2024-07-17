import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [reactRefresh()],
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      // Custom Rollup options if needed
    },
  },
  server: {
    port: 8000,
    open: true,
  },
});
