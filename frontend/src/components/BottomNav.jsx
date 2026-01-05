import { NavLink } from "react-router-dom";
import { Home, Search, Info, User } from "lucide-react";

export const BottomNav = () => {
  return (
    <nav
      className="
        fixed bottom-0 left-0 right-0
        bg-[#141414]
        border-t border-gray-800
        flex justify-around
        py-2
        sm:hidden
        z-50
      "
    >
      <NavItem to="/" icon={<Home size={20} />} label="Home" />
      <NavItem to="/search" icon={<Search size={20} />} label="Search" />
      <NavItem to="/about" icon={<Info size={20} />} label="About" />
      <NavItem to="/profile" icon={<User size={20} />} label="Profile" />
    </nav>
  );
};

const NavItem = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex flex-col items-center text-xs ${
        isActive ? "text-[#E50914]" : "text-gray-400"
      }`
    }
  >
    {icon}
    <span>{label}</span>
  </NavLink>
);
