export const MoviePageSkeleton = () => {
  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen">
      {/* HERO SKELETON */}
      <div className="relative h-[50vh] md:h-[70vh] bg-[#111] overflow-hidden">
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-[#111] via-[#1c1c1c] to-[#111]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 -mt-24 md:-mt-32 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Poster */}
          <div className="w-44 md:w-64 h-[330px] bg-[#222] rounded-xl animate-pulse mx-auto md:mx-0" />

          {/* Info */}
          <div className="flex-1 space-y-4">
            <div className="h-8 w-3/4 bg-[#222] rounded animate-pulse" />
            <div className="flex gap-3">
              <div className="h-4 w-24 bg-[#222] rounded animate-pulse" />
              <div className="h-4 w-24 bg-[#222] rounded animate-pulse" />
              <div className="h-4 w-24 bg-[#222] rounded animate-pulse" />
            </div>

            <div className="space-y-2 mt-4">
              <div className="h-4 w-full bg-[#222] rounded animate-pulse" />
              <div className="h-4 w-full bg-[#222] rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-[#222] rounded animate-pulse" />
            </div>

            <div className="flex gap-4 mt-6">
              <div className="h-11 w-36 bg-[#222] rounded animate-pulse" />
              <div className="h-11 w-36 bg-[#222] rounded animate-pulse" />
            </div>

            <div className="space-y-2 mt-4">
              <div className="h-4 w-64 bg-[#222] rounded animate-pulse" />
              <div className="h-4 w-48 bg-[#222] rounded animate-pulse" />
            </div>
          </div>
        </div>

        {/* TRAILER */}
        <div className="mt-14">
          <div className="h-6 w-48 bg-[#222] rounded animate-pulse mb-4" />
          <div className="aspect-video bg-[#222] rounded-xl animate-pulse" />
        </div>

        {/* SCREENSHOTS */}
        <div className="mt-14">
          <div className="h-6 w-40 bg-[#222] rounded animate-pulse mb-4" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-40 bg-[#222] rounded-lg animate-pulse"
              />
            ))}
          </div>
        </div>

        {/* DOWNLOAD */}
        <div className="mt-16 mb-20">
          <div className="h-6 w-48 bg-[#222] rounded animate-pulse mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-24 bg-[#222] rounded-xl animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
