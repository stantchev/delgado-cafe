import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedMenuSection } from '@/components/sections/FeaturedMenuSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { LocationSection } from '@/components/sections/LocationSection';
import { getHomePageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'DelGado – Кафе Бар | Козлодуй',
  description:
    'DelGado е premium specialty кафе бар в Козлодуй. Еспресо от единичен произход, домашни пици, артизански десерти и свежи безалкохолни. Отворено всеки ден.',
  keywords: [
    'кафе Козлодуй',
    'кафе бар Козлодуй',
    'specialty кафе България',
    'DelGado',
    'пица Козлодуй',
    'десерти Козлодуй',
  ],
  alternates: { canonical: 'https://delgado-cafe.bg' },
  openGraph: {
    type: 'website',
    locale: 'bg_BG',
    url: 'https://delgado-cafe.bg',
    siteName: 'DelGado Café',
    title: 'DelGado – Кафе, което остава в съзнанието | Козлодуй',
    description:
      'Premium specialty кафе бар в Козлодуй. Еспресо, пици, десерти и безалкохолни.',
    images: [{ url: 'https://delgado-cafe.bg/og-image.jpg', width: 1200, height: 630, alt: 'DelGado Café Козлодуй' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DelGado – Кафе Бар | Козлодуй',
    description: 'Premium specialty кафе бар в Козлодуй.',
    images: ['https://delgado-cafe.bg/og-image.jpg'],
  },
};

export default function HomePage() {
  const schema = getHomePageSchema();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HeroSection />
      <FeaturedMenuSection />
      <AboutSection />
      <LocationSection />
    </>
  );
}
