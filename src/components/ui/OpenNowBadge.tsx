'use client';

import { useMemo } from 'react';
import { WORKING_HOURS } from '@/lib/data';
import { isOpenNow } from '@/lib/utils';

export function OpenNowBadge({ className = '' }: { className?: string }) {
  const status = useMemo(() => isOpenNow(WORKING_HOURS), []);

  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase px-3 py-1.5 rounded-full ${
        status.open
          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
          : 'bg-red-500/10 text-red-400 border border-red-500/20'
      } ${className}`}
      role="status"
      aria-label={status.open ? 'Кафето е отворено' : 'Кафето е затворено'}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          status.open ? 'bg-emerald-400 animate-pulse' : 'bg-red-400'
        }`}
        aria-hidden="true"
      />
      {status.message}
    </span>
  );
}
