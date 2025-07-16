"use client"
import { motion } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"
import { brandsData } from "../data/vehiclesData"
import { useNavigate } from "react-router-dom"

const BrowseByBrands = () => {
  const navigate = useNavigate()

  const handleBrandClick = (brandName) => {
    navigate(`/brand/${brandName.toLowerCase()}`)
  }

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-20 right-10 w-16 h-16 bg-purple-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/2 right-1/4 w-12 h-12 bg-green-200 rounded-full opacity-20"
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Browse by Brands
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover premium vehicles from the world's most trusted automotive brands
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {brandsData.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{
                y: -10,
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              onClick={() => handleBrandClick(brand.name)}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200 overflow-hidden"
            >
              {/* Country Badge */}
              <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                {brand.country}
              </div>

              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Brand Logo Container */}
                <div className="w-20 h-20 mx-auto mb-4 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-white transition-colors duration-300 overflow-hidden">
                  <img
                    src={brand.logo || "/placeholder.svg"}
                    alt={`${brand.name} logo`}
                    className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=64&width=64"
                    }}
                  />
                </div>

                {/* Brand Name */}
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {brand.name}
                </h3>

                {/* Brand Description */}
                <p className="text-sm text-gray-600 mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">
                  {brand.description}
                </p>

                {/* Vehicle Count */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-500">
                    {brand.count} {brand.count === 1 ? "Vehicle" : "Vehicles"}
                  </span>
                  <div className="flex items-center text-xs text-gray-400">
                    <Calendar className="h-3 w-3 mr-1" />
                    {brand.established}
                  </div>
                </div>

                {/* View Collection Button */}
                <motion.div
                  className="flex items-center justify-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors duration-300"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>View Collection</span>
                  <motion.div animate={{ x: 0 }} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Can't find your preferred brand? We're constantly expanding our inventory.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Request a Brand
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default BrowseByBrands
