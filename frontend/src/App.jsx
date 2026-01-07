import { Routes, Route } from "react-router-dom";
import { TopNav } from "./components/TopNav";
import { BottomNav } from "./components/BottomNav";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile";
import { Footer } from "./components/Footer";
import { Movie } from "./components/Movie";
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
    <div className="bg-[#0F0F0F] min-h-screen text-white pb-16 sm:pb-0">
      <ScrollToTop />


      {/* Desktop Navigation */}
      <TopNav />
      {/* 📱 Mobile App Name (Minimal, Premium) */}
      <div className="sm:hidden px-4 pt-4 pb-2">
        <h1 className="text-2xl font-extrabold tracking-wide">
          <span className="text-[#E50914]">Stream</span>
          <span className="text-white">ly</span>
        </h1>
      </div>


      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<Movie />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />

      {/* Mobile Navigation */}
      <BottomNav />
    </div>
  );
}

export default App;
