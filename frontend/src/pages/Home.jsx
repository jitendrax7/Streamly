import { useState } from "react";
import { MovieCard } from "../components/MovieCard";
import { MobileCategory } from "../components/MobileCategory";
// import moviesData from "../Data/movies.js";
import { Film } from "lucide-react";

moviesData =  [
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

export const Home = () => {
    const categories = [
        "All",
        "Bollywood",
        "Hollywood",
        "Hindi Dubbed",
        "South Hindi",
        "Web Series",
    ];

    const [activeCategory, setActiveCategory] = useState("All");


    return (
        <div className="text-white  sm:pb-0">


            {/* Desktop Category Bar */}
            <div className="hidden sm:flex sticky top-16 z-10 bg-[#141414] border-b border-gray-800">
                <div className="flex gap-4 px-6 py-3">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`
                px-4 py-2 rounded-full text-sm
                ${activeCategory === cat
                                    ? "bg-[#E50914]"
                                    : "bg-[#1C1C1C] hover:bg-gray-700"
                                }
              `}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Movies Section */}
            <div className="p-0 sm:p-0">

                {/* Sticky Heading */}
                <div
                    className="
      sticky
      top-0
      z-10
      bg-[#141414]/90
      backdrop-blur
      px-4 sm:px-6
      py-3
      border-b border-gray-800
    "
                >
                    <div className="flex items-center gap-2">
                        <Film size={20} className="text-[#E50914]" />
                        <h2 className="text-lg sm:text-xl font-semibold">
                            {activeCategory === "All"
                                ? "All Movies"
                                : `${activeCategory} Movies`}
                        </h2>
                    </div>
                </div>

                {/* Movie Grid */}
                <div className="p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {moviesData.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>

            {/* Mobile Category Dropdown */}
            <MobileCategory
                categories={categories}
                active={activeCategory}
                setActive={setActiveCategory}
            />
        </div>
    );
};
