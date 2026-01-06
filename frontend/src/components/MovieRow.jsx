import { ChevronRight } from "lucide-react";
import { MovieCard } from "./MovieCard";

export const MovieRow = ({ title, movies = [] }) => {
  const isFewItems = movies.length < 5; // tweak if needed

  return (
    <section className="px-4 sm:px-6 mb-8">
      {/* Row Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base sm:text-lg font-semibold">{title}</h3>

        {!isFewItems && (
          <ChevronRight className="text-gray-400 hover:text-white cursor-pointer" />
        )}
      </div>

      {/* Movies Container */}
      <div
        className={`
          flex gap-4 pb-2
          ${isFewItems
            ? "justify-start flex-wrap"
            : "overflow-x-auto scrollbar-hide"}
        `}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className={`
              ${isFewItems
                ? "w-[140px] sm:w-[180px]"
                : "min-w-[140px] sm:min-w-[180px]"}
            `}
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </section>
  );
};
