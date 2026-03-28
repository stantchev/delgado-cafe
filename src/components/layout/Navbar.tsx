'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { href: '/', label: 'Начало' },
  { href: '/menu', label: 'Меню' },
  { href: '/pizza-kozloduy', label: 'Пици' },
  { href: '/coffee-kozloduy', label: 'Кафе' },
  { href: '/contact', label: 'Контакти' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-strong py-3 shadow-2xl shadow-black/50' : 'py-6 bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between" aria-label="Основна навигация">
          <Link href="/" className="group flex flex-col leading-none" aria-label="DelGado – начало">
            <span className="font-display text-2xl font-black tracking-wider gold-gradient">DELGADO</span>
            <span className="font-mono text-[9px] tracking-[0.35em] text-cream/40 uppercase mt-0.5 group-hover:text-gold transition-colors">
              Café & Pizzeria
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-6" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}
                  className={`font-body text-lg tracking-wide transition-colors duration-300 relative group ${
                    pathname === link.href ? 'text-gold' : 'text-cream/70 hover:text-cream'
                  }`}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              </li>
            ))}
          </ul>

          <a href="tel:+359893123456"
            className="hidden md:block px-5 py-2 glass gold-border font-mono text-sm text-gold tracking-widest uppercase hover:bg-gold/10 transition-all duration-300 rounded-sm">
            📞 Поръчай
          </a>

          <button onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Затвори меню' : 'Отвори меню'}>
            <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="block w-6 h-px bg-cream origin-center" />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-6 h-px bg-cream" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="block w-6 h-px bg-cream origin-center" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col pt-24 px-8 glass-strong md:hidden"
          >
            <ul className="flex flex-col gap-6 mt-8" role="list">
              {NAV_LINKS.map((link, i) => (
                <motion.li key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}>
                  <Link href={link.href}
                    className={`font-display text-4xl font-bold tracking-wide ${pathname === link.href ? 'gold-gradient' : 'text-cream/80'}`}
                    aria-current={pathname === link.href ? 'page' : undefined}>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-auto mb-12">
              <a href="tel:+359893123456"
                className="block text-center py-4 gold-border glass font-mono text-gold tracking-widest uppercase text-lg">
                📞 Поръчай пица
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
