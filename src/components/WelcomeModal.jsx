"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Star, Shield, Award, Users, TrendingUp, Sparkles } from "lucide-react"
import { SignInButton, SignUpButton, useUser } from "@clerk/clerk-react"

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { isSignedIn } = useUser()

  useEffect(() => {
    // Only show modal if user is not signed in
    if (!isSignedIn) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 10000) // 10 seconds

      return () => clearTimeout(timer)
    }
  }, [isSignedIn])

  if (isSignedIn) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 50 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {/* Custom scrollbar styles */}
            <style jsx>{`
              .modal-content::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {/* Close Button */}
            <button
  onClick={(e) => {
    e.stopPropagation()
    setIsOpen(false)
    setDismissed(true)
  }}
  className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-900 transition-colors duration-300 z-[9999]"
>
  <X className="h-6 w-6 text-white" />
</button>


            {/* Scrollable Content */}
            <div className="modal-content overflow-y-auto max-h-[90vh] rounded-3xl">
              {/* Header with Gradient Background */}
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="flex items-center justify-center mb-4"
                  >
                    <div className="bg-white/20 p-4 rounded-full">
                      <Sparkles className="h-12 w-12 text-white" />
                    </div>
                  </motion.div>
                  <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-3"
                  >
                    🚗 Welcome to AutoHub! 🚗
                  </motion.h2>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl text-center text-white/90"
                  >
                    Unlock Exclusive Features & Vehicle Details
                  </motion.p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl"
                  >
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Verified Vehicle History</h3>
                      <p className="text-gray-600 text-sm">
                        Access complete service records, accident history, and ownership details
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl"
                  >
                    <div className="bg-green-100 p-3 rounded-full">
                      <Award className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Premium EMI Calculator</h3>
                      <p className="text-gray-600 text-sm">
                        Advanced loan calculations with multiple bank options and rates
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl"
                  >
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Direct Dealer Contact</h3>
                      <p className="text-gray-600 text-sm">
                        Connect instantly with verified dealers and schedule test drives
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="flex items-start space-x-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl"
                  >
                    <div className="bg-orange-100 p-3 rounded-full">
                      <TrendingUp className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Market Price Analysis</h3>
                      <p className="text-gray-600 text-sm">
                        Get real-time market comparisons and price recommendations
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <SignUpButton mode="modal">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      🚀 Start Your Journey
                    </button>
                  </SignUpButton>
                  <SignInButton mode="modal">
                    <button className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                      Already a Member? Sign In
                    </button>
                  </SignInButton>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="flex items-center justify-center space-x-8 mt-8 pt-6 border-t border-gray-200"
                >
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">50K+</p>
                    <p className="text-sm text-gray-600">Happy Customers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">15K+</p>
                    <p className="text-sm text-gray-600">Vehicles Sold</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-600">4.9★</p>
                    <p className="text-sm text-gray-600">User Rating</p>
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                  className="text-center text-xs text-gray-500 mt-4"
                >
                  Join thousands of satisfied customers who found their dream cars with AutoHub
                </motion.p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WelcomeModal
