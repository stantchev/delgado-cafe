export function CardSkeleton() {
  return (
    <div className="glass rounded-xl overflow-hidden gold-border animate-pulse" aria-hidden="true">
      <div className="h-52 shimmer-bg bg-white/5" />
      <div className="p-5 space-y-3">
        <div className="flex justify-between">
          <div className="h-5 w-32 shimmer-bg rounded bg-white/5" />
          <div className="h-5 w-16 shimmer-bg rounded bg-white/5" />
        </div>
        <div className="h-4 w-full shimmer-bg rounded bg-white/5" />
        <div className="h-4 w-3/4 shimmer-bg rounded bg-white/5" />
      </div>
    </div>
  );
}

export function MenuGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      aria-label="Зарежда се…"
      role="status"
    >
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}
