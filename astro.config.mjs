import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

export default defineConfig({
  site: 'https://dbd-cheat.com',
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/dbd-cheats/',
    '/cheats/lite/': '/products/dbd-cheats/dbd/',
    '/cheats/pro/': '/products/dbd-cheats/dbd/',
    '/cheats/elite/': '/products/dbd-cheats/dbd/',
    '/cheats/compare/': '/blogs/dbd-cheats-comparison/',
    '/contact/': '/support/',
    '/blog/': '/blogs/',
    '/blog/[slug]/': '/blogs/[slug]',
    '/products/dbd-cheats/elite/': '/products/dbd-cheats/dbd/',
    '/products/dbd-cheats/lite/': '/products/dbd-cheats/dbd/',
    '/products/dbd-cheats/pro/': '/products/dbd-cheats/dbd/',
    '/products/dbd-cheats/unlock-all/': '/products/dbd-cheats/',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/404') && !page.includes('/go/') && !page.includes('/support/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});
