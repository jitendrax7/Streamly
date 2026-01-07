import { Play, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <div 
      onClick={() => navigate(`/home/${movie.id}`)}
      className="
        group relative overflow-hidden rounded-xl
        bg-[#1C1C1C]
        cursor-pointer
        transition-transform duration-300
        hover:-translate-y-1
      "
    >
      {/* Poster */}
      <img
        src={movie.poster}
        alt={movie.title}
        className="
          w-full
          h-[210px] sm:h-[260px]
          object-cover
          transition-transform duration-500
          group-hover:scale-110
        "
      />

      {/* ⭐ Rating (Always visible) */}
      <div
        className="
          absolute top-2 left-2
          flex items-center gap-1
          px-2 py-1
          rounded-md
          bg-black/70 backdrop-blur
          text-xs font-medium
        "
      >
        <Star size={12} className="fill-yellow-400 text-yellow-400" />
        {movie.rating}
      </div>

      {/* 🎬 Title (Always visible) */}
      <div
        className="
          absolute inset-x-0 bottom-0
          p-2
          bg-gradient-to-t from-black via-black/70 to-transparent
          sm:group-hover:opacity-0
          transition-opacity duration-300
        "
      >
        <h4 className="text-sm font-semibold line-clamp-1">
          {movie.title}
        </h4>
      </div>

      {/* Hover Overlay (Desktop only) */}
      <div
        className="
          absolute inset-0
          hidden sm:flex
          flex-col justify-end
          p-4
          bg-gradient-to-t from-black via-black/75 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "
      >
        <h4 className="text-sm font-semibold mb-1 line-clamp-1">
          {movie.title}
        </h4>

        <p className="text-xs text-gray-300/90 line-clamp-2 mb-3">
          {movie.description}
        </p>

        <button
          className="
            inline-flex items-center justify-center gap-2
            w-full
            py-2
            rounded-full
            bg-white/90
            cursor-pointer
            text-black text-sm font-semibold
            hover:bg-white
            transition
          "
        >
          <Play size={15} className="fill-black " />
          Watch Now
        </button>
      </div>

      {/* Mobile Info */}
      <div className="sm:hidden p-2 space-y-1">
        {/* <h4 className="text-sm font-medium line-clamp-1">
          {movie.title}
        </h4> */}
        <p className="text-xs text-gray-400">
          ⭐ {movie.rating}
        </p>
      </div>
    </div>
  );
};
