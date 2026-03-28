export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center" aria-label="Зарежда се…" role="status">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-2 border-gold/20 border-t-gold animate-spin" />
        <p className="font-mono text-xs tracking-[0.5em] text-gold/50 uppercase">Зарежда…</p>
      </div>
    </div>
  );
}
