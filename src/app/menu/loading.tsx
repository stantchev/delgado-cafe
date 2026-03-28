import { MenuGridSkeleton } from '@/components/ui/Skeleton';

export default function MenuLoading() {
  return (
    <div>
      <div className="pt-40 pb-20 px-6 text-center">
        <div className="h-4 w-32 shimmer-bg bg-white/5 rounded mx-auto mb-6 animate-pulse" />
        <div className="h-16 w-64 shimmer-bg bg-white/5 rounded mx-auto animate-pulse" />
      </div>
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="flex gap-3 mb-12 justify-center">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-10 w-24 shimmer-bg bg-white/5 rounded animate-pulse" />
          ))}
        </div>
        <MenuGridSkeleton count={9} />
      </div>
    </div>
  );
}
