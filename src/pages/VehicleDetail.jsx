"use client"

import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  Star,
  Heart,
  Share2,
  Phone,
  Mail,
  Calendar,
  Gauge,
  Fuel,
  Settings,
  Shield,
  Award,
  CheckCircle,
  Users,
  MapPin,
  Clock,
  Wrench,
  FileText,
  Camera,
  Lock,
  TrendingUp,
  BarChart3,
  History,
  AlertCircle,
} from "lucide-react"
import { SignInButton, SignUpButton, useUser } from "@clerk/clerk-react"
import { vehiclesData } from "../data/vehiclesData"
import EMICalculator from "../components/EMICalculator"

const VehicleDetail = () => {
  const { id } = useParams()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")
  const { isSignedIn } = useUser()

  const vehicle = vehiclesData.find((v) => v.id === Number.parseInt(id))

  if (!vehicle) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Vehicle Not Found</h1>
          <Link to="/vehicles">
            <button className="btn-primary">Back to Vehicles</button>
          </Link>
        </div>
      </div>
    )
  }

  const specifications = {
    Engine: vehicle.engine,
    Year: vehicle.year,
    Mileage: vehicle.mileage,
    "Fuel Type": vehicle.fuel,
    Transmission: vehicle.transmission,
    Color: vehicle.color,
    Drivetrain: vehicle.drivetrain,
    "Body Type": "Sedan",
    "Seating Capacity": "5 Persons",
    "Fuel Tank": "60 Liters",
    "Top Speed": "180 km/h",
    "Safety Rating": "5 Stars",
    "Insurance Group": "15E",
    "CO2 Emissions": "120 g/km",
    "Annual Tax": "₹15,000",
    Warranty: "3 Years/36,000 miles",
  }

  const serviceHistory = [
    { date: "2024-01-15", service: "Full Service", mileage: "42,000", cost: "₹45,000" },
    { date: "2023-07-20", service: "Oil Change & Filter", mileage: "38,500", cost: "₹12,000" },
    { date: "2023-03-10", service: "Brake Inspection", mileage: "35,200", cost: "₹20,000" },
    { date: "2022-11-05", service: "Annual MOT", mileage: "32,100", cost: "₹8,000" },
  ]

  // Premium features only for signed-in users
  const premiumFeatures = [
    {
      title: "Market Price Analysis",
      description: "Compare with 50+ similar vehicles in your area",
      icon: TrendingUp,
      value: "₹2.5L below market average",
    },
    {
      title: "Detailed Inspection Report",
      description: "150-point professional inspection with photos",
      icon: Shield,
      value: "95/100 condition score",
    },
    {
      title: "Ownership History",
      description: "Complete ownership chain and usage patterns",
      icon: History,
      value: "Single owner, personal use",
    },
    {
      title: "Insurance Estimate",
      description: "Comprehensive insurance quotes from top providers",
      icon: AlertCircle,
      value: "₹45,000/year estimated",
    },
    {
      title: "Resale Value Prediction",
      description: "AI-powered resale value forecast",
      icon: BarChart3,
      value: "₹18.5L after 3 years",
    },
    {
      title: "Loan Pre-approval",
      description: "Instant loan approval from partner banks",
      icon: CheckCircle,
      value: "Pre-approved up to ₹20L",
    },
  ]

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-40 right-10 floating-wheel opacity-5"></div>
      <div className="absolute bottom-40 left-10 floating-car opacity-5"></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Navigation */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 space-y-4 sm:space-y-0"
        >
          <Link
            to="/vehicles"
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Vehicles</span>
          </Link>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 bg-white hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors duration-300 shadow-sm border">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </button>
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-300 shadow-sm border ${
                isWishlisted ? "bg-red-50 text-red-600 border-red-200" : "bg-white hover:bg-gray-50"
              }`}
            >
              <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
              <span>{isWishlisted ? "Saved" : "Save"}</span>
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Image Gallery */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-white">
              <img
                src={vehicle.images[currentImageIndex] || "/placeholder.svg"}
                alt={vehicle.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex space-x-2">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {vehicle.year}
                </span>
                {vehicle.featured && (
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                )}
              </div>
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                <Camera className="h-4 w-4 inline mr-1" />
                {currentImageIndex + 1} / {vehicle.images.length}
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {vehicle.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all duration-300 bg-white ${
                    currentImageIndex === index ? "border-blue-600 scale-105" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${vehicle.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Vehicle Details */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  {vehicle.brand}
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Certified Pre-Owned
                </span>
              </div>
              <h1 className="text-2xl lg:text-3xl font-bold mb-3">{vehicle.name}</h1>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(vehicle.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 font-medium">{vehicle.rating}</span>
                  <span className="ml-1 text-gray-600">({vehicle.reviews} reviews)</span>
                </div>
              </div>
              <p className="text-3xl lg:text-4xl font-bold text-blue-600 mb-3">{formatCurrency(vehicle.price)}</p>
              <p className="text-gray-600 mb-6">{vehicle.description}</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 flex items-center space-x-3">
                <Calendar className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Year</p>
                  <p className="font-semibold">{vehicle.year}</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 flex items-center space-x-3">
                <Gauge className="h-8 w-8 text-green-600" />
                <div>
                  <p className="text-sm text-gray-600">Mileage</p>
                  <p className="font-semibold">{vehicle.mileage}</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 flex items-center space-x-3">
                <Fuel className="h-8 w-8 text-orange-600" />
                <div>
                  <p className="text-sm text-gray-600">Fuel Type</p>
                  <p className="font-semibold">{vehicle.fuel}</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 flex items-center space-x-3">
                <Settings className="h-8 w-8 text-purple-600" />
                <div>
                  <p className="text-sm text-gray-600">Transmission</p>
                  <p className="font-semibold">{vehicle.transmission}</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Owners</p>
                <p className="font-semibold">1 Previous</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                <MapPin className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Location</p>
                <p className="font-semibold">Showroom</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                <Clock className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Available</p>
                <p className="font-semibold">Now</p>
              </div>
            </div>

            {/* Premium Content Section */}
            {!isSignedIn && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="relative bg-white rounded-xl p-6 shadow-lg border border-gray-100 overflow-hidden"
              >
                {/* Blur Overlay */}
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex items-center justify-center">
                  <div className="text-center p-6">
                    <Lock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Features Locked</h3>
                    <p className="text-gray-600 mb-6">
                      Sign in to explore comprehensive vehicle analysis, market insights, and exclusive dealer contacts
                    </p>
                    <div className="flex flex-row justify-center gap-3">
                      <SignInButton mode="modal">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium">
                          Sign In to Explore
                        </button>
                      </SignInButton>
                      <SignUpButton mode="modal">
                        <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium">
                          Create Account
                        </button>
                      </SignUpButton>
                    </div>
                  </div>
                </div>

                {/* Blurred Content */}
                <div className="space-y-4 opacity-50">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Premium Vehicle Insights</h3>
                  {premiumFeatures.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <feature.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-800">{feature.title}</p>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                      <span className="text-sm font-semibold text-green-600">{feature.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Premium Content for Signed-in Users */}
            {isSignedIn && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-lg border border-blue-200"
              >
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-800">Premium Vehicle Insights</h3>
                  <span className="ml-auto bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    Exclusive
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {premiumFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <feature.icon className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-800 text-sm">{feature.title}</p>
                          <p className="text-xs text-gray-600 mb-1">{feature.description}</p>
                          <span className="text-xs font-semibold text-green-600">{feature.value}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Phone className="h-4 w-4 mr-2" />
                Call Dealer
              </button>
              <button className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center">
                <Mail className="h-4 w-4 mr-2" />
                Email Inquiry
              </button>
            </div>
          </motion.div>
        </div>

        {/* EMI Calculator */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <EMICalculator vehiclePrice={vehicle.price} vehicleName={vehicle.name} />
        </motion.div>

        {/* Detailed Information Tabs */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg border border-gray-100"
        >
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {["overview", "specifications", "features", "history", "service"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-6 border-b-2 font-medium text-sm transition-colors duration-300 whitespace-nowrap ${
                    activeTab === tab
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 lg:p-8 min-h-[400px]">
            {activeTab === "overview" && (
              <div>
                <h3 className="text-2xl font-semibold mb-6">Vehicle Overview</h3>
                <p className="text-gray-600 leading-relaxed mb-8">{vehicle.description}</p>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Shield className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Certified Pre-Owned</p>
                      <p className="text-sm text-gray-600">150-point inspection completed</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Award className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Warranty Included</p>
                      <p className="text-sm text-gray-600">3 months / 3,000 miles coverage</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <Star className="h-8 w-8 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Excellent Condition</p>
                      <p className="text-sm text-gray-600">Well maintained vehicle</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                  <h4 className="font-semibold text-lg mb-4">Why Choose This Vehicle?</h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Single previous owner</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Full service history available</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>No accident history</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Recently serviced</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>All keys and manuals included</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Extended warranty available</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "specifications" && (
              <div>
                <h3 className="text-2xl font-semibold mb-6">Technical Specifications</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-blue-600">Engine & Performance</h4>
                    <div className="space-y-3">
                      {Object.entries(specifications)
                        .slice(0, 8)
                        .map(([key, value]) => (
                          <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                            <span className="font-medium text-gray-700">{key}</span>
                            <span className="text-gray-900">{value}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-purple-600">Additional Details</h4>
                    <div className="space-y-3">
                      {Object.entries(specifications)
                        .slice(8)
                        .map(([key, value]) => (
                          <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                            <span className="font-medium text-gray-700">{key}</span>
                            <span className="text-gray-900">{value}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "features" && (
              <div>
                <h3 className="text-2xl font-semibold mb-6">Features & Equipment</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {vehicle.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg"
                    >
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-lg mb-4">Safety Features</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Anti-lock Braking System (ABS)",
                      "Electronic Stability Control",
                      "Traction Control System",
                      "Multiple Airbags",
                      "Blind Spot Monitoring",
                      "Lane Departure Warning",
                      "Forward Collision Warning",
                      "Automatic Emergency Braking",
                    ].map((safety, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-green-600" />
                        <span className="text-sm">{safety}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "history" && (
              <div>
                <h3 className="text-2xl font-semibold mb-6">Vehicle History</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-4 h-4 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-lg">Clean Title</p>
                      <p className="text-gray-600">No accidents, damage, or flood history reported</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-4 h-4 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-lg">Single Owner</p>
                      <p className="text-gray-600">Owned by one careful driver since new</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-4 h-4 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-lg">Complete Service Records</p>
                      <p className="text-gray-600">Full maintenance history available and up to date</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-4 h-4 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-lg">Non-Smoker Vehicle</p>
                      <p className="text-gray-600">Interior maintained in pristine condition</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-4 h-4 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-lg">Garage Kept</p>
                      <p className="text-gray-600">Protected from weather elements</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "service" && (
              <div>
                <h3 className="text-2xl font-semibold mb-6">Service History</h3>
                <div className="space-y-4">
                  {serviceHistory.map((service, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-lg space-y-2 sm:space-y-0"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Wrench className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-semibold">{service.service}</p>
                          <p className="text-sm text-gray-600">{service.date}</p>
                        </div>
                      </div>
                      <div className="text-left sm:text-right">
                        <p className="font-semibold">{service.cost}</p>
                        <p className="text-sm text-gray-600">{service.mileage}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                  <div className="flex items-center mb-4">
                    <FileText className="h-6 w-6 text-green-600 mr-2" />
                    <h4 className="font-semibold text-lg">Next Service Due</h4>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Recommended Service</p>
                      <p className="font-semibold">Oil Change & Filter</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Due At</p>
                      <p className="font-semibold">48,000 miles or 6 months</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default VehicleDetail
