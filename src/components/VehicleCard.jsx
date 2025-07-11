"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import {
  Star,
  Heart,
  Calendar,
  Gauge,
  Fuel,
  Settings,
  Share2,
  Copy,
  Facebook,
  Twitter,
  MessageCircle,
  Check,
} from "lucide-react"

const VehicleCard = ({ vehicle, index, viewMode = "grid" }) => {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [shareSuccess, setShareSuccess] = useState(false)

  const handleShare = async (platform) => {
    const vehicleUrl = `${window.location.origin}/vehicle/${vehicle.id}`
    const shareText = `Check out this amazing ${vehicle.name} for $${vehicle.price.toLocaleString()}! 🚗✨`
    const shareTitle = `${vehicle.name} - ${vehicle.year}`

    switch (platform) {
      case "copy":
        try {
          await navigator.clipboard.writeText(vehicleUrl)
          setShareSuccess(true)
          setTimeout(() => {
            setShareSuccess(false)
            setShowShareMenu(false)
          }, 2000)
        } catch (err) {
          // Fallback for older browsers
          const textArea = document.createElement("textarea")
          textArea.value = vehicleUrl
          document.body.appendChild(textArea)
          textArea.select()
          document.execCommand("copy")
          document.body.removeChild(textArea)
          setShareSuccess(true)
          setTimeout(() => {
            setShareSuccess(false)
            setShowShareMenu(false)
          }, 2000)
        }
        break
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(vehicleUrl)}&quote=${encodeURIComponent(shareText)}`,
          "_blank",
          "width=600,height=400",
        )
        setShowShareMenu(false)
        break
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(vehicleUrl)}`,
          "_blank",
          "width=600,height=400",
        )
        setShowShareMenu(false)
        break
      case "whatsapp":
        window.open(`https://wa.me/?text=${encodeURIComponent(shareText + " " + vehicleUrl)}`, "_blank")
        setShowShareMenu(false)
        break
      case "native":
        if (navigator.share) {
          try {
            await navigator.share({
              title: shareTitle,
              text: shareText,
              url: vehicleUrl,
            })
            setShowShareMenu(false)
          } catch (err) {
            console.log("Native sharing cancelled")
          }
        }
        break
      default:
        break
    }
  }

  const ShareMenu = () => (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: -10 }}
        transition={{ duration: 0.2 }}
        className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 p-3 z-30 min-w-[220px]"
        style={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      >
        {shareSuccess ? (
          <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-center py-3">
            <div className="flex items-center justify-center mb-2">
              <div className="bg-green-100 p-2 rounded-full">
                <Check className="h-5 w-5 text-green-600" />
              </div>
            </div>
            <div className="text-green-600 font-semibold text-sm">Link Copied Successfully!</div>
            <div className="text-gray-500 text-xs mt-1">Ready to share</div>
          </motion.div>
        ) : (
          <div className="space-y-1">
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide px-3 py-1">Share Vehicle</div>

            {/* Native Share (if supported) */}
            {navigator.share && (
              <button
                onClick={() => handleShare("native")}
                className="w-full flex items-center space-x-3 px-3 py-2.5 hover:bg-gray-50 rounded-lg transition-colors duration-200 group"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-1.5 rounded-lg">
                  <Share2 className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Share</span>
              </button>
            )}

            <button
              onClick={() => handleShare("copy")}
              className="w-full flex items-center space-x-3 px-3 py-2.5 hover:bg-gray-50 rounded-lg transition-colors duration-200 group"
            >
              <div className="bg-gray-100 p-1.5 rounded-lg group-hover:bg-gray-200 transition-colors">
                <Copy className="h-4 w-4 text-gray-600" />
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Copy Link</span>
            </button>

            <button
              onClick={() => handleShare("facebook")}
              className="w-full flex items-center space-x-3 px-3 py-2.5 hover:bg-blue-50 rounded-lg transition-colors duration-200 group"
            >
              <div className="bg-blue-100 p-1.5 rounded-lg group-hover:bg-blue-200 transition-colors">
                <Facebook className="h-4 w-4 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">Facebook</span>
            </button>

            <button
              onClick={() => handleShare("twitter")}
              className="w-full flex items-center space-x-3 px-3 py-2.5 hover:bg-sky-50 rounded-lg transition-colors duration-200 group"
            >
              <div className="bg-sky-100 p-1.5 rounded-lg group-hover:bg-sky-200 transition-colors">
                <Twitter className="h-4 w-4 text-sky-600" />
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-sky-700">Twitter</span>
            </button>

            <button
              onClick={() => handleShare("whatsapp")}
              className="w-full flex items-center space-x-3 px-3 py-2.5 hover:bg-green-50 rounded-lg transition-colors duration-200 group"
            >
              <div className="bg-green-100 p-1.5 rounded-lg group-hover:bg-green-200 transition-colors">
                <MessageCircle className="h-4 w-4 text-green-600" />
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-green-700">WhatsApp</span>
            </button>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )

  if (viewMode === "list") {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ delay: index * 0.05, duration: 0.4 }}
        className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="relative w-full sm:w-48 h-32 flex-shrink-0">
            <img
              src={vehicle.images[0] || "/placeholder.svg"}
              alt={vehicle.name}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-2 left-2">
              <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">{vehicle.year}</span>
            </div>
            {vehicle.featured && (
              <div className="absolute top-2 right-2">
                <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium">Featured</span>
              </div>
            )}
          </div>

          <div className="flex-1 w-full">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-semibold mb-1 hover:text-blue-600 transition-colors duration-300">
                  {vehicle.name}
                </h3>
                <p className="text-2xl font-bold text-blue-600">${vehicle.price.toLocaleString()}</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      setShowShareMenu(!showShareMenu)
                    }}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 group"
                  >
                    <Share2 className="h-5 w-5 text-gray-400 hover:text-blue-500 group-hover:scale-110 transition-all duration-200" />
                  </button>
                  {showShareMenu && <ShareMenu />}
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setIsWishlisted(!isWishlisted)
                  }}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 group"
                >
                  <Heart
                    className={`h-5 w-5 transition-all duration-300 group-hover:scale-110 ${
                      isWishlisted ? "text-red-500 fill-current" : "text-gray-400 hover:text-red-500"
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{vehicle.year}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Gauge className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{vehicle.mileage}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Fuel className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{vehicle.fuel}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Settings className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{vehicle.transmission}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(vehicle.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">({vehicle.reviews})</span>
              </div>

              <Link to={`/vehicle/${vehicle.id}`}>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Click outside to close share menu */}
        {showShareMenu && (
          <div
            className="fixed inset-0 z-20"
            onClick={(e) => {
              e.stopPropagation()
              setShowShareMenu(false)
            }}
          />
        )}
      </motion.div>
    )
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group cursor-pointer relative"
    >
      <div className="relative overflow-hidden">
        <img
          src={vehicle.images[0] || "/placeholder.svg"}
          alt={vehicle.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">{vehicle.year}</span>
        </div>
        <div className="absolute top-4 right-4 flex space-x-2">
          {vehicle.featured && (
            <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium">Featured</span>
          )}
          <div className="relative">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setShowShareMenu(!showShareMenu)
              }}
              className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-300 group/share"
            >
              <Share2 className="h-4 w-4 text-gray-600 hover:text-blue-500 group-hover/share:scale-110 transition-all duration-200" />
            </button>
            {showShareMenu && <ShareMenu />}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setIsWishlisted(!isWishlisted)
            }}
            className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-300 group/heart"
          >
            <Heart
              className={`h-4 w-4 transition-all duration-300 group-hover/heart:scale-110 ${
                isWishlisted ? "text-red-500 fill-current" : "text-gray-600 hover:text-red-500"
              }`}
            />
          </button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {vehicle.name}
        </h3>
        <p className="text-3xl font-bold text-blue-600 mb-4">${vehicle.price.toLocaleString()}</p>

        <div className="space-y-2 text-sm text-gray-600 mb-4">
          <div className="flex justify-between">
            <span>Mileage:</span>
            <span className="font-medium">{vehicle.mileage}</span>
          </div>
          <div className="flex justify-between">
            <span>Fuel:</span>
            <span className="font-medium">{vehicle.fuel}</span>
          </div>
          <div className="flex justify-between">
            <span>Transmission:</span>
            <span className="font-medium">{vehicle.transmission}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(vehicle.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">({vehicle.reviews})</span>
          </div>

          <Link to={`/vehicle/${vehicle.id}`}>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm">
              View Details
            </button>
          </Link>
        </div>
      </div>

      {/* Click outside to close share menu */}
      {showShareMenu && (
        <div
          className="fixed inset-0 z-20"
          onClick={(e) => {
            e.stopPropagation()
            setShowShareMenu(false)
          }}
        />
      )}
    </motion.div>
  )
}

export default VehicleCard
