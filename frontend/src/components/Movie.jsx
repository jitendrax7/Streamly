import { useEffect, useRef, useState } from "react";

import image1 from "../assets/mobilelook.jpg";
import image2 from "../assets/bgbanner.jpg";
import screensort1 from "../assets/img1.jpg";
import screensort2 from "../assets/img2.jpg";
import screensort3 from "../assets/img3.jpg";
import screensort4 from "../assets/img4.jpg";
export const Movie = () => {
    const [movieInfo, setMovieInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    const downloadRef = useRef(null);

    // 🔹 Dummy backend data
    const dummyData = {
        name: "The Fragrant Flower Blooms With Dignity",
        poster: [
            image1,
            image2
        ],
        discription:
            "What lies beyond the curtains ... is a world I will probably never come in contact with. A world full of dreams, hopes, and endless possibilities. Yet, here I am, confined within these four walls, yearning to break free and explore the unknown. The fragrant flower outside my window seems to bloom with dignity, untouched by the chaos of the world beyond. It stands tall, resilient against the harsh winds and relentless storms. I often wonder if I too can find such strength within myself, to rise above my circumstances and embrace the beauty",
        screensorts: [
            screensort1,
            screensort2,
            screensort3,
            screensort4
        ],
        iMDBRating: "6.6/10",
        Genre: "History | Drama",
        DownloadLink: {
            "4K": "https://example.com",
            "1080p": "https://example.com",
            "720p": "https://example.com",
            "480p": "https://example.com"
        },
        Language: "Hindi & English",
        youtube_trailer_iframe: "https://www.youtube.com/embed/1FcVJxxPWh4",
        Stars: "Dwayne Johnson, Emily Blunt",
        Director: "Benny Safdie"
    };

    useEffect(() => {
        setTimeout(() => {
            setMovieInfo(dummyData);
            setLoading(false);
        }, 600);
    }, []);

    const handleWatchNow = () => {
        downloadRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                Loading movie...
            </div>
        );
    }

    if (!movieInfo) return null;

    return (
        <div className="bg-[#0b0b0b] text-white min-h-screen">
            {/* 🔹 HERO */}
            <div className="relative">
                <img
                    src={movieInfo.poster?.[1] || movieInfo.poster?.[0]}
                    alt={movieInfo.name}
                    className="w-full h-[50vh] md:h-[70vh] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>

            {/* 🔹 CONTENT */}
            <div className="max-w-6xl mx-auto px-4 md:px-6 -mt-24 md:-mt-32 relative z-10">
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                    {/* Poster */}
                    <img
                        src={movieInfo.poster?.[0]}
                        alt={movieInfo.name}
                        className="w-40 md:w-64 mx-auto md:mx-0 rounded-xl shadow-2xl"
                    />

                    {/* Info */}
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-2xl md:text-4xl font-bold mb-3">
                            {movieInfo.name}
                        </h1>

                        <div className="flex flex-wrap justify-center md:justify-start gap-3 text-xs md:text-sm text-gray-300 mb-4">
                            {movieInfo.iMDBRating && <span>⭐ IMDb {movieInfo.iMDBRating}</span>}
                            {movieInfo.Genre && <span>🎬 {movieInfo.Genre}</span>}
                            {movieInfo.Language && <span>🌐 {movieInfo.Language}</span>}
                        </div>

                        <p className="text-gray-200 text-sm md:text-base mb-6 leading-relaxed">
                            {movieInfo.discription}
                        </p>

                        {/* 🔹 ACTION BUTTONS */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                            <button
                                onClick={handleWatchNow}
                                className="
                  relative overflow-hidden
                  bg-gradient-to-r from-[#e50914] to-[#ff4b2b]
                  hover:from-[#ff4b2b] hover:to-[#e50914]
                  px-7 py-3 rounded-lg font-semibold
                  shadow-[0_0_20px_rgba(229,9,20,0.5)]
                  transition-all duration-300
                "
                            >
                                ▶ Watch Now
                            </button>

                            <button className="bg-[#1f1f1f] hover:bg-[#2a2a2a] border border-gray-600 px-6 py-3 rounded-lg transition">
                                ＋ Watchlist
                            </button>
                        </div>

                        {/* Extra info */}
                        <div className="mt-5 space-y-1 text-xs md:text-sm text-gray-400">
                            {movieInfo.Stars && <p><b>Stars:</b> {movieInfo.Stars}</p>}
                            {movieInfo.Director && <p><b>Director:</b> {movieInfo.Director}</p>}
                        </div>
                    </div>
                </div>

                {/* 🔹 TRAILER */}
                {movieInfo.youtube_trailer_iframe && (
                    <div className="mt-14">
                        <h2 className="text-xl md:text-2xl font-semibold mb-4">
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
                {movieInfo.screensorts?.length > 0 && (
                    <div className="mt-14">
                        <h2 className="text-xl md:text-2xl font-semibold mb-4">
                            Screenshots
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
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

                {/* 🔹 DOWNLOAD SECTION */}
                {movieInfo.DownloadLink && (
                    <div ref={downloadRef} className="mt-16 mb-20">
                        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center md:text-left">
                            Download Options
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {Object.entries(movieInfo.DownloadLink).map(
                                ([quality, link]) => (
                                    <a
                                        key={quality}
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                      group bg-[#151515]
                      border border-gray-700
                      rounded-xl p-5 text-center
                      hover:border-[#e50914]
                      hover:shadow-[0_0_20px_rgba(229,9,20,0.3)]
                      transition-all
                    "
                                    >
                                        <p className="text-lg font-semibold mb-1">{quality}</p>
                                        <p className="text-xs text-gray-400 group-hover:text-gray-200">
                                            Fast & Secure Download
                                        </p>
                                    </a>
                                )
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
