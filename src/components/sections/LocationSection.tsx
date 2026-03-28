import { CONTACT_INFO, WORKING_HOURS } from '@/lib/data';
import { OpenNowBadge } from '@/components/ui/OpenNowBadge';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn';

export function LocationSection() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto" aria-labelledby="location-heading">
      <FadeIn className="text-center mb-16">
        <p className="font-mono text-xs tracking-[0.5em] text-gold uppercase mb-4">
          Намерете ни
        </p>
        <h2
          id="location-heading"
          className="font-display text-4xl md:text-5xl font-black text-cream"
        >
          Локация & Часове
        </h2>
        <div className="w-16 h-px bg-gold mx-auto mt-6" aria-hidden="true" />
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Map placeholder */}
        <FadeIn direction="right">
          <div className="glass gold-border rounded-xl overflow-hidden h-80 lg:h-full min-h-64 relative flex items-center justify-center">
            <div className="text-center">
              <p className="font-mono text-xs tracking-[0.3em] text-gold uppercase mb-3">
                Google Maps
              </p>
              <p className="font-display text-2xl font-bold text-cream">{CONTACT_INFO.address}</p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-6 py-3 bg-gold/20 gold-border text-gold font-mono text-xs tracking-widest uppercase rounded-sm hover:bg-gold/30 transition-colors"
              >
                Отвори в Maps →
              </a>
            </div>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)',
              }}
              aria-hidden="true"
            />
          </div>
        </FadeIn>

        {/* Info cards */}
        <FadeIn direction="left" delay={0.15}>
          <div className="space-y-4">
            {/* Open now + contact */}
            <div className="glass gold-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-xl font-bold text-cream">Контакт</h3>
                <OpenNowBadge />
              </div>
              <dl className="space-y-2 font-body text-cream/60 text-lg">
                <div className="flex gap-3">
                  <dt className="font-mono text-xs text-gold/60 uppercase tracking-widest w-20 pt-0.5">
                    Адрес
                  </dt>
                  <dd>{CONTACT_INFO.address}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="font-mono text-xs text-gold/60 uppercase tracking-widest w-20 pt-0.5">
                    Тел.
                  </dt>
                  <dd>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-cream transition-colors">
                      {CONTACT_INFO.phone}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="font-mono text-xs text-gold/60 uppercase tracking-widest w-20 pt-0.5">
                    Имейл
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="hover:text-cream transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Working hours */}
            <div className="glass gold-border rounded-xl p-6">
              <h3 className="font-display text-xl font-bold text-cream mb-4">Работно Време</h3>
              <StaggerContainer className="space-y-2" staggerDelay={0.05}>
                {WORKING_HOURS.map((h) => (
                  <StaggerItem key={h.day}>
                    <div className="flex justify-between items-center py-1.5 border-b border-gold/10 last:border-0">
                      <span className="font-body text-cream/70 text-base">{h.day}</span>
                      <span className="font-mono text-sm text-gold">
                        {h.open} – {h.close}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
