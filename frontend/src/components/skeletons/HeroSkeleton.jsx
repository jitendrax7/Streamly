export const HeroSkeleton = () => {
  return (
    <div className="relative h-[70vh] bg-[#111] overflow-hidden">
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-[#111] via-[#1c1c1c] to-[#111]" />

      <div className="absolute bottom-24 left-6 max-w-xl space-y-4">
        <div className="h-8 w-64 bg-[#222] rounded" />
        <div className="h-4 w-full bg-[#222] rounded" />
        <div className="h-4 w-3/4 bg-[#222] rounded" />

        <div className="flex gap-4 mt-6">
          <div className="h-10 w-32 bg-[#222] rounded" />
          <div className="h-10 w-32 bg-[#222] rounded" />
        </div>
      </div>
    </div>
  );
};
