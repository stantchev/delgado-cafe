'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENU_ITEMS } from '@/lib/data';
import { MenuCard } from '@/components/ui/MenuCard';
import { CATEGORY_LABELS } from '@/lib/utils';
import type { CategoryKey } from '@/types';

const CATEGORIES: { key: 'all' | CategoryKey; label: string }[] = [
  { key: 'all', label: 'Всички' },
  { key: 'coffee', label: 'Кафе' },
  { key: 'desserts', label: 'Десерти' },
  { key: 'breakfast', label: 'Закуска' },
];

export function MenuCategoryFilter() {
  const [active, setActive] = useState<'all' | CategoryKey>('all');

  const filtered =
    active === 'all' ? MENU_ITEMS : MENU_ITEMS.filter((item) => item.category === active);

  return (
    <div>
      {/* Filter tabs */}
      <div
        className="flex flex-wrap gap-3 mb-12 justify-center"
        role="tablist"
        aria-label="Категории от менюто"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            role="tab"
            aria-selected={active === cat.key}
            onClick={() => setActive(cat.key)}
            className={`relative px-6 py-2.5 font-mono text-sm tracking-widest uppercase rounded-sm transition-all duration-300 ${
              active === cat.key
                ? 'text-espresso'
                : 'text-cream/50 glass gold-border hover:text-cream hover:border-gold/40'
            }`}
          >
            {active === cat.key && (
              <motion.span
                layoutId="active-tab"
                className="absolute inset-0 bg-gold rounded-sm"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        role="tabpanel"
        aria-label={`Категория: ${CATEGORY_LABELS[active] ?? 'Всички'}`}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <MenuCard item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-cream/30 font-body text-xl">
          Няма намерени позиции.
        </div>
      )}
    </div>
  );
}
