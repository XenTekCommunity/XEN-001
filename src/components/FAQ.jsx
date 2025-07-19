"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { faqsData } from "../data/vehiclesData"

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <section className="section-padding bg-gradient-to-br from-white to-blue-50">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our services and vehicle purchasing process
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqsData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div
                className={`glass-card transition-all duration-300 border border-gray-100 rounded-2xl shadow-lg overflow-hidden ${openFaq === index ? "ring-2 ring-blue-500/40" : "hover:shadow-2xl"}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className={`w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none transition-colors duration-300 group ${openFaq === index ? "bg-gradient-to-r from-blue-50 to-purple-50" : "hover:bg-blue-50/60"}`}
                  aria-expanded={openFaq === index}
                >
                  <span className={`font-semibold text-lg transition-colors duration-300 ${openFaq === index ? "text-blue-700" : "group-hover:text-blue-600"}`}>
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`ml-4 text-blue-600 group-hover:text-blue-700 transition-colors duration-200`}
                  >
                    <ChevronDown className="h-6 w-6" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-100 text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
