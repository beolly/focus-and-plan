import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',

      manifest: {
        name: 'Focus & Plan',
        short_name: 'Focus & Plan',
        description: 'Застосунок для організації навчання',
        theme_color: '#376F60',
        background_color: '#F7F6F3',
        display: 'standalone',
        orientation: 'portrait-primary',

  icons: [
  {
    src: '/icon.svg',
    sizes: '192x192',
    type: 'image/svg+xml',
  },
  {
    src: '/icon.svg',
    sizes: '512x512',
    type: 'image/svg+xml',
  },
],
      },
    }),
  ],
});