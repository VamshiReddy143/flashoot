import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Exploremain from "./pages/explore/Exploremain"
import Partnermain from "./pages/partner/Partnermain"
import AboutMain from "./pages/About/AboutMain"



const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Exploremain />} />
          <Route path="/partner" element={<Partnermain />} />
           <Route path="/about" element={<AboutMain />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App