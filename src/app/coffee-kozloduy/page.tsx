import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn';
import { OpenNowBadge } from '@/components/ui/OpenNowBadge';
import { CONTACT_INFO, WORKING_HOURS } from '@/lib/data';
import { getCoffeeKozloduySchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Кафе Козлодуй – Най-Доброто Specialty Кафе в Козлодуй',
  description:
    'Търсите кафе в Козлодуй? DelGado е premium кафе бар с над 5 години история. Specialty еспресо, флат уайт, капучино, домашни пици и артизански десерти. Отворено всеки ден от 07:30.',
  keywords: [
    'кафе Козлодуй',
    'кафе бар Козлодуй',
    'specialty кафе Козлодуй',
    'еспресо Козлодуй',
    'кафе бар България',
    'DelGado Козлодуй',
    'добро кафе Козлодуй',
    'кафене Козлодуй',
    'пица Козлодуй',
    'кафе Враца',
  ],
  alternates: { canonical: 'https://delgado-cafe.bg/coffee-kozloduy' },
  openGraph: {
    type: 'article',
    locale: 'bg_BG',
    title: 'Кафе Козлодуй | DelGado – Specialty Кафе Бар',
    description:
      'Най-доброто specialty кафе в Козлодуй. Посетете DelGado и се насладете на изключително еспресо и уютна атмосфера.',
    url: 'https://delgado-cafe.bg/coffee-kozloduy',
    images: [{ url: 'https://delgado-cafe.bg/og-image.jpg', width: 1200, height: 630 }],
  },
};

const FAQ = [
  {
    q: 'Какво е specialty кафе?',
    a: 'Specialty кафето е от най-висок клас зърна (оценени 80+ точки от SCA). DelGado работи само с проверени доставчици от Етиопия, Колумбия и Бразилия.',
  },
  {
    q: 'Имате ли безмлечни алтернативи?',
    a: 'Да! Предлагаме оат, бадемово и соево мляко за всички напитки на основа еспресо.',
  },
  {
    q: 'Предлагате ли пици?',
    a: 'Да! Имаме 6 вида пици на тънко тесто – Маргарита, Прошуто е Фунги, Куатро Формаджи, Диавола, Вегетариана и Капричоза.',
  },
  {
    q: 'Могат ли деца да посетят кафе бара?',
    a: 'Разбира се. Семейната ни атмосфера е подходяща за всички. Предлагаме горещ шоколад и плодови напитки.',
  },
  {
    q: 'Правите ли резервации?',
    a: 'За групи над 6 души приемаме резервации по телефон или имейл.',
  },
  {
    q: 'Приемате ли карти?',
    a: 'Да, приемаме всички дебитни и кредитни карти, както и в брой.',
  },
  {
    q: 'Има ли безжичен интернет?',
    a: 'Да, предлагаме безплатен Wi-Fi за всички гости.',
  },
  {
    q: 'Има ли паркинг до DelGado?',
    a: 'Да, в близост до кафе бара има безплатен паркинг на улицата.',
  },
];

const FEATURES = [
  {
    icon: '☕',
    title: 'Specialty Зърна',
    desc: 'Работим с над 5 сертифицирани доставчика на зърна от единичен произход.',
  },
  {
    icon: '🏅',
    title: 'Обучени Баристи',
    desc: 'Нашият екип е сертифициран от Specialty Coffee Association.',
  },
  {
    icon: '🍕',
    title: 'Домашни Пици',
    desc: '6 вида пици на тънко тесто, приготвяни всеки ден с пресни продукти.',
  },
  {
    icon: '🍰',
    title: 'Домашни Десерти',
    desc: 'Всички десерти се приготвят всеки ден в нашата собствена кухня.',
  },
  {
    icon: '🥤',
    title: 'Пресни Напитки',
    desc: 'Свежо изцедени сокове, домашни лимонади и смутита без добавки.',
  },
  {
    icon: '📍',
    title: 'Централна Локация',
    desc: 'В сърцето на Козлодуй, лесно достъпни с кола и пеш.',
  },
];

