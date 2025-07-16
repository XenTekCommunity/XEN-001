"use client"

import { useState, useEffect } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Menu, X, Car, Zap } from "lucide-react"
import { SignInButton, SignUpButton, UserButton, useUser, useClerk } from "@clerk/clerk-react"
// Add the import for AdminLogin component at the top
import AdminLogin from "./AdminLogin"

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  // Add state for admin login modal after existing states
  const [showAdminLogin, setShowAdminLogin] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { isSignedIn, user } = useUser()
  const { signOut } = useClerk()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/vehicles?search=${encodeURIComponent(searchQuery)}`)
    }
  }

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
    setIsMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-200/50" : "bg-white shadow-md"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Premium Logo */}
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 cursor-pointer group"
              >
                <div className="relative">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Car className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 lg:w-4 lg:h-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <Zap className="h-1.5 w-1.5 lg:h-2 lg:w-2 text-white" />
                  </div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                    AutoHub
                  </h1>
                  <p className="text-xs text-gray-500 -mt-1">Premium Vehicles</p>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                { name: "Home", path: "/" },
                { name: "Vehicles", path: "/vehicles" },
                { name: "Services", action: () => scrollToSection("services") },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {item.path ? (
                    <Link
                      to={item.path}
                      className="relative uppercase text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 group" onClick={()=>window.scrollTo(0,0)}
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  ) : (
                    <button
                      onClick={item.action}
                      className="relative uppercase text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 group"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                    </button>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Search and Auth */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.form
                onSubmit={handleSearch}
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 z-10" />
                  <input
                    type="text"
                    placeholder="Search vehicles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-gray-50 border border-gray-200 rounded-full pl-11 pr-4 py-2.5 w-64 lg:w-72 focus:w-80 transition-all duration-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                      ×
                    </button>
                  )}
                </div>
              </motion.form>

              {/* Auth Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center space-x-3"
              >
                {isSignedIn ? (
                  <div className="flex items-center space-x-3">
                    <UserButton
                      appearance={{
                        elements: {
                          avatarBox:
                            "w-10 h-10 rounded-full border-2 border-blue-200 hover:border-blue-400 transition-colors duration-300",
                        },
                      }}
                    />
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <SignUpButton mode="modal">
                      <button className="bg-black text-white font-medium px-4 py-2 rounded-lg hover:bg-gray-200 shadow-lg hover:text-black transition-all duration-300 transform hover:scale-105">
                        Sign Up
                      </button>
                    </SignUpButton>
                  </div>
                )}
               
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden border-t border-gray-200/50 bg-white"
              >
                <div className="px-4 py-6 space-y-4">
                  {[
                    { name: "Home", path: "/" },
                    { name: "Vehicles", path: "/vehicles" },
                    { name: "Services", action: () => scrollToSection("services") },
                    { name: "About", path: "/about" },
                    { name: "Contact", path: "/contact" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.path ? (
                        <Link
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <button
                          onClick={item.action}
                          className="block text-left text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2 w-full"
                        >
                          {item.name}
                        </button>
                      )}
                    </motion.div>
                  ))}

                  {/* Mobile Search */}
                  <motion.form
                    onSubmit={handleSearch}
                    className="relative mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Search vehicles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </motion.form>

                  {/* Mobile Auth */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="pt-4 border-t border-gray-200"
                  >
                    {isSignedIn ? (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <UserButton />
                          <span className="text-gray-700 font-medium">{user?.firstName || user?.username}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        
                        <SignUpButton mode="modal">
                          <button className="w-full bg-black text-white font-medium py-2 rounded-lg transition-all duration-300">
                            Sign Up
                          </button>
                        </SignUpButton>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  )
}

export default Navbar
