"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calculator, TrendingUp, IndianRupee, Calendar, Phone } from "lucide-react"

const EMICalculator = ({ vehiclePrice, vehicleName }) => {
  const [loanAmount, setLoanAmount] = useState(vehiclePrice * 0.8) // 80% of vehicle price
  const [downPayment, setDownPayment] = useState(vehiclePrice * 0.2) // 20% down payment
  const [interestRate, setInterestRate] = useState(8.5)
  const [loanTenure, setLoanTenure] = useState(5) // 5 years
  const [emi, setEmi] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)

  useEffect(() => {
    calculateEMI()
  }, [loanAmount, interestRate, loanTenure])

  useEffect(() => {
    setLoanAmount(vehiclePrice - downPayment)
  }, [downPayment, vehiclePrice])

  const calculateEMI = () => {
    const principal = loanAmount
    const monthlyRate = interestRate / 12 / 100
    const months = loanTenure * 12

    if (monthlyRate === 0) {
      const calculatedEmi = principal / months
      setEmi(calculatedEmi)
      setTotalAmount(principal)
      setTotalInterest(0)
    } else {
      const calculatedEmi =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)

      const calculatedTotalAmount = calculatedEmi * months
      const calculatedTotalInterest = calculatedTotalAmount - principal

      setEmi(calculatedEmi)
      setTotalAmount(calculatedTotalAmount)
      setTotalInterest(calculatedTotalInterest)
    }
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-1"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>

      {/* Floating Orbs */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-bounce"></div>
      <div
        className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full blur-xl animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full blur-xl animate-bounce"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 lg:p-10">
        <div className="flex items-center mb-8">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-2xl mr-6 shadow-lg">
            <Calculator className="h-8 w-8 text-white" />
          </div>
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              EMI Calculator
            </h3>
            <p className="text-gray-600 text-lg">Calculate your monthly payments for {vehicleName}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Input Controls */}
          <div className="space-y-8">
            {/* Vehicle Price */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
              <label className="block text-gray-700 font-semibold mb-3 text-lg">Vehicle Price</label>
              <div className="flex items-center">
                <IndianRupee className="h-8 w-8 text-indigo-600 mr-2" />
                <span className="text-4xl font-bold text-indigo-600">{formatCurrency(vehiclePrice)}</span>
              </div>
            </div>

            {/* Down Payment */}
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
              <label className="block text-gray-700 font-semibold mb-4 text-lg">
                Down Payment: {formatCurrency(downPayment)} ({((downPayment / vehiclePrice) * 100).toFixed(0)}%)
              </label>
              <input
                type="range"
                min={vehiclePrice * 0.1}
                max={vehiclePrice * 0.5}
                step={1000}
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full h-3 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-lg appearance-none cursor-pointer slider-thumb"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>{formatCurrency(vehiclePrice * 0.1)}</span>
                <span>{formatCurrency(vehiclePrice * 0.5)}</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
              <label className="block text-gray-700 font-semibold mb-4 text-lg">
                Interest Rate: {interestRate}% per annum
              </label>
              <input
                type="range"
                min={6}
                max={15}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-3 bg-gradient-to-r from-green-200 to-blue-200 rounded-lg appearance-none cursor-pointer slider-thumb"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>6%</span>
                <span>15%</span>
              </div>
            </div>

            {/* Loan Tenure */}
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
              <label className="block text-gray-700 font-semibold mb-4 text-lg">Loan Tenure: {loanTenure} years</label>
              <input
                type="range"
                min={1}
                max={7}
                step={1}
                value={loanTenure}
                onChange={(e) => setLoanTenure(Number(e.target.value))}
                className="w-full h-3 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg appearance-none cursor-pointer slider-thumb"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>1 year</span>
                <span>7 years</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 shadow-xl">
              <div className="flex items-center mb-4">
                <IndianRupee className="h-6 w-6 text-green-600 mr-3" />
                <span className="text-green-700 font-semibold text-lg">Monthly EMI</span>
              </div>
              <div className="text-5xl font-bold text-green-600 mb-2">{formatCurrency(emi)}</div>
              <p className="text-green-600 text-sm">Per month for {loanTenure} years</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200 shadow-lg">
              <div className="flex items-center mb-3">
                <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-blue-700 font-semibold">Total Amount Payable</span>
              </div>
              <div className="text-3xl font-bold text-blue-600">{formatCurrency(totalAmount + downPayment)}</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200 shadow-lg">
              <div className="flex items-center mb-3">
                <Calendar className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-purple-700 font-semibold">Total Interest</span>
              </div>
              <div className="text-3xl font-bold text-purple-600">{formatCurrency(totalInterest)}</div>
            </div>

            {/* Payment Breakdown */}
            <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
              <h4 className="text-gray-800 font-bold mb-4 text-lg">Payment Breakdown</h4>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Loan Amount:</span>
                  <span className="font-semibold text-gray-800">{formatCurrency(loanAmount)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Down Payment:</span>
                  <span className="font-semibold text-gray-800">{formatCurrency(downPayment)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Processing Fee (Est.):</span>
                  <span className="font-semibold text-gray-800">{formatCurrency(loanAmount * 0.01)}</span>
                </div>
                <div className="border-t border-gray-300 pt-2">
                  <div className="flex justify-between text-gray-800 font-bold">
                    <span>Total Cost:</span>
                    <span>{formatCurrency(totalAmount + downPayment + loanAmount * 0.01)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-6 rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-xl flex items-center justify-center space-x-3 text-lg"
            >
              <Phone className="h-6 w-6" />
              <span>Interested? Make a Call</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default EMICalculator
