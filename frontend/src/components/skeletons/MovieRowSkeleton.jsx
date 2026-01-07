export const MovieRowSkeleton = ({ title }) => {
  return (
    <div className="px-6 mb-10">
      {/* Row title */}
      <div className="h-5 w-40 bg-[#222] rounded mb-4 animate-pulse" />

      {/* Movie cards */}
      <div className="flex gap-4 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="min-w-[150px] h-[220px] bg-[#222] rounded-lg animate-pulse"
          />
        ))}
      </div>
    </div>
  );
};
