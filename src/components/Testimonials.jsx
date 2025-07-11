"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star } from "lucide-react"
import { testimonialsData } from "../data/vehiclesData"

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from satisfied customers who found their perfect vehicles with us
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonialsData[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonialsData[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mr-6 object-cover"
                />
                <div>
                  <h4 className="text-xl font-semibold">{testimonialsData[currentTestimonial].name}</h4>
                  <p className="text-gray-600">{testimonialsData[currentTestimonial].location}</p>
                  <div className="flex mt-2">
                    {[...Array(testimonialsData[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-lg italic leading-relaxed">
                "{testimonialsData[currentTestimonial].comment}"
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-3">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
