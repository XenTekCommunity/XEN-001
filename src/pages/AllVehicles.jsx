"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { motion } from "framer-motion"
import { SlidersHorizontal, Grid, List } from "lucide-react"
import { vehiclesData, brandsData } from "../data/vehiclesData"
import VehicleCard from "../components/VehicleCard"

const AllVehicles = () => {
  const [searchParams] = useSearchParams()
  const [filteredVehicles, setFilteredVehicles] = useState(vehiclesData)
  const [filters, setFilters] = useState({
    search: searchParams.get("search") || "",
    brand: "All",
    priceRange: "All",
    year: "All",
    fuel: "All",
    transmission: "All",
  })
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState("grid")

  useEffect(() => {
    let filtered = vehiclesData

    // Apply filters
    if (filters.search) {
      filtered = filtered.filter(
        (vehicle) =>
          vehicle.name.toLowerCase().includes(filters.search.toLowerCase()) ||
          vehicle.brand.toLowerCase().includes(filters.search.toLowerCase()),
      )
    }

    if (filters.brand !== "All") {
      filtered = filtered.filter((vehicle) => vehicle.brand === filters.brand)
    }

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
  }, [filters, sortBy])

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setFilters({
      search: "",
      brand: "All",
      priceRange: "All",
      year: "All",
      fuel: "All",
      transmission: "All",
    })
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Vehicles</h1>
          <p className="text-xl text-gray-600">Browse our complete collection of quality second-hand vehicles</p>
        </motion.div>

        {/* Filters and Sort */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-300 shadow-sm"
            >
              <SlidersHorizontal className="h-4 w-4" />
              <span>Filters</span>
            </button>
            <span className="text-gray-600">{filteredVehicles.length} vehicles found</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  viewMode === "grid"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  viewMode === "list"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
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
            className="bg-white rounded-lg p-6 mb-8 shadow-lg border border-gray-200"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                <input
                  type="text"
                  value={filters.search}
                  onChange={(e) => handleFilterChange("search", e.target.value)}
                  placeholder="Search vehicles..."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
                <select
                  value={filters.brand}
                  onChange={(e) => handleFilterChange("brand", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="All">All Brands</option>
                  {brandsData.map((brand) => (
                    <option key={brand.name} value={brand.name}>
                      {brand.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <select
                  value={filters.priceRange}
                  onChange={(e) => handleFilterChange("priceRange", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="All">All Prices</option>
                  <option value="0-20000">Under $20,000</option>
                  <option value="20000-30000">$20,000 - $30,000</option>
                  <option value="30000-40000">$30,000 - $40,000</option>
                  <option value="40000">Above $40,000</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                <select
                  value={filters.year}
                  onChange={(e) => handleFilterChange("year", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
              >
                Clear Filters
              </button>
            </div>
          </motion.div>
        )}

        {/* Vehicles Grid/List */}
        <div
          className={
            viewMode === "grid" ? "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8" : "space-y-6"
          }
        >
          {filteredVehicles.map((vehicle, index) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} viewMode={viewMode} />
          ))}
        </div>

        {/* No Results */}
        {filteredVehicles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">No vehicles found matching your criteria.</p>
            <button onClick={clearFilters} className="btn-primary">
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default AllVehicles
