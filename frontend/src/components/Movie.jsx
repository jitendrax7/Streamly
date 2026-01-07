import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { ServerError } from "../components/ServerError";
import { MoviePageSkeleton } from "../components/skeletons/MoviePageSkeleton";

export const Movie = () => {
    const { id } = useParams();

    const [movieInfo, setMovieInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const downloadRef = useRef(null);
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const fetchMovie = async () => {
        setLoading(true);
        setError("");

        try {
            const res = await fetch(`${BASE_URL}/movies/${id}`);
            const data = await res.json();

            if (!res.ok || !data.success) {
                throw new Error(data.message || "Movie not found");
            }

            const m = data.movie;

            // 🔹 Normalize backend response
            const formattedMovie = {
                name: m.title,
                poster: [m.poster, m.bgPoster],
                description: m.description,
                screensorts: m.screenshots || [],
                iMDBRating: `${m.rating}/10`,
                Genre: m.genres.join(" | "),
                Language: m.languages.map(l => l.toUpperCase()).join(" & "),
                youtube_trailer_iframe: m.trailer,
                Stars: m.cast.join(", "),
                Director: m.director,
                DownloadLink: Object.fromEntries(
                    m.downloads.map(d => [d.quality, d.url])
                ),
            };

            setMovieInfo(formattedMovie);
        } catch (err) {
            setError(err.message || "Server error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMovie();
    }, [id]);

    const handleWatchNow = () => {
        downloadRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    /* ===================== LOADING ===================== */
    if (loading) {
        return <MoviePageSkeleton />;
    }


    /* ===================== ERROR ===================== */
    if (error) {
        return (
            <ServerError
                message={
                    error === "Movie not found"
                        ? "This movie does not exist or was removed."
                        : error
                }
                onRetry={fetchMovie}
            />
        );
    }

    if (!movieInfo) return null;

    /* ===================== MAIN UI ===================== */
    return (
        <div className="bg-[#0b0b0b] text-white min-h-screen">
            {/* 🔹 HERO */}
            <div className="relative">
                <img
                    src={movieInfo.poster[1]}
                    alt={movieInfo.name}
                    className="w-full h-[50vh] md:h-[70vh] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>

            <div className="max-w-6xl mx-auto px-4 md:px-6 -mt-24 md:-mt-32 relative z-10">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Poster */}
                    <img
                        src={movieInfo.poster[0]}
                        alt={movieInfo.name}
                        className="w-44 md:w-64 mx-auto md:mx-0 rounded-xl shadow-2xl"
                    />

                    {/* Info */}
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-2xl md:text-4xl font-bold mb-3">
                            {movieInfo.name}
                        </h1>

                        <div className="flex flex-wrap gap-3 text-sm text-gray-300 mb-4">
                            <span>⭐ IMDb {movieInfo.iMDBRating}</span>
                            <span>🎬 {movieInfo.Genre}</span>
                            <span>🌐 {movieInfo.Language}</span>
                        </div>

                        <p className="text-gray-200 mb-6 leading-relaxed">
                            {movieInfo.description}
                        </p>

                        {/* Buttons */}
                        <div className="flex gap-4">
                            <button
                                onClick={handleWatchNow}
                                className=" cursor-pointer
                  bg-gradient-to-r from-[#e50914] to-[#ff4b2b]
                  hover:scale-105 transition
                  px-7 py-3 rounded-lg font-semibold
                  shadow-[0_0_25px_rgba(229,9,20,0.5)]
                "
                            >
                                ▶ Watch Now
                            </button>

                            <button className="bg-[#1f1f1f] cursor-pointer border border-gray-600 px-6 py-3 rounded-lg hover:bg-[#2a2a2a]">
                                ＋ Watchlist
                            </button>
                        </div>

                        <div className="mt-5 text-sm text-gray-400 space-y-1">
                            <p><b>Stars:</b> {movieInfo.Stars}</p>
                            <p><b>Director:</b> {movieInfo.Director}</p>
                        </div>
                    </div>
                </div>

                {/* 🔹 TRAILER */}
                {movieInfo.youtube_trailer_iframe && (
                    <div className="mt-14">
                        <h2 className="text-2xl font-semibold mb-4">
                            Official Trailer
                        </h2>
                        <div className="aspect-video rounded-xl overflow-hidden border border-gray-700">
                            <iframe
                                src={movieInfo.youtube_trailer_iframe}
                                title="Movie Trailer"
                                className="w-full h-full"
                                allowFullScreen
                            />
                        </div>
                    </div>
                )}

                {/* 🔹 SCREENSHOTS */}
                {movieInfo.screensorts.length > 0 && (
                    <div className="mt-14">
                        <h2 className="text-2xl font-semibold mb-4">
                            Screenshots
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {movieInfo.screensorts.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    className="rounded-lg hover:scale-105 transition"
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* 🔹 DOWNLOAD */}
                <div ref={downloadRef} className="mt-16 mb-20">
                    <h2 className="text-2xl font-semibold mb-6">
                        Download Options
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.entries(movieInfo.DownloadLink).map(([q, url]) => (
                            <a
                                key={q}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                  bg-[#151515]
                  border border-gray-700
                  p-5 rounded-xl text-center
                  hover:border-[#e50914]
                "
                            >
                                <p className="text-lg font-semibold">{q}</p>
                                <p className="text-xs text-gray-400">
                                    Fast & Secure Download
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
