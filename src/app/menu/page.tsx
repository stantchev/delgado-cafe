import type { Metadata } from 'next';
import { MENU_ITEMS } from '@/lib/data';
import { MenuFilterClient } from '@/components/ui/MenuFilterClient';
import { FadeIn } from '@/components/ui/FadeIn';
import { getMenuPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Меню – Specialty Кафе, Пици, Десерти & Закуска',
  description:
    'Пълно меню на DelGado Козлодуй: specialty кафе напитки, домашни пици на тънко тесто, артизански десерти, питателна закуска и пресни безалкохолни. Вижте цените.',
  keywords: [
    'меню кафе Козлодуй',
    'пица Козлодуй',
    'specialty кафе',
    'десерти Козлодуй',
    'безалкохолни Козлодуй',
    'DelGado меню цени',
  ],
  alternates: { canonical: 'https://delgado-cafe.bg/menu' },
  openGraph: {
    type: 'website',
    locale: 'bg_BG',
    title: 'Меню | DelGado Козлодуй – Кафе, Пици, Десерти',
    description: 'Specialty кафе, домашни пици, артизански десерти и свежи безалкохолни.',
    url: 'https://delgado-cafe.bg/menu',
    images: [{ url: 'https://delgado-cafe.bg/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function MenuPage() {
  const schema = getMenuPageSchema();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="pt-36 pb-16 px-6 text-center relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blur-3xl opacity-10 pointer-events-none rounded-full"
          style={{ background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <FadeIn>
          <p className="font-mono text-xs tracking-[0.5em] text-gold uppercase mb-4">
            DelGado Козлодуй
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-black text-cream mb-4">
            Нашето Меню
          </h1>
          <p className="font-body text-xl text-cream/50 max-w-xl mx-auto">
            Specialty кафе, пици на тънко тесто, домашни десерти и пресни безалкохолни.
          </p>
          <div className="w-16 h-px bg-gold mx-auto mt-8" aria-hidden="true" />
        </FadeIn>
      </div>

      <section className="max-w-7xl mx-auto px-6 pb-32" aria-label="Меню позиции">
        <MenuFilterClient items={MENU_ITEMS} />
      </section>
    </>
  );
}
