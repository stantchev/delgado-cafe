import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn';
import { OpenNowBadge } from '@/components/ui/OpenNowBadge';
import { MENU_ITEMS, CONTACT_INFO } from '@/lib/data';
import { formatPrice } from '@/lib/utils';
import { MenuCard } from '@/components/ui/MenuCard';

export const metadata: Metadata = {
  title: 'Пица Козлодуй – Домашни Пици на Тънко Тесто | DelGado',
  description:
    'Поръчайте вкусна пица в Козлодуй! DelGado предлага 6 вида домашни пици на тънко тесто – Маргарита, Диавола, Куатро Формаджи и още. Доставка и на място. Отворено всеки ден.',
  keywords: [
    'пица Козлодуй',
    'пицария Козлодуй',
    'доставка пица Козлодуй',
    'поръчай пица Козлодуй',
    'тънко тесто пица Козлодуй',
    'пица България',
    'Маргарита Козлодуй',
    'DelGado пица',
    'пицария Враца',
  ],
  alternates: { canonical: 'https://delgado-cafe.bg/pizza-kozloduy' },
  openGraph: {
    type: 'website',
    locale: 'bg_BG',
    title: 'Пица Козлодуй | DelGado – Домашни Пици на Тънко Тесто',
    description: '6 вида домашни пици. Доставка и на място в Козлодуй.',
    url: 'https://delgado-cafe.bg/pizza-kozloduy',
    images: [{ url: 'https://delgado-cafe.bg/og-image.jpg', width: 1200, height: 630 }],
  },
};

const pizzaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['CafeOrCoffeeShop', 'FoodEstablishment'],
      '@id': 'https://delgado-cafe.bg/#business',
      name: 'DelGado Café & Pizzeria',
      description: 'Кафе-пицария в Козлодуй. Домашни пици на тънко тесто и specialty кафе.',
      url: 'https://delgado-cafe.bg',
      telephone: '+359893123456',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'ул. Христо Ботев 14',
        addressLocality: 'Козлодуй',
        postalCode: '3320',
        addressCountry: 'BG',
      },
      servesCuisine: ['Italian Pizza', 'Specialty Coffee'],
      hasMenu: 'https://delgado-cafe.bg/menu',
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '124' },
    },
    {
      '@type': 'WebPage',
      url: 'https://delgado-cafe.bg/pizza-kozloduy',
      name: 'Пица Козлодуй – DelGado',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Начало', item: 'https://delgado-cafe.bg' },
          { '@type': 'ListItem', position: 2, name: 'Пица Козлодуй', item: 'https://delgado-cafe.bg/pizza-kozloduy' },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Правите ли доставка на пица в Козлодуй?', acceptedAnswer: { '@type': 'Answer', text: 'Да! DelGado прави доставка на пица в Козлодуй. Обадете се на +359 893 123 456.' } },
        { '@type': 'Question', name: 'Колко вида пици имате?', acceptedAnswer: { '@type': 'Answer', text: 'Предлагаме 6 вида пици: Маргарита, Прошуто е Фунги, Куатро Формаджи, Диавола, Вегетариана и Капричоза.' } },
        { '@type': 'Question', name: 'Каква е цената на пицата в DelGado?', acceptedAnswer: { '@type': 'Answer', text: 'Пиците варират от €14.00 до €17.50. Плащаме в евро.' } },
      ],
    },
  ],
};

const pizzas = MENU_ITEMS.filter((i) => i.category === 'pizza');

const PIZZA_FEATURES = [
  { icon: '🔥', title: 'Пещ на дърва', desc: 'Изпечена на висока температура за перфектна хрупкавост.' },
  { icon: '🌾', title: 'Тънко тесто', desc: 'Ръчно разточено тесто по неаполитанска рецепта.' },
  { icon: '🍅', title: 'Доматен сос', desc: 'San Marzano домати, зехтин, сол и пресен босилек.' },
  { icon: '🧀', title: 'Моцарела fior di latte', desc: 'Прясна моцарела – не замразена, не опакована.' },
];

export default function PizzaKozloduyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pizzaJsonLd) }} />

      {/* Hero */}
      <div className="pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] blur-3xl opacity-10 pointer-events-none rounded-full"
          style={{ background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)' }} aria-hidden="true" />
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <OpenNowBadge className="mb-6 inline-flex" />
            <h1 className="font-display text-5xl md:text-6xl font-black text-cream mt-6 mb-6 leading-tight">
              Пица Козлодуй –{' '}
              <span className="gold-gradient">DelGado</span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-cream/60 leading-relaxed max-w-2xl mx-auto mb-8">
              Домашни пици на <strong className="text-cream/80">тънко тесто</strong> в сърцето на Козлодуй. Доставка и на място. 6 вида, всеки ден.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+359893123456"
                className="px-8 py-4 bg-gold text-espresso font-mono text-sm font-semibold tracking-widest uppercase hover:bg-gold-light transition-all rounded-sm">
                📞 Поръчай сега
              </a>
              <Link href="/menu"
                className="px-8 py-4 glass gold-border text-cream font-mono text-sm tracking-widest uppercase hover:bg-white/5 transition-all rounded-sm">
                Виж менюто
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Pizza features */}
      <section className="py-16 bg-ash/30">
        <div className="max-w-7xl mx-auto px-6">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={0.08}>
            {PIZZA_FEATURES.map((f) => (
              <StaggerItem key={f.title}>
                <div className="glass gold-border rounded-xl p-5 text-center h-full">
                  <span className="text-3xl mb-3 block" aria-hidden="true">{f.icon}</span>
                  <h3 className="font-display text-lg font-bold text-cream mb-1">{f.title}</h3>
                  <p className="font-body text-cream/50 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Pizza grid */}
      <section className="max-w-7xl mx-auto px-6 py-20" aria-labelledby="pizza-menu-heading">
        <FadeIn className="text-center mb-12">
          <p className="font-mono text-xs tracking-[0.5em] text-gold uppercase mb-4">6 вида</p>
          <h2 id="pizza-menu-heading" className="font-display text-4xl font-black text-cream">
            Нашите Пици
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" aria-hidden="true" />
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" staggerDelay={0.08}>
          {pizzas.map((item, i) => (
            <StaggerItem key={item.id}>
              <MenuCard item={item} priority={i < 3} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* CTA bottom */}
      <section className="max-w-3xl mx-auto px-6 pb-32">
        <FadeIn>
          <div className="glass gold-border rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-display text-3xl font-black text-cream mb-3">
              Поръчай пица сега
            </h2>
            <p className="font-body text-cream/50 text-lg mb-6">
              {CONTACT_INFO.address}
            </p>
            <OpenNowBadge className="inline-flex mx-auto mb-8" />
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={`tel:${CONTACT_INFO.phone}`}
                className="px-8 py-4 bg-gold text-espresso font-mono text-sm font-semibold tracking-widest uppercase hover:bg-gold-light transition-all rounded-sm">
                {CONTACT_INFO.phone}
              </a>
              <Link href="/contact"
                className="px-8 py-4 glass gold-border text-cream font-mono text-sm tracking-widest uppercase hover:bg-white/5 transition-all rounded-sm">
                Намери ни
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
