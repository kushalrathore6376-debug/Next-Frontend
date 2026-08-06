import { siteConfig } from '@/lib/seo';

export default function manifest() {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#f4f2ea',
    theme_color: '#f4f2ea',
    icons: [
      {
        src: '/dt-favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  };
}