export default function CoffeeKozloduyPage() {
  const schema = getCoffeeKozloduySchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <div className="pt-36 pb-20 px-6 relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] blur-3xl opacity-10 pointer-events-none rounded-full"
          style={{ background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <OpenNowBadge className="mb-6 inline-flex" />
            <h1 className="font-display text-5xl md:text-6xl font-black text-cream mt-6 mb-6 leading-tight">
              Кафе Козлодуй –{' '}
              <span className="gold-gradient">DelGado</span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-cream/60 leading-relaxed max-w-2xl mx-auto mb-8">
              Ако търсите <strong className="text-cream/80">кафе в Козлодуй</strong> с истински
              характер, DelGado е вашето място. Specialty напитки, домашни пици, десерти и
              атмосфера, която те кара да се върнеш.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/menu"
                className="px-8 py-4 bg-gold text-espresso font-mono text-sm font-semibold tracking-widest uppercase hover:bg-gold-light transition-all duration-300 rounded-sm"
              >
                Виж Менюто
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 glass gold-border text-cream font-mono text-sm tracking-widest uppercase hover:bg-white/5 transition-all duration-300 rounded-sm"
              >
                Намери Ни
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Image + intro */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <FadeIn direction="right">
          <div className="relative h-96 rounded-xl overflow-hidden gold-border">
            <Image
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=900&q=80"
              alt="Specialty кафе в DelGado Козлодуй"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-espresso/60 to-transparent" />
          </div>
        </FadeIn>
        <FadeIn direction="left" delay={0.15}>
          <p className="font-mono text-xs tracking-[0.4em] text-gold uppercase mb-4">
            Защо DelGado
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-black text-cream mb-6">
            Не просто кафе –
            <br />
            <span className="gold-gradient">изживяване</span>
          </h2>
          <div className="space-y-4 font-body text-cream/60 text-xl leading-relaxed">
            <p>
              В Козлодуй има много кафенета, но малко предлагат истинско{' '}
              <strong className="text-cream/80">specialty кафе</strong>. DelGado е изключение.
              Всяко зърно е внимателно подбрано, изпечено до перфекция и приготвено с внимание.
            </p>
            <p>
              Освен кафе, предлагаме домашни пици на тънко тесто, свежи безалкохолни и
              артизански десерти — всичко под един покрив.
            </p>
          </div>
          <div className="mt-8 glass gold-border rounded-xl p-5 inline-flex items-center gap-5">
            <div>
              <p className="font-display text-4xl font-black gold-gradient">4.9</p>
              <div className="flex gap-0.5 mt-1" aria-label="4.9 от 5 звезди">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-gold text-lg" aria-hidden="true">★</span>
                ))}
              </div>
            </div>
            <div className="border-l border-gold/20 pl-5">
              <p className="font-body text-cream/70 text-lg">124 отзива</p>
              <p className="font-mono text-xs text-cream/30 tracking-widest uppercase">Google Reviews</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Features grid */}
      <section className="py-20 bg-ash/30" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <h2 id="features-heading" className="font-display text-3xl md:text-4xl font-black text-cream">
              Какво ни прави специални
            </h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {FEATURES.map((f) => (
              <StaggerItem key={f.title}>
                <div className="glass gold-border rounded-xl p-6 h-full">
                  <span className="text-4xl mb-4 block" role="img" aria-hidden="true">{f.icon}</span>
                  <h3 className="font-display text-xl font-bold text-cream mb-2">{f.title}</h3>
                  <p className="font-body text-cream/55 text-lg leading-relaxed">{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Working hours highlight */}
      <section className="max-w-4xl mx-auto px-6 py-20" aria-labelledby="hours-heading">
        <FadeIn>
          <div className="glass gold-border rounded-2xl p-8 md:p-12 text-center">
            <h2 id="hours-heading" className="font-display text-3xl font-black text-cream mb-2">
              Намерете ни в Козлодуй
            </h2>
            <p className="font-body text-cream/50 text-lg mb-8">{CONTACT_INFO.address}</p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {WORKING_HOURS.slice(0, 3).map((h) => (
                <div key={h.day} className="text-center">
                  <p className="font-mono text-xs text-gold/60 uppercase tracking-widest mb-1">
                    {h.day.slice(0, 3)}
                  </p>
                  <p className="font-body text-cream/70 text-sm">{h.open}–{h.close}</p>
                </div>
              ))}
            </div>
            <OpenNowBadge className="inline-flex mx-auto mb-8" />
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="px-8 py-3 bg-gold text-espresso font-mono text-sm font-semibold tracking-widest uppercase hover:bg-gold-light transition-all rounded-sm"
              >
                Обади се
              </a>
              <Link
                href="/contact"
                className="px-8 py-3 glass gold-border text-cream font-mono text-sm tracking-widest uppercase hover:bg-white/5 transition-all rounded-sm"
              >
                Контакти
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pb-32" aria-labelledby="faq-heading">
        <FadeIn className="text-center mb-12">
          <h2 id="faq-heading" className="font-display text-3xl font-black text-cream">
            Често задавани въпроси
          </h2>
          <p className="font-body text-cream/40 text-lg mt-3">
            Всичко, което искате да знаете за DelGado Козлодуй
          </p>
        </FadeIn>
        <StaggerContainer className="space-y-4" staggerDelay={0.07}>
          {FAQ.map((item) => (
            <StaggerItem key={item.q}>
              <div className="glass gold-border rounded-xl p-6">
                <h3 className="font-display text-xl font-semibold text-cream mb-2">{item.q}</h3>
                <p className="font-body text-cream/60 text-lg leading-relaxed">{item.a}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </>
  );
}
