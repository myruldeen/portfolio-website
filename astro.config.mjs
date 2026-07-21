import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
import astroPwa from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    tailwind(),
    astroPwa({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Muhammad Amirul — Portfolio',
        short_name: 'Amirul',
        description: 'Portfolio of Muhammad Amirul, an IT Support Analyst building IoT, software, and hardware solutions.',
        theme_color: '#050505',
        background_color: '#0a0a0a',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
});
