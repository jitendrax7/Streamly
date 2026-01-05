import { Routes, Route } from "react-router-dom";
import { TopNav } from "./components/TopNav";
import { BottomNav } from "./components/BottomNav";

import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0F0F0F] min-h-screen text-white pb-16 sm:pb-0">

      {/* Desktop Navigation */}
      <TopNav />

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer/>

      {/* Mobile Navigation */}
      <BottomNav />
    </div>
  );
}

export default App;
