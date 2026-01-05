import { useState } from "react";
import movies from "../Data/movies.js";
import { MovieCard } from "../components/MovieCard";

export const Search = () => {
  const [query, setQuery] = useState("");

  const filtered = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase()) ||
      movie.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="
          w-full mb-4
          px-4 py-2
          rounded-full
          bg-[#1C1C1C]
          text-white
          placeholder-gray-400
          focus:ring-2 focus:ring-[#E50914]
          outline-none
        "
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filtered.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
