import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 – Страницата не е намерена',
  description: 'Тази страница не съществува. Върнете се към DelGado Café.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs tracking-[0.5em] text-gold uppercase mb-4">Грешка 404</p>
      <h1 className="font-display text-7xl md:text-9xl font-black gold-gradient mb-6">404</h1>
      <p className="font-body text-2xl text-cream/50 max-w-md mb-10 leading-relaxed">
        Изгубихте се? Тази страница не съществува, но нашето кафе е точно там, където го оставихте.
      </p>
      <Link
        href="/"
        className="px-10 py-4 bg-gold text-espresso font-mono text-sm font-semibold tracking-widest uppercase hover:bg-gold-light transition-all duration-300 rounded-sm"
      >
        Обратно към началото
      </Link>
    </div>
  );
}
