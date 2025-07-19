"use client"

import { useState, useEffect, useRef } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Bell, Menu, X, Home, Briefcase, Building2, FileText, ChevronDown, ChevronUp, UserCircle, LogIn, LogOut, Star, Laptop, Server, Smartphone, Book, Video, MessageCircle, Settings, Mail } from "lucide-react"
import { SignInButton, SignUpButton, UserButton, useUser, useClerk } from "@clerk/clerk-react"

const NAV_LINKS = [
  { name: "Home", path: "/", icon: <Home className="mr-2 h-5 w-5" /> },
  { name: "Vehicles", path: "/vehicles", icon: <Briefcase className="mr-2 h-5 w-5" /> },
  { name: "About", path: "/about", icon: <FileText className="mr-2 h-5 w-5" /> },
  { name: "Contact", path: "/contact", icon: <Mail className="mr-2 h-5 w-5" /> },
]

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()
  const { isSignedIn, user } = useUser()
  const hasMounted = useRef(false)

  useEffect(() => {
    hasMounted.current = true
  }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isMenuOpen])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/vehicles?search=${encodeURIComponent(searchQuery)}`)
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className={`glass-nav bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-lg border-b" : "shadow-none"}`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between h-16 items-center w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center group flex-shrink-0">
            <div className="bg-blue-600 group-hover:bg-blue-700 p-2 rounded-lg transition-colors duration-300">
              <Home className="text-white text-xl" />
            </div>
            <span className="ml-3 text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">AutoHub</span>
          </Link>

          {/* Main Navigation (Desktop) */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_LINKS.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className="nav-link text-gray-700 hover:text-blue-600 px-4 py-2 flex items-center rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                {link.icon} {link.name}
              </Link>
            ))}
          </div>

          {/* Right Section - Actions */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            {/* Desktop Search */}
            <form onSubmit={handleSearch} className="hidden md:block relative w-40 lg:w-56 xl:w-64">
              <input
                type="text"
                placeholder="Search cars, brands, models..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-premium pl-10 pr-4 py-2 w-full rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              {searchQuery && (
                <button type="button" onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg">×</button>
              )}
            </form>
            {/* User/Clerk */}
            {isSignedIn ? (
              <div className="dropdown relative">
                <button className="flex items-center space-x-2 focus:outline-none group">
                  <div className="relative">
                    <UserButton appearance={{ elements: { avatarBox: "h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 overflow-hidden avatar-ring" } }} />
                    <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white"></span>
                  </div>
                  <div className="hidden lg:flex flex-col items-start">
                    <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">{user?.firstName || user?.username}</span>
                    <span className="text-xs text-gray-500">{user?.primaryEmailAddress?.emailAddress || "User"}</span>
                  </div>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <SignInButton mode="modal">
                  <button className="btn-premium px-4 py-2 text-sm flex items-center gap-1"><LogIn className="h-4 w-4" />Sign In</button>
                </SignInButton>
              </div>
            )}
            {/* Hamburger for Mobile */}
            <button className="md:hidden p-2 text-gray-600 hover:text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
              {isMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Search Bar (always visible below navbar) */}
      <div className="block md:hidden fixed top-16 left-0 w-full z-40 bg-white shadow-sm border-b border-gray-100 px-4 py-2 flex items-center gap-2" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
        <form onSubmit={handleSearch} className="flex flex-1 items-center bg-gray-100 rounded-full px-3 py-2 shadow-inner">
          <Search className="text-gray-400 h-5 w-5 mr-2" />
          <input
            type="text"
            placeholder="Search cars, brands, models..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-base"
          />
          {searchQuery && (
            <button type="button" onClick={() => setSearchQuery("")} className="ml-2 text-gray-400 hover:text-gray-600 text-lg" aria-label="Clear search">×</button>
          )}
        </form>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ maxHeight: 0 }} animate={{ maxHeight: 1000 }} exit={{ maxHeight: 0 }} transition={{ duration: 0.3 }} className="mobile-menu md:hidden bg-white border-t border-gray-200 overflow-hidden">
            <div className="px-2 pt-2 pb-4 space-y-1">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.icon} {link.name}
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-2 mt-2">
                {isSignedIn ? (
                  <Link to="/profile" className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200"><UserCircle className="text-blue-500 mr-3 w-5" /> Profile</Link>
                ) : (
                  <SignInButton mode="modal">
                    <button className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200"><LogIn className="text-blue-500 mr-3 w-5" /> Sign In</button>
                  </SignInButton>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
