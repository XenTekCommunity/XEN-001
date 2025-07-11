"use client"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { brandsData } from "../data/vehiclesData"

const BrowseByBrands = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Browse by Brands
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our premium collection from world-renowned automotive manufacturers
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brandsData.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group"
            >
              <Link to={`/brand/${brand.name.toLowerCase()}`}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center cursor-pointer border border-gray-100 hover:border-blue-200 relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="bg-gray-50 group-hover:bg-white rounded-full p-4 w-24 h-24 mx-auto mb-4 flex items-center justify-center transition-all duration-300 group-hover:shadow-md">
                      <img
                        src={brand.logo || "/placeholder.svg"}
                        alt={brand.name}
                        className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {brand.name}
                    </h3>

                    <p className="text-sm text-gray-500 mb-4 group-hover:text-gray-600 transition-colors duration-300">
                      {brand.count} vehicles
                    </p>

                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="flex items-center justify-center space-x-2 text-blue-600 text-sm font-semibold">
                        <span>View Collection</span>
                        <motion.span
                          initial={{ x: 0 }}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                          className="inline-block"
                        >
                          →
                        </motion.span>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 left-2 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-15 transition-opacity duration-300"></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            Can't find your preferred brand?{" "}
            <span className="text-blue-600 font-medium cursor-pointer hover:underline">Contact us</span> for special
            requests
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default BrowseByBrands
