"use client"
import { motion } from "framer-motion"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

const Footer = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/")
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 to-black text-white section-padding">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AutoHub
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for quality second-hand vehicles. We've been serving customers with excellence for
              over 10 years, building lasting relationships through honest service and quality vehicles.
            </p>
            <div className="flex space-x-4">
              <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-400 transition-colors duration-300" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
                <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-400 transition-colors duration-300" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
                <Instagram className="h-6 w-6 text-gray-400 hover:text-pink-400 transition-colors duration-300" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
                <Youtube className="h-6 w-6 text-gray-400 hover:text-red-400 transition-colors duration-300" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/vehicles"
                  className="hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block"
                >
                  Vehicles
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block"
                >
                  About Us
                </button>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition-colors duration-300">Vehicle Sales</li>
              <li className="hover:text-white transition-colors duration-300">Trade-In Services</li>
              <li className="hover:text-white transition-colors duration-300">Auto Financing</li>
              <li className="hover:text-white transition-colors duration-300">Vehicle Inspection</li>
              <li className="hover:text-white transition-colors duration-300">Extended Warranty</li>
              <li className="hover:text-white transition-colors duration-300">Insurance Services</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center group">
                <Phone className="h-5 w-5 mr-3 group-hover:text-blue-400 transition-colors duration-300" />
                <div>
                  <p className="group-hover:text-white transition-colors duration-300">+1 (555) 123-4567</p>
                  <p className="text-sm">Mon-Sat: 9AM-7PM</p>
                </div>
              </div>
              <div className="flex items-center group">
                <Mail className="h-5 w-5 mr-3 group-hover:text-blue-400 transition-colors duration-300" />
                <div>
                  <p className="group-hover:text-white transition-colors duration-300">info@autohub.com</p>
                  <p className="text-sm">24/7 Email Support</p>
                </div>
              </div>
              <div className="flex items-start group">
                <MapPin className="h-5 w-5 mr-3 mt-1 group-hover:text-blue-400 transition-colors duration-300" />
                <div>
                  <p className="group-hover:text-white transition-colors duration-300">
                    123 Auto Street
                    <br />
                    Car City, CC 12345
                  </p>
                  <p className="text-sm">Visit our showroom</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2024 AutoHub. All rights reserved. | Designed with ❤️ for car enthusiasts
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
