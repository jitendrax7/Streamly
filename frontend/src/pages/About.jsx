export const About = () => {
  return (
    <section className="bg-[#0F0F0F] text-white min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">
          About <span className="text-[#E50914]">Streamly</span>
        </h1>

        {/* Intro */}
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
          Streamly is a modern entertainment platform designed to help users
          discover movies and series effortlessly. We focus on delivering a
          clean, immersive browsing experience inspired by the world’s leading
          streaming services.
        </p>

        {/* Mission */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Our Mission
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Our mission is to make content discovery simple, fast, and enjoyable.
            Whether you are searching for trending movies or exploring new
            releases, Streamly brings everything together in one intuitive
            interface.
          </p>
        </div>

        {/* What We Offer */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            What We Offer
          </h2>
          <ul className="space-y-2 text-gray-400 list-disc list-inside">
            <li>Curated movie and series collections</li>
            <li>Trending, popular, and newly released content</li>
            <li>Mobile-first, smooth browsing experience</li>
            <li>Clean and distraction-free design</li>
          </ul>
        </div>

        {/* Vision */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-3">
            Our Vision
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We envision Streamly as a platform that evolves with viewers’ needs,
            offering smarter recommendations and a premium experience that feels
            effortless on every device.
          </p>
        </div>

        {/* Footer note */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Streamly. All rights reserved.
          </p>
        </div>

      </div>
    </section>
  );
};
