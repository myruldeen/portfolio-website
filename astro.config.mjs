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
      manifest: {
        name: 'deno solution — Custom Websites, Web Apps & Mobile Apps',
        short_name: 'deno solution',
        description: 'deno solution builds custom websites, web apps and mobile apps for businesses that need something reliable, fast and easy to use.',
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
      },
      workbox: {
        // The default only precaches root-level icons, which left the
        // FontAwesome woff2 fonts, the logo and the hero image uncached,
        // so icons rendered as tofu boxes offline. ttf is deliberately
        // omitted: it is a fallback for browsers older than woff2 support
        // and costs 768KB of the precache.
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff2}'],
        globIgnores: ['**/_headers', '**/_redirects'],
        // Workbox caps precache entries at 2MiB and throws on anything larger,
        // which fails the whole Cloudflare Pages build. Nothing here should be
        // near that, so keep the ceiling explicit rather than accidental.
        maximumFileSizeToCacheInBytes: 2 * 1024 * 1024
      }
    })
  ]
});
