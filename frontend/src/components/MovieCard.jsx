export const MovieCard = ({ movie }) => {
  return (
    <div
      className="
        relative
        bg-[#1C1C1C]
        rounded-xl
        overflow-hidden
        group
        cursor-pointer
        transition-transform
        hover:scale-[1.03]
      "
    >
      {/* Poster */}
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full aspect-[2/3] object-cover"
      />

      {/* Always visible info (mobile friendly) */}
      <div className="p-3">
        <h3 className="text-sm font-semibold line-clamp-1">
          {movie.title}
        </h3>
        <p className="text-xs text-[#FACC15]">
          ⭐ {movie.rating}
        </p>
      </div>

      {/* Hover overlay (desktop) */}
      <div
        className="
          absolute inset-0
          bg-black/70
          opacity-0
          group-hover:opacity-100
          transition-opacity
          hidden sm:flex
          flex-col
          justify-end
          p-4
        "
      >
        <p className="text-sm text-gray-300 line-clamp-4">
          {movie.description}
        </p>
      </div>
    </div>
  );
};
