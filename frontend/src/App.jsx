import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Exploremain from "./pages/explore/Exploremain"
import Partnermain from "./pages/partner/Partnermain"
import AboutMain from "./pages/About/AboutMain"
import { DotPattern } from "./components/ui/dot-pattern"
import { cn } from "./lib/utils"
import Footer from "./components/Footer/Footer"
import Contact from "./pages/contact/Contact"

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

const AppContent = () => {
  const location = useLocation();
  const hideFooterPaths = ["/about"];

  return (
    <div className="relative min-h-screen">
      <ScrollToTop />
      <DotPattern
        className={cn(
          "fixed inset-0 z-0 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="relative z-10">
        <Navbar />
        <div className="pt-[72px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Exploremain />} />
            <Route path="/partner" element={<Partnermain />} />
            <Route path="/about" element={<AboutMain />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        {!hideFooterPaths.includes(location.pathname) && <Footer />}
      </div>
    </div>
  );
}

export default App