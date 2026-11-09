// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://stephenbreen.dev',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    // Colours come from --astro-code-* variables in global.css, so code
    // blocks follow the light/dark palette like everything else.
    shikiConfig: { theme: 'css-variables' },
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Newsreader',
      cssVariable: '--font-newsreader',
      fallbacks: ['Iowan Old Style', 'Georgia', 'serif'],
      options: {
        variants: [
          {
            src: ['@fontsource-variable/newsreader/files/newsreader-latin-opsz-normal.woff2'],
            weight: '200 800',
            style: 'normal',
            display: 'swap',
          },
          {
            src: ['@fontsource-variable/newsreader/files/newsreader-latin-opsz-italic.woff2'],
            weight: '200 800',
            style: 'italic',
            display: 'swap',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'JetBrains Mono',
      cssVariable: '--font-jetbrains-mono',
      fallbacks: ['SF Mono', 'Menlo', 'monospace'],
      options: {
        variants: [
          {
            src: ['@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2'],
            weight: '100 800',
            style: 'normal',
            display: 'swap',
          },
        ],
      },
    },
  ],
});
