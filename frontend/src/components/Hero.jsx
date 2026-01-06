import { Play } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = ({ heroData }) => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!heroData) return null;

  const backgroundImage = isMobile
    ? heroData.mobileBg
    : heroData.desktopBg;

  return (
    <section
      className="relative h-[55vh] sm:h-[75vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* Content Wrapper */}
      <div className="absolute inset-x-0 bottom-0 px-4 sm:px-10 pb-6 sm:pb-12">
        <div className="max-w-xl space-y-3">

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl font-bold leading-tight">
            {heroData.title}
          </h1>

          {/* Description (VISIBLE ON MOBILE TOO) */}
          <p className="text-sm sm:text-base text-gray-300 line-clamp-3">
            {heroData.description}
          </p>

          {/* Actions */}
          <div className="pt-2">
            <button
              className="
                inline-flex items-center gap-2
                px-5 py-2.5
                rounded-full
                bg-black/60 backdrop-blur
                border border-white/20
                text-white font-medium
                hover:bg-white/20
                transition
                cursor-pointer
              "
            >
              <Play size={18} className="fill-white" />
              <span>Play</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
