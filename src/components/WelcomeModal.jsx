"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Shield, Award, Users, TrendingUp, Sparkles, LogIn } from "lucide-react"
import { SignInButton, SignUpButton, useUser } from "@clerk/clerk-react"

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { isSignedIn } = useUser()

  useEffect(() => {
    if (!isSignedIn) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 15000)
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
          className="fixed inset-0 z-50 flex flex-col justify-center items-center backdrop-blur-sm bg-black/60"
          style={{ minHeight: '100dvh' }}
          onClick={() => setIsOpen(false)}
        >
          <div className="relative w-full max-w-md px-2 sm:px-4 overflow-y-auto max-h-screen" onClick={e => e.stopPropagation()}>
            <div className="rounded-xl bg-white shadow-xl overflow-hidden max-h-[90vh] sm:max-h-[90vh]">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 z-10"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
              <div className="p-8">
                <div className="space-y-4 text-center">
                  <img src="/logo192.png" alt="AutoHub Logo" className="w-12 mx-auto" />
                  <h2 className="mb-8 text-2xl text-blue-900 font-bold">Log in to unlock the <br /> best of AutoHub.</h2>
                </div>
                <div className="mt-10 grid space-y-4">
                  <SignInButton mode="modal">
                    <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 w-full flex items-center justify-center gap-2">
                      <LogIn className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold tracking-wide text-gray-700 text-sm group-hover:text-blue-600">Continue with Email</span>
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 w-full flex items-center justify-center gap-2">
                      <span className="font-semibold tracking-wide text-gray-700 text-sm group-hover:text-blue-600">Create a new account</span>
                    </button>
                  </SignUpButton>
                </div>
                <div className="mt-10 space-y-4 py-3 text-gray-600 text-center text-xs">
                  <p>By proceeding, you agree to our <a href="/privacy-policy" className="underline">Terms of Use</a> and confirm you have read our <a href="/privacy-policy" className="underline">Privacy and Cookie Statement</a>.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WelcomeModal
