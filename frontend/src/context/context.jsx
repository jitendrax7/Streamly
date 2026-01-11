import { createContext, useEffect, useState } from "react";
import desktopBg from "../assets/stranger-things-desktop.png";

export const HomeContext = createContext(null);

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const HomeContextProvider = ({ children }) => {
  const [heroData, setHeroData] = useState(null);
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          desktopBg: desktopBg, // local asset override
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

  const value = {
    heroData,
    trending,
    popular,
    newReleases,
    actionMovies,
    loading,
    error,
  };

  return (
    <HomeContext.Provider value={value}>
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContextProvider;
