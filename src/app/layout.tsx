import type { Metadata } from 'next';
import { Playfair_Display, Cormorant_Garamond, DM_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  display: 'swap',
  weight: ['300', '400', '500'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://delgado-cafe.bg'),
  title: {
    default: 'DelGado – Кафе & Пицария | Козлодуй',
    template: '%s | DelGado Козлодуй',
  },
  description:
    'DelGado е premium кафе-пицария в Козлодуй. Specialty еспресо, домашни пици на тънко тесто, артизански десерти и пресни безалкохолни. Доставка и на място. Отворено всеки ден.',
  keywords: [
    'кафе Козлодуй',
    'пица Козлодуй',
    'кафе бар Козлодуй',
    'пицария Козлодуй',
    'DelGado',
    'specialty кафе',
    'доставка пица Козлодуй',
    'кафе пицария Козлодуй',
  ],
  authors: [{ name: 'DelGado Café & Pizzeria' }],
  creator: 'DelGado',
  openGraph: {
    type: 'website',
    locale: 'bg_BG',
    url: 'https://delgado-cafe.bg',
    siteName: 'DelGado Café & Pizzeria',
    title: 'DelGado – Кафе & Пицария | Козлодуй',
    description: 'Specialty кафе и домашни пици в Козлодуй.',
    images: [{ url: 'https://delgado-cafe.bg/og-image.jpg', width: 1200, height: 630, alt: 'DelGado Козлодуй' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DelGado – Кафе & Пицария | Козлодуй',
    description: 'Specialty кафе и домашни пици в Козлодуй.',
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: 'https://delgado-cafe.bg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg" className={`${playfair.variable} ${cormorant.variable} ${dmMono.variable}`}>
      <body className="noise-overlay antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
