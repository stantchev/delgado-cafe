import type { Metadata } from 'next';
import { ContactForm } from '@/components/ui/ContactForm';
import { OpenNowBadge } from '@/components/ui/OpenNowBadge';
import { CONTACT_INFO, WORKING_HOURS } from '@/lib/data';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn';
import { getContactPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Контакти – DelGado Кафе Козлодуй',
  description:
    'Свържете се с DelGado кафе бар в Козлодуй. Адрес: ул. Христо Ботев 14. Телефон, имейл и работно време. Намерете ни в центъра на Козлодуй, България.',
  keywords: ['контакти кафе Козлодуй', 'адрес DelGado', 'телефон кафе Козлодуй'],
  alternates: { canonical: 'https://delgado-cafe.bg/contact' },
  openGraph: {
    title: 'Контакти | DelGado Козлодуй',
    description: 'Адрес, телефон и работно време на DelGado кафе бар, Козлодуй.',
    url: 'https://delgado-cafe.bg/contact',
  },
};

const INFO_ITEMS = [
  {
    icon: '📍',
    label: 'Адрес',
    value: CONTACT_INFO.address,
    link: `https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address)}`,
    linkLabel: 'Отвори в Google Maps',
  },
  {
    icon: '📞',
    label: 'Телефон',
    value: CONTACT_INFO.phone,
    link: `tel:${CONTACT_INFO.phone}`,
    linkLabel: 'Обади се',
  },
  {
    icon: '✉️',
    label: 'Имейл',
    value: CONTACT_INFO.email,
    link: `mailto:${CONTACT_INFO.email}`,
    linkLabel: 'Изпрати имейл',
  },
  {
    icon: '📷',
    label: 'Instagram',
    value: CONTACT_INFO.instagram,
    link: 'https://instagram.com/delgado.cafe',
    linkLabel: 'Следвай ни',
  },
];

export default function ContactPage() {
  const schema = getContactPageSchema();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Hero */}
      <section className="relative pt-40 pb-16 px-6 text-center overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-10 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, #C9A84C 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <FadeIn>
          <p className="font-mono text-xs tracking-[0.5em] text-gold uppercase mb-4">Пишете ни</p>
          <h1 className="font-display text-5xl md:text-7xl font-black text-cream mb-6">
            <span className="gold-gradient">Контакти</span>
          </h1>
          <p className="font-body text-xl text-cream/50 max-w-xl mx-auto leading-relaxed">
            Имате въпрос, искате резервация или просто искате да кажете здравей – ние сме тук.
          </p>
        </FadeIn>
      </section>

      {/* Main grid */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <FadeIn direction="right">
            <div className="glass gold-border rounded-xl p-8">
              <h2 className="font-display text-2xl font-bold text-cream mb-2">Изпратете съобщение</h2>
              <p className="font-body text-cream/50 text-lg mb-8">Отговаряме в рамките на 24 часа.</p>
              <ContactForm />
            </div>
          </FadeIn>

          {/* Info */}
          <FadeIn direction="left" delay={0.15}>
            <div className="space-y-6">
              {/* Open now */}
              <div className="glass gold-border rounded-xl p-6 flex items-center justify-between">
                <div>
                  <h2 className="font-display text-xl font-bold text-cream">Статус</h2>
                  <p className="font-body text-cream/50 mt-1">Работно ли е кафето в момента?</p>
                </div>
                <OpenNowBadge />
              </div>

              {/* Contact details */}
              <StaggerContainer className="space-y-4" staggerDelay={0.08}>
                {INFO_ITEMS.map((item) => (
                  <StaggerItem key={item.label}>
                    <div className="glass gold-border rounded-xl p-5 flex items-start gap-4 hover:border-gold/40 transition-all duration-300">
                      <span className="text-2xl shrink-0 mt-0.5" role="img" aria-label={item.label}>{item.icon}</span>
                      <div className="min-w-0">
                        <p className="font-mono text-xs tracking-widest uppercase text-gold/60 mb-1">{item.label}</p>
                        <p className="font-body text-cream text-lg break-all">{item.value}</p>
                        <a
                          href={item.link}
                          target={item.link.startsWith('http') ? '_blank' : undefined}
                          rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="font-mono text-xs text-gold/50 hover:text-gold transition-colors mt-1 inline-block"
                        >
                          {item.linkLabel} →
                        </a>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Working hours compact */}
              <div className="glass gold-border rounded-xl p-6">
                <h2 className="font-display text-xl font-bold text-cream mb-4">Работно Време</h2>
                <ul className="space-y-2" role="list">
                  {WORKING_HOURS.map((h) => (
                    <li key={h.day} className="flex justify-between items-center py-1.5 border-b border-gold/10 last:border-0">
                      <span className="font-body text-cream/65 text-base">{h.day}</span>
                      <span className="font-mono text-sm text-gold">{h.open} – {h.close}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
