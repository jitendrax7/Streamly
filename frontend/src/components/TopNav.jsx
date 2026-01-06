import { NavLink } from "react-router-dom";

export const TopNav = () => {
  return (
    <nav
      className="
        hidden sm:flex
        items-center justify-between
        px-6 h-16 md
        sticky top-0 z-30
        bg-[#141414]
        border-b border-gray-800
      "
    >
      {/* Logo */}
      <h1 className="text-2xl font-bold text-[#E50914]">
        <span className="text-[#E50914]">Stream</span>
        <span className="text-white">ly</span>
      </h1>

      {/* Menu */}
      <div className="flex gap-6">
        <NavItem to="/" label="Home" />
        <NavItem to="/search" label="Search" />
        <NavItem to="/about" label="About" />
        <NavItem to="/profile" label="Profile" />
      </div>
    </nav>
  );
};

const NavItem = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `text-sm font-medium transition ${
        isActive
          ? "text-[#E50914]"
          : "text-gray-300 hover:text-white"
      }`
    }
  >
    {label}
  </NavLink>
);
