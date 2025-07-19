"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, Filter, Grid, List } from "lucide-react"
import { vehiclesData, brandsData } from "../data/vehiclesData"
import VehicleCard from "../components/VehicleCard"

const BrandPage = () => {
  const { brandName } = useParams()
  const [brandVehicles, setBrandVehicles] = useState([])
  const [filteredVehicles, setFilteredVehicles] = useState([])
  const [filters, setFilters] = useState({
    priceRange: "All",
    year: "All",
    fuel: "All",
    transmission: "All",
  })
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState("grid")
  const [showFilters, setShowFilters] = useState(false)

  const brandInfo = brandsData.find((brand) => brand.name.toLowerCase() === brandName.toLowerCase())

  useEffect(() => {
    const vehicles = vehiclesData.filter((vehicle) => vehicle.brand.toLowerCase() === brandName.toLowerCase())
    setBrandVehicles(vehicles)
    setFilteredVehicles(vehicles)
  }, [brandName])

  useEffect(() => {
    let filtered = brandVehicles

    // Apply filters
    if (filters.priceRange !== "All") {
      const [min, max] = filters.priceRange.split("-").map(Number)
      filtered = filtered.filter((vehicle) => {
        if (max) {
          return vehicle.price >= min && vehicle.price <= max
        } else {
          return vehicle.price >= min
        }
      })
    }

    if (filters.year !== "All") {
      filtered = filtered.filter((vehicle) => vehicle.year.toString() === filters.year)
    }

    if (filters.fuel !== "All") {
      filtered = filtered.filter((vehicle) => vehicle.fuel === filters.fuel)
    }

    if (filters.transmission !== "All") {
      filtered = filtered.filter((vehicle) => vehicle.transmission === filters.transmission)
    }

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "year-new":
        filtered.sort((a, b) => b.year - a.year)
        break
      case "year-old":
        filtered.sort((a, b) => a.year - b.year)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      default:
        filtered.sort((a, b) => b.featured - a.featured)
    }

    setFilteredVehicles(filtered)
  }, [filters, sortBy, brandVehicles])

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setFilters({
      priceRange: "All",
      year: "All",
      fuel: "All",
      transmission: "All",
    })
  }

  if (!brandInfo) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Brand Not Found</h1>
          <Link to="/vehicles">
            <button className="btn-primary">Back to Vehicles</button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 md:pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-4 sm:py-8">
        {/* Navigation */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center justify-between mb-6 sm:mb-8"
        >
          <Link
            to="/vehicles"
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-sm sm:text-base">Back to All Vehicles</span>
          </Link>
        </motion.div>

        {/* Brand Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6 space-y-4 sm:space-y-0 sm:space-x-6">
            <img
              src={brandInfo.logo || "/placeholder.svg"}
              alt={brandInfo.name}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{brandInfo.name} Vehicles</h1>
              <p className="text-lg sm:text-xl text-gray-600">
                Discover our collection of {brandVehicles.length} premium {brandInfo.name} vehicles
              </p>
            </div>
          </div>
        </motion.div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
          <div className="flex items-center space-x-4 w-full sm:w-auto">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 bg-white px-3 sm:px-4 py-2 rounded-lg border hover:bg-gray-50 transition-colors duration-300 text-sm sm:text-base"
            >
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </button>
            <span className="text-gray-600 text-sm sm:text-base">{filteredVehicles.length} vehicles found</span>
          </div>

          <div className="flex items-center justify-between sm:justify-end space-x-4 w-full sm:w-auto">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  viewMode === "grid" ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  viewMode === "list" ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="year-new">Year: Newest First</option>
              <option value="year-old">Year: Oldest First</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-white rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 shadow-lg"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <select
                  value={filters.priceRange}
                  onChange={(e) => handleFilterChange("priceRange", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  <option value="All">All Prices</option>
                  <option value="0-20000">Under ₹20,00,000</option>
                  <option value="20000-30000">₹20,00,000 - ₹30,00,000</option>
                  <option value="30000-40000">₹30,00,000 - ₹40,00,000</option>
                  <option value="40000">Above ₹40,00,000</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                <select
                  value={filters.year}
                  onChange={(e) => handleFilterChange("year", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  <option value="All">All Years</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Type</label>
                <select
                  value={filters.fuel}
                  onChange={(e) => handleFilterChange("fuel", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  <option value="All">All Types</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Diesel">Diesel</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Transmission</label>
                <select
                  value={filters.transmission}
                  onChange={(e) => handleFilterChange("transmission", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  <option value="All">All Types</option>
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
                </select>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={clearFilters}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 text-sm"
              >
                Clear Filters
              </button>
            </div>
          </motion.div>
        )}

        {/* Vehicles Grid/List */}
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
              : "space-y-4 sm:space-y-6"
          }
        >
          {filteredVehicles.map((vehicle, index) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} viewMode={viewMode} />
          ))}
        </div>

        {/* No Results */}
        {filteredVehicles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">No {brandInfo.name} vehicles found matching your criteria.</p>
            <button onClick={clearFilters} className="btn-primary">
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default BrandPage
