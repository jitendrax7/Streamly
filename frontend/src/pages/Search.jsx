import { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";
import { Search as SearchIcon } from "lucide-react";

const movies = [
  {
    id: 11,
    title: "Dune",
    rating: 8.1,
    poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    description:
      "A noble family becomes embroiled in a war for control over the galaxy’s most valuable asset."
  },
  {
    id: 12,
    title: "Mad Max: Fury Road",
    rating: 8.1,
    poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
    description:
      "In a post-apocalyptic wasteland, Max teams up with a rebel warrior to escape a tyrant."
  },
  {
    id: 13,
    title: "The Batman",
    rating: 7.9,
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    description:
      "Batman uncovers corruption in Gotham City while pursuing a serial killer known as the Riddler."
  }
];



export const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");

  // 🔹 Debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(inputValue);
    }, 400);

    return () => clearTimeout(timer);
  }, [inputValue]);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">

      {/* 🔒 Sticky Search + Heading */}
      <div className="sticky md:top-16 top-0 z-30 bg-[#0F0F0F]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">

          {/* Search Input */}
          <div className="relative max-w-xl">
            <input
              type="text"
              placeholder="Search movies..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="
                w-full
                px-5 py-2.5 pr-12
                rounded-full
                bg-[#1C1C1C]
                text-sm sm:text-base
                placeholder-gray-400
                focus:ring-2 focus:ring-[#E50914]
                outline-none
              "
            />

            <SearchIcon
              size={18}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>

          {/* Heading */}
          <h2 className="text-lg sm:text-xl font-semibold tracking-wide">
            {query.trim() === "" ? (
              <span className="text-gray-300">Explore</span>
            ) : (
              <>
                Results for{" "}
                <span className="text-[#E50914]">"{query}"</span>
              </>
            )}
          </h2>
        </div>
      </div>

      {/* Movies Grid */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};
