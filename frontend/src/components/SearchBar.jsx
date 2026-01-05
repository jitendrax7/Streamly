export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="
        w-36 sm:w-56
        px-3 py-1.5
        rounded-full
        bg-[#1C1C1C]
        text-sm text-white
        placeholder-gray-400
        focus:outline-none
        focus:ring-2
        focus:ring-[#E50914]
      "
    />
  );
}
