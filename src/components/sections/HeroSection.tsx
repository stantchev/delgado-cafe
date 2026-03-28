'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { OpenNowBadge } from '@/components/ui/OpenNowBadge';

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero секция"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&q=85"
          alt="DelGado кафе интериор"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/60 to-espresso" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/60 via-transparent to-espresso/40" />
      </div>

      {/* Decorative orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <OpenNowBadge className="mb-8 inline-flex" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-xs tracking-[0.5em] text-gold uppercase mb-6">
            Козлодуй, България
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-black leading-[0.9] tracking-tight text-cream text-balance mb-8">
            DelGado –{' '}
            <span className="gold-gradient">кафе, което</span>
            <br />
            остава в съзнанието
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-xl md:text-2xl text-cream/60 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Specialty кафе. Артизански десерти. Уютна атмосфера. Всяка глътка е изживяване.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/menu"
            className="px-10 py-4 bg-gold text-espresso font-mono text-sm font-semibold tracking-widest uppercase hover:bg-gold-light transition-all duration-300 rounded-sm hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-0.5"
          >
            Разгледай Менюто
          </Link>
          <Link
            href="/contact"
            className="px-10 py-4 glass gold-border text-cream font-mono text-sm tracking-widest uppercase hover:bg-white/5 transition-all duration-300 rounded-sm"
          >
            Намери Ни
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-mono text-[9px] tracking-[0.4em] text-cream/30 uppercase">Скрол</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-gold/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
