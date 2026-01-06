import { useState, useEffect } from "react";
import { MobileCategory } from "../components/MobileCategory";
import { MovieRow } from "../components/MovieRow";
import { Hero } from "../components/Hero";
import desktopBg from "../assets/stranger-things-desktop.png"

// Dummy Movies (for now)
const moviesData = [
  {
    id: 1,
    title: "Inception",
    rating: 8.8,
    poster: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    description:
      "A skilled thief enters people's dreams to steal secrets and is tasked with planting an idea instead."
  },
  {
    id: 2,
    title: "Interstellar",
    rating: 8.6,
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description:
      "A group of explorers travel through a wormhole in space to ensure humanity’s survival."
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham into chaos."
  },
  {
    id: 4,
    title: "Avengers: Endgame",
    rating: 8.4,
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    description:
      "The Avengers assemble one last time to undo the damage caused by Thanos."
  },
  {
    id: 5,
    title: "Joker",
    rating: 8.5,
    poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    description:
      "A mentally troubled comedian descends into madness and becomes Gotham’s infamous villain."
  },
  {
    id: 6,
    title: "Parasite",
    rating: 8.6,
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    description:
      "A poor family schemes to become employed by a wealthy household with unexpected consequences."
  },
  {
    id: 7,
    title: "John Wick",
    rating: 7.9,
    poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    description:
      "An ex-hitman comes out of retirement to track down gangsters who took everything from him."
  },
  {
    id: 8,
    title: "Spider-Man: No Way Home",
    rating: 8.3,
    poster: "https://image.tmdb.org/t/p/w500/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg",
    description:
      "Spider-Man’s identity is revealed, bringing villains from other universes into his world."
  },
  {
    id: 9,
    title: "The Matrix",
    rating: 8.7,
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    description:
      "A hacker discovers the truth about reality and his role in the war against its controllers."
  },
  {
    id: 10,
    title: "Gladiator",
    rating: 8.5,
    poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    description:
      "A betrayed Roman general rises as a gladiator to seek revenge against the corrupt emperor."
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

  // 🎯 HERO STATE (separate)
  const [heroData, setHeroData] = useState({
    title: "Stranger Things",
    description:
      '"Stranger Things" is a critically acclaimed American sci-fi horror series set in the 1980s, focusing on the supernatural events in the fictional town of Hawkins, Indiana, following the mysterious disappearance of a young boy.',
    mobileBg:
      "https://tse4.mm.bing.net/th/id/OIP.PSLFA2M3rdMgfmxIPtlZ6gHaO0?pid=ImgDet&w=175&h=350&c=7&dpr=1.3&o=7&rm=3",
    desktopBg:desktopBg,
  });

  // 🎬 ROW STATES (API READY)
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);

  // 🔄 TEMP: Set dummy data (later replaced by API)
  useEffect(() => {
    setTrending(moviesData);
    setPopular(moviesData);
    setNewReleases(moviesData);
    setActionMovies(moviesData);
  }, []);

  return (
    <div className="bg-[#0F0F0F] text-white min-h-screen">

      {/* HERO */}
      <Hero heroData={heroData} />

      {/* Desktop Categories */}
      <div className="hidden sm:flex sticky top-16 z-20 bg-[#141414]/95 backdrop-blur border-b border-gray-800">
        <div className="flex gap-4 px-6 py-3 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap
                ${activeCategory === cat
                  ? "bg-[#E50914]"
                  : "bg-[#1C1C1C] hover:bg-gray-700"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ROW SECTIONS */}
      <div className="pt-6">
        <MovieRow title="🔥 Trending Now" movies={trending} />
        <MovieRow title="⭐ Popular Movies" movies={popular} />
        <MovieRow title="🆕 New Releases" movies={newReleases} />
        <MovieRow title="🎬 Action & Thriller" movies={actionMovies} />
      </div>

      {/* Mobile Category */}
      <MobileCategory
        categories={categories}
        active={activeCategory}
        setActive={setActiveCategory}
      />
    </div>
  );
};
