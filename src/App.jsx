import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import FloatingElements from "./components/FloatingElements"
import WelcomeModal from "./components/WelcomeModal"
import Home from "./pages/Home"
import AllVehicles from "./pages/AllVehicles"
import VehicleDetail from "./pages/VehicleDetail"
import BrandPage from "./pages/BrandPage"
import Contact from "./pages/Contact"
import AdminDashboard from "./pages/AdminDashboard"
import About from "./pages/About"

function App() {
  return (
    <div className="App">
      <FloatingElements />
      <Navbar />
      <WelcomeModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<AllVehicles />} />
        <Route path="/vehicle/:id" element={<VehicleDetail />} />
        <Route path="/brand/:brandName" element={<BrandPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/>} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
