import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Exploremain from "./pages/explore/Exploremain"
import Partnermain from "./pages/partner/Partnermain"
import AboutMain from "./pages/About/AboutMain"
import { DotPattern } from "./components/ui/dot-pattern"
import { cn } from "./lib/utils"



const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen">
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
        </Routes>
        </div>
        </div>
      </div>
    </Router>
  )
}

export default App