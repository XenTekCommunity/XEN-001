"use client"

import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Car,
  Users,
  Award,
  Shield,
  Heart,
  Star,
  CheckCircle,
  TrendingUp,
  Phone,
  Target,
  Eye,
  Globe,
  Handshake,
  ArrowRight,
  Play,
} from "lucide-react"
import { Link } from "react-router-dom"

const About = () => {
  const [activeTab, setActiveTab] = useState("mission")
  const heroRef = useRef(null)
  const statsRef = useRef(null)
  const teamRef = useRef(null)
  const valuesRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true })
  const isStatsInView = useInView(statsRef, { once: true })
  const isTeamInView = useInView(teamRef, { once: true })
  const isValuesInView = useInView(valuesRef, { once: true })

  const stats = [
    { icon: Car, number: "10,000+", label: "Vehicles Sold", color: "from-blue-500 to-blue-600" },
    { icon: Users, number: "50,000+", label: "Happy Customers", color: "from-green-500 to-green-600" },
    { icon: Award, number: "15+", label: "Years Experience", color: "from-purple-500 to-purple-600" },
    { icon: Star, number: "4.9", label: "Customer Rating", color: "from-yellow-500 to-yellow-600" },
  ]

  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description:
        "We believe in complete transparency in all our dealings, ensuring our customers make informed decisions.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Our customers are at the heart of everything we do. Their satisfaction is our primary goal.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Every vehicle undergoes rigorous quality checks to ensure reliability and performance.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We continuously innovate to provide the best car buying experience with cutting-edge technology.",
      color: "from-purple-500 to-indigo-500",
    },
  ]

  const team = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
      description: "15+ years in automotive industry with a vision to revolutionize car buying experience.",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Priya Sharma",
      position: "Head of Operations",
      image: "/placeholder.svg?height=300&width=300",
      description: "Expert in streamlining operations and ensuring customer satisfaction across all touchpoints.",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Amit Patel",
      position: "Technical Director",
      image: "/placeholder.svg?height=300&width=300",
      description: "Leading our digital transformation with innovative solutions and cutting-edge technology.",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Sneha Reddy",
      position: "Customer Experience Manager",
      image: "/placeholder.svg?height=300&width=300",
      description: "Dedicated to creating exceptional customer journeys and building lasting relationships.",
      social: { linkedin: "#", twitter: "#" },
    },
  ]

  const milestones = [
    { year: "2008", title: "Company Founded", description: "Started with a small showroom and big dreams" },
    { year: "2012", title: "First 1000 Sales", description: "Reached our first major milestone" },
    { year: "2016", title: "Digital Transformation", description: "Launched our online platform" },
    { year: "2020", title: "Multi-City Expansion", description: "Expanded to 5 major cities" },
    { year: "2024", title: "Industry Leader", description: "Became the leading second-hand vehicle platform" },
  ]

  const tabContent = {
    mission: {
      icon: Target,
      title: "Our Mission",
      content:
        "To revolutionize the second-hand vehicle market by providing transparent, reliable, and customer-centric services that make car buying and selling a delightful experience for everyone.",
    },
    vision: {
      icon: Eye,
      title: "Our Vision",
      content:
        "To become India's most trusted and preferred platform for second-hand vehicles, setting new standards in quality, transparency, and customer satisfaction.",
    },
    values: {
      icon: Heart,
      title: "Our Values",
      content:
        "We are driven by integrity, innovation, and customer-centricity. Every decision we make is guided by these core values that define who we are.",
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-xl"
        />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-24 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isHeroInView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8 shadow-2xl"
            >
              <Car className="h-10 w-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6"
            >
              About AutoHub
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Transforming the way India buys and sells second-hand vehicles with trust, transparency, and innovation at
              our core.
            </motion.p>

            
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={isStatsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={isStatsInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  className="text-3xl font-bold text-gray-800 mb-2"
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Drives Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our core principles that guide every decision and shape our journey towards excellence.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-full p-2 shadow-lg border">
                {Object.keys(tabContent).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    {tabContent[tab].title}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-xl border text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6"
              >
                {activeTab === "mission" && <Target className="h-8 w-8 text-white" />}
                {activeTab === "vision" && <Eye className="h-8 w-8 text-white" />}
                {activeTab === "values" && <Heart className="h-8 w-8 text-white" />}
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{tabContent[activeTab].title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{tabContent[activeTab].content}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The fundamental beliefs that shape our culture and drive our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${value.color} rounded-full mb-4 shadow-lg`}
                >
                  <value.icon className="h-7 w-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to industry leadership - here's how we've grown over the years.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>

              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-3"
                      >
                        {milestone.year}
                      </motion.div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind AutoHub's success, dedicated to revolutionizing your vehicle buying
              experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isTeamInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <motion.div whileHover={{ scale: 1.05 }} className="relative mb-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>

                <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.description}</p>

                <div className="flex justify-center space-x-3">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={member.social.linkedin}
                    className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-300"
                  >
                    <Users className="h-4 w-4" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={member.social.twitter}
                    className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-colors duration-300"
                  >
                    <Globe className="h-4 w-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 backdrop-blur-sm"
            >
              <Handshake className="h-8 w-8 text-white" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have found their perfect vehicle with AutoHub.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
               <Link to={"/contact"} onClick={() => window.scrollTo(0,0)}>
                Contact Us
                </Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center gap-2"
              >
                <ArrowRight className="h-5 w-5" />
                <Link to={"/vehicles"} onClick={() => window.scrollTo(0,0)}>
                Browse Vehicles
                </Link>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
