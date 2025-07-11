"use client"
import { motion } from "framer-motion"
import { Car, CreditCard, RefreshCw, Shield } from "lucide-react"
import { servicesData } from "../data/vehiclesData"

const iconMap = {
  Car: Car,
  CreditCard: CreditCard,
  RefreshCw: RefreshCw,
  Shield: Shield,
}

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive automotive solutions designed to make your car buying experience seamless and enjoyable
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon]
            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                  y: -20,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                className="group card p-8 cursor-pointer"
              >
                <motion.div
                  className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
