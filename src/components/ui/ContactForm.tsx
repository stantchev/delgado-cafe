'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [fields, setFields] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 1400));
    setStatus('success');
  };

  const inputClass =
    'w-full glass gold-border rounded-sm px-5 py-4 font-body text-cream text-lg placeholder:text-cream/25 focus:outline-none focus:border-gold/60 transition-colors duration-300 bg-transparent';

  return (
    <AnimatePresence mode="wait">
      {status === 'success' ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass gold-border rounded-xl p-12 text-center"
        >
          <div className="text-5xl mb-6" role="img" aria-label="успех">✓</div>
          <h3 className="font-display text-3xl font-bold text-cream mb-3">Съобщението е изпратено!</h3>
          <p className="font-body text-cream/50 text-xl">Ще се свържем с вас в рамките на 24 часа.</p>
          <button
            onClick={() => { setStatus('idle'); setFields({ name: '', email: '', phone: '', message: '' }); }}
            className="mt-8 px-8 py-3 glass gold-border font-mono text-sm text-gold tracking-widest uppercase hover:bg-gold/10 transition-colors rounded-sm"
          >
            Изпрати ново
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit}
          className="space-y-5"
          noValidate
          aria-label="Форма за контакт"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block font-mono text-xs tracking-widest uppercase text-gold/60 mb-2">Вашето Име *</label>
              <input id="name" name="name" type="text" required value={fields.name} onChange={handleChange} placeholder="Иван Иванов" className={inputClass} autoComplete="name" />
            </div>
            <div>
              <label htmlFor="email" className="block font-mono text-xs tracking-widest uppercase text-gold/60 mb-2">Имейл *</label>
              <input id="email" name="email" type="email" required value={fields.email} onChange={handleChange} placeholder="ivan@example.com" className={inputClass} autoComplete="email" />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block font-mono text-xs tracking-widest uppercase text-gold/60 mb-2">Телефон</label>
            <input id="phone" name="phone" type="tel" value={fields.phone} onChange={handleChange} placeholder="+359 8XX XXX XXX" className={inputClass} autoComplete="tel" />
          </div>
          <div>
            <label htmlFor="message" className="block font-mono text-xs tracking-widest uppercase text-gold/60 mb-2">Съобщение *</label>
            <textarea id="message" name="message" required rows={5} value={fields.message} onChange={handleChange} placeholder="Вашето съобщение или въпрос..." className={inputClass + ' resize-none'} />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-4 bg-gold text-espresso font-mono text-sm font-semibold tracking-widest uppercase hover:bg-gold-light disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 rounded-sm hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/20"
            aria-busy={status === 'sending'}
          >
            {status === 'sending' ? (
              <span className="flex items-center justify-center gap-3">
                <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }} className="block w-4 h-4 border-2 border-espresso/30 border-t-espresso rounded-full" />
                Изпраща се…
              </span>
            ) : 'Изпрати Съобщение'}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
