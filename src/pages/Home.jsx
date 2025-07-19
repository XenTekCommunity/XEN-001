"use client"

import { useState } from "react"
import Hero from "../components/Hero"
import Services from "../components/Services"
import PopularVehicles from "../components/PopularVehicles"
import BrowseByBrands from "../components/BrowseByBrands"
import Testimonials from "../components/Testimonials"
import FAQ from "../components/FAQ"

const Home = () => {
  const [selectedBrand, setSelectedBrand] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand)
  }

  return (
    <div>
      <Hero />
      <Services />
      <PopularVehicles searchQuery={searchQuery} selectedBrand={selectedBrand} />
      <BrowseByBrands selectedBrand={selectedBrand} onBrandSelect={handleBrandSelect} />
      <Testimonials />
      <FAQ />
    </div>
  )
}

export default Home
