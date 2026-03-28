import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DelGado Café',
    short_name: 'DelGado',
    description: 'Premium кафе бар в Козлодуй, България',
    start_url: '/',
    display: 'standalone',
    background_color: '#0D0803',
    theme_color: '#C9A84C',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
