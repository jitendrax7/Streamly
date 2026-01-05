import { useState } from "react";
import { ChevronUp } from "lucide-react";

export const MobileCategory = ({ categories, active, setActive }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-16 left-0 right-0 sm:hidden z-40 px-4 flex flex-col-reverse">

      {/* Selected Category Pill */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full
          backdrop-blur-xl
          bg-white/10
          border border-white/20
          rounded-2xl
          px-4 py-3
          flex items-center justify-between
          text-sm font-medium
          shadow-lg
          transition
          active:scale-95
        "
      >
        <span>{active}</span>

        <ChevronUp
          size={18}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown (opens UP) */}
      <div
        className={`
          mb-3
          backdrop-blur-2xl
          bg-black/40
          border border-white/10
          rounded-3xl
          p-4
          grid grid-cols-2 gap-3
          transition-all duration-300
          origin-bottom
          ${
            open
              ? "scale-100 opacity-100"
              : "scale-95 opacity-0 pointer-events-none"
          }
        `}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActive(cat);
              setOpen(false);
            }}
            className={`
              px-4 py-2
              rounded-full
              text-xs font-medium
              transition-all
              ${
                active === cat
                  ? "bg-[#E50914] text-white shadow-md"
                  : "bg-white/10 text-gray-200 hover:bg-white/20"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};
