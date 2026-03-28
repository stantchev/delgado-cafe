import Link from 'next/link';
import { MENU_ITEMS } from '@/lib/data';
import { MenuCard } from '@/components/ui/MenuCard';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/FadeIn';

export function FeaturedMenuSection() {
  const featured = MENU_ITEMS.filter((item) => item.featured).slice(0, 6);

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto" aria-labelledby="featured-menu-heading">
      <FadeIn className="text-center mb-16">
        <p className="font-mono text-xs tracking-[0.5em] text-gold uppercase mb-4">
          Нашите фаворити
        </p>
        <h2
          id="featured-menu-heading"
          className="font-display text-4xl md:text-5xl font-black text-cream"
        >
          Избрани от менюто
        </h2>
        <div className="w-16 h-px bg-gold mx-auto mt-6" aria-hidden="true" />
      </FadeIn>

      <StaggerContainer
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        staggerDelay={0.08}
      >
        {featured.map((item, i) => (
          <StaggerItem key={item.id}>
            <MenuCard item={item} priority={i < 3} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn delay={0.3} className="text-center mt-14">
        <Link
          href="/menu"
          className="inline-block px-10 py-4 glass gold-border font-mono text-sm text-gold tracking-widest uppercase hover:bg-gold/10 transition-all duration-300 rounded-sm"
        >
          Цялото Меню →
        </Link>
      </FadeIn>
    </section>
  );
}
