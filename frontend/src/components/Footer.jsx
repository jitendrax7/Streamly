export const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-800 bg-[#0F0F0F] pb-20">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">

        {/* App Name */}
        <h2 className="text-xl font-bold text-[#E50914]">
          Streamly
        </h2>

        {/* Tagline */}
        <p className="mt-2 text-sm text-gray-400">
          Discover movies. Stream vibes. Enjoy cinema.
        </p>

        {/* Divider */}
        <div className="my-4 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Streamly. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
