import Image from 'next/image';
import type { MenuItem } from '@/types';
import { formatPrice } from '@/lib/utils';

export function MenuCard({ item, priority = false }: { item: MenuItem; priority?: boolean }) {
  return (
    <article className="group glass rounded-xl overflow-hidden gold-border hover:border-gold/40 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={item.image}
          alt={`${item.name} – ${item.nameEn ?? ''}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/20 to-transparent" />
        {item.featured && (
          <span className="absolute top-3 right-3 font-mono text-[9px] tracking-[0.2em] uppercase bg-gold/90 text-espresso px-2 py-1 rounded-sm font-semibold">
            Избор
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display text-xl font-semibold text-cream leading-tight">
            {item.name}
          </h3>
          <span className="font-mono text-gold font-medium shrink-0 text-base">
            {formatPrice(item.price)}
          </span>
        </div>
        <p className="font-body text-cream/55 text-base leading-relaxed">{item.description}</p>
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[9px] tracking-widest uppercase text-gold/50 border border-gold/15 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
