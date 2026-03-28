import Link from 'next/link';
import { CONTACT_INFO, WORKING_HOURS } from '@/lib/data';

export function Footer() {
  return (
    <footer className="relative border-t border-gold/10 bg-espresso/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <span className="font-display text-3xl font-black gold-gradient block mb-3">DELGADO</span>
          <p className="font-body text-cream/50 text-lg leading-relaxed">
            Кафе, което остава в съзнанието. Козлодуй, България.
          </p>
          <p className="font-mono text-xs text-gold/60 mt-4 tracking-widest uppercase">
            {CONTACT_INFO.instagram}
          </p>
        </div>

        {/* Links */}
        <nav aria-label="Footer навигация">
          <h3 className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-6">
            Навигация
          </h3>
          <ul className="space-y-3" role="list">
            {[
              { href: '/', label: 'Начало' },
              { href: '/menu', label: 'Меню' },
              { href: '/coffee-kozloduy', label: 'Кафе Козлодуй' },
              { href: '/contact', label: 'Контакти' },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-body text-cream/60 hover:text-cream text-lg transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hours */}
        <div>
          <h3 className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-6">
            Работно Време
          </h3>
          <ul className="space-y-2" role="list">
            {WORKING_HOURS.map((h) => (
              <li key={h.day} className="flex justify-between font-body text-cream/60 text-base">
                <span>{h.day}</span>
                <span className="font-mono text-sm text-cream/40">
                  {h.open} – {h.close}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-body text-cream/40 text-sm">
            {CONTACT_INFO.address}
            <br />
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="hover:text-gold transition-colors mt-1 block"
            >
              {CONTACT_INFO.phone}
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-gold/10 py-6 px-6 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="font-mono text-xs text-cream/25">
          © {new Date().getFullYear()} DelGado Café. Всички права запазени.
        </p>
        <p className="font-mono text-xs text-cream/20">Козлодуй, България</p>
      </div>
    </footer>
  );
}
