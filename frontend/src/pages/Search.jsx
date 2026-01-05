import { useState } from "react";
// import movies from "../Data/movies.js";
import { MovieCard } from "../components/MovieCard";

const moviesData =  [
  {
    id: 1,
    title: "Inception",
    rating: 8.8,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "A skilled thief who steals information by entering dreams is given the task of planting an idea into a target's subconscious."
  },
  {
    id: 2,
    title: "Interstellar",
    rating: 8.6,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://tse4.mm.bing.net/th/id/OIP.I9-iSKAlFKcfNmK0fowAEwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos."
  }
];


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
