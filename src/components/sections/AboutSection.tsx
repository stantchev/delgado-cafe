import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';

const STATS = [
  { value: '100%', label: 'Specialty кафе' },
  { value: '15+', label: 'Позиции в менюто' },
  { value: '7', label: 'Дни в седмицата' },
  { value: '∞', label: 'Удоволствие' },
];

export function AboutSection() {
  return (
    <section
      className="py-32 bg-ash/30 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: '#C9A84C' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <FadeIn direction="right" className="relative">
          <div className="relative h-[500px] rounded-xl overflow-hidden gold-border">
            <Image
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=900&q=80"
              alt="Бариста приготвя specialty кафе в DelGado"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-espresso/60 to-transparent" />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 glass gold-border px-6 py-4 rounded-xl">
            <p className="font-display text-3xl font-black gold-gradient">2019</p>
            <p className="font-mono text-xs text-cream/50 tracking-widest uppercase mt-1">
              Основано
            </p>
          </div>
        </FadeIn>

        {/* Content */}
        <FadeIn direction="left" delay={0.2}>
          <p className="font-mono text-xs tracking-[0.5em] text-gold uppercase mb-6">
            Нашата история
          </p>
          <h2
            id="about-heading"
            className="font-display text-4xl md:text-5xl font-black text-cream leading-tight mb-6"
          >
            Кафе с душа,
            <br />
            <span className="gold-gradient">в сърцето</span>
            <br />
            на Козлодуй
          </h2>
          <div className="space-y-4 font-body text-cream/60 text-xl leading-relaxed">
            <p>
              DelGado се ражда от страст към перфектното кафе. Вярваме, че всяка чаша разказва
              история — за произхода на зърното, за труда на бариста и за момента, в който
              докоснеш устни до ръба.
            </p>
            <p>
              Всяко кафе е избрано с внимание, изпечено прецизно и приготвено с уважение към
              традицията и иновацията.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mt-10">
            {STATS.map((stat) => (
              <div key={stat.label} className="glass rounded-lg p-4 gold-border">
                <p className="font-display text-3xl font-black gold-gradient">{stat.value}</p>
                <p className="font-mono text-xs text-cream/40 tracking-widest uppercase mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
