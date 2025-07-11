"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { vehiclesData } from "../data/vehiclesData"
import VehicleCard from "./VehicleCard"

const PopularVehicles = ({ searchQuery = "", selectedBrand = "All" }) => {
  const [filteredVehicles, setFilteredVehicles] = useState(vehiclesData)
  const [activeTab, setActiveTab] = useState("all")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      let filtered = vehiclesData

      if (searchQuery.trim()) {
        filtered = filtered.filter(
          (vehicle) =>
            vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            vehicle.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
            vehicle.fuel.toLowerCase().includes(searchQuery.toLowerCase()) ||
            vehicle.transmission.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      }

      if (selectedBrand !== "All") {
        filtered = filtered.filter((vehicle) => vehicle.brand === selectedBrand)
      }

      if (activeTab === "featured") {
        filtered = filtered.filter((vehicle) => vehicle.featured)
      }

      setFilteredVehicles(filtered)
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchQuery, selectedBrand, activeTab])

  return (
    <section
      id="vehicles"
      className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 floating-wheel opacity-5"></div>
      <div className="absolute top-40 right-20 floating-car opacity-5"></div>
      <div className="absolute bottom-20 left-1/4 floating-engine opacity-5"></div>

      <div className="container relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Popular Vehicles</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most sought-after vehicles with advanced filtering options
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  activeTab === "all"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                All Vehicles
              </button>
              <button
                onClick={() => setActiveTab("featured")}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  activeTab === "featured"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                Featured
              </button>
            </div>
          </div>
        </div>

        {/* Search Results Info */}
        {searchQuery && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
            <p className="text-gray-600">
              {isLoading ? "Searching..." : `Found ${filteredVehicles.length} vehicles for "${searchQuery}"`}
            </p>
          </motion.div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <div className="loading-spinner"></div>
          </div>
        )}

        {/* Vehicles Grid */}
        {!isLoading && (
          <AnimatePresence>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {filteredVehicles.map((vehicle, index) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
              ))}
            </div>
          </AnimatePresence>
        )}

        {/* No Results */}
        {!isLoading && filteredVehicles.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">No vehicles found matching your criteria.</p>
            <button
              onClick={() => {
                setActiveTab("all")
              }}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default PopularVehicles
