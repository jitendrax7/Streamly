import { useState, useEffect } from "react";
import { MobileCategory } from "../components/MobileCategory";
import { MovieRow } from "../components/MovieRow";
import { Hero } from "../components/Hero";
import { HeroSkeleton } from "../components/skeletons/HeroSkeleton";
import { MovieRowSkeleton } from "../components/skeletons/MovieRowSkeleton";

import desktopBg from "../assets/stranger-things-desktop.png"
export const Home = () => {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const categories = [
    "All",
    "Bollywood",
    "Hollywood",
    "Hindi Dubbed",
    "South Hindi",
    "Web Series",
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  // 🔥 STATES
  const [heroData, setHeroData] = useState(null);
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/movies`);
        const data = await res.json();

        if (!res.ok || !data.success) {
          throw new Error("Failed to load home data");
        }

        // ✅ HERO
        setHeroData({
          title: data.hero.title,
          description: data.hero.description,
          mobileBg: data.hero.mobileBg,
          // desktopBg: data.hero.desktopBg,
          desktopBg: desktopBg,
        });

        // ✅ ROWS
        setTrending(data.trending || []);
        setPopular(data.popular || []);
        setNewReleases(data.new_release || []);
        setActionMovies(data.action_thriller || []);
      } catch (err) {
        console.error(err);
        setError(err.message || "Server error");
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, [BASE_URL]);

  /* ===================== LOADING ===================== */
  if (loading) {
    return (
      <div className="bg-[#0F0F0F] min-h-screen">
        <HeroSkeleton />

        <div className="pt-6">
          <MovieRowSkeleton title="Trending" />
          <MovieRowSkeleton title="Popular" />
          <MovieRowSkeleton title="New Releases" />
          <MovieRowSkeleton title="Action & Thriller" />
        </div>
      </div>
    );
  }


  /* ===================== ERROR ===================== */
  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="bg-[#121212] p-8 rounded-xl border border-gray-700 text-center">
          <h2 className="text-2xl font-semibold mb-3">😕 Oops</h2>
          <p className="text-gray-400 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-[#E50914] px-6 py-2 rounded-lg"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0F0F0F] text-white min-h-screen">
      {/* 🔥 HERO */}
      {heroData && <Hero heroData={heroData} />}

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
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 🎬 MOVIE ROWS */}
      <div className="pt-6">
        <MovieRow title="🔥 Trending Now" movies={trending} />
        <MovieRow title="⭐ Popular Movies" movies={popular} />
        <MovieRow title="🆕 New Releases" movies={newReleases} />
        <MovieRow title="🎬 Action & Thriller" movies={actionMovies} />
      </div>

      {/* 📱 Mobile Category */}
      <MobileCategory
        categories={categories}
        active={activeCategory}
        setActive={setActiveCategory}
      />
    </div>
  );
};

