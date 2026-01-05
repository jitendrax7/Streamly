import SearchBar from "./SearchBar";

export const Navbar = () => {
  return (
    <nav className="h-14 bg-[#141414] flex items-center justify-between px-4 border-b border-gray-800">
      <h1 className="text-xl font-bold text-[#E50914]">
        Streamly
      </h1>

      <SearchBar />
    </nav>
  );
};
