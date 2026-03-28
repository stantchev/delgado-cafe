'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { MenuItem, CategoryKey } from '@/types';
import { MenuCard } from '@/components/ui/MenuCard';
import { CATEGORY_LABELS } from '@/lib/utils';

const CATEGORIES: { key: 'all' | CategoryKey; label: string }[] = [
  { key: 'all', label: 'Всички' },
  { key: 'coffee', label: 'Кафе' },
  { key: 'desserts', label: 'Десерти' },
  { key: 'breakfast', label: 'Закуска' },
  { key: 'pizza', label: 'Пици' },
  { key: 'drinks', label: 'Напитки' },
];

export function MenuFilterClient({ items }: { items: MenuItem[] }) {
  const [active, setActive] = useState<'all' | CategoryKey>('all');

  const filtered = active === 'all' ? items : items.filter((i) => i.category === active);

  return (
    <div>
      {/* Filter tabs */}
      <div
        className="flex flex-wrap justify-center gap-3 mb-12"
        role="group"
        aria-label="Филтър по категория"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className={`relative px-6 py-2.5 font-mono text-sm tracking-widest uppercase rounded-sm transition-all duration-300 ${
              active === cat.key
                ? 'text-espresso'
                : 'glass gold-border text-gold hover:bg-gold/10'
            }`}
            aria-pressed={active === cat.key}
          >
            {active === cat.key && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 bg-gold rounded-sm"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Category heading */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {active !== 'all' && (
            <p className="font-mono text-xs tracking-[0.4em] text-gold/60 uppercase text-center mb-8">
              {CATEGORY_LABELS[active]} — {filtered.length} позиции
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <MenuCard item={item} priority={i < 3} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
