export const Profile = () => {
  return (
    <section className="bg-[#0F0F0F] text-white min-h-screen px-4 py-10">
      <div className="max-w-md mx-auto">

        {/* Profile Card */}
        <div className="bg-[#141414] rounded-2xl p-6 shadow-lg">

          {/* Avatar */}
          <div className="flex flex-col items-center">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="User Avatar"
              className="w-24 h-24 rounded-full object-cover border-2 border-white/10"
            />

            <h2 className="mt-4 text-xl font-semibold">
              Guest User
            </h2>

            <p className="text-gray-400 text-sm">
              guest@streamly.app
            </p>
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-white/10" />

          {/* Profile Info */}
          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Account Type</span>
              <span className="font-medium">Guest</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Plan</span>
              <span className="font-medium">Free</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Member Since</span>
              <span className="font-medium">2025</span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 space-y-3">
            <button
              className="
                w-full
                py-2.5
                rounded-full
                bg-white/90
                text-black
                font-semibold
                hover:bg-white
                transition
              "
            >
              Edit Profile
            </button>

            <button
              className="
                w-full
                py-2.5
                rounded-full
                border border-white/20
                text-white
                hover:bg-white/10
                transition
              "
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-6 text-center text-xs text-gray-500">
          Manage your account and preferences
        </p>

      </div>
    </section>
  );
};
