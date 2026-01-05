export const Profile = () => {
  return (
    <div className="p-6 flex flex-col items-center">
      <div className="w-24 h-24 rounded-full bg-gray-700 mb-4" />

      <h2 className="text-lg font-semibold">Guest User</h2>
      <p className="text-gray-400 text-sm">guest@streamly.app</p>

      <button
        className="
          mt-4
          px-6 py-2
          rounded-full
          bg-[#E50914]
          hover:bg-red-600
          transition
        "
      >
        Edit Profile
      </button>
    </div>
  );
};
