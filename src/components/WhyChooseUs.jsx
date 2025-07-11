"use client"
import { motion } from "framer-motion"
import { Users, Award, Shield } from "lucide-react"

const WhyChooseUs = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Our experienced professionals provide personalized service and expert advice for every customer.",
      color: "from-blue-100 to-blue-200",
      iconColor: "text-blue-600",
      hoverColor: "group-hover:text-blue-600",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description:
        "Every vehicle undergoes rigorous inspection to ensure the highest quality and reliability standards.",
      color: "from-green-100 to-green-200",
      iconColor: "text-green-600",
      hoverColor: "group-hover:text-green-600",
    },
    {
      icon: Shield,
      title: "Trusted Service",
      description:
        "With over 10 years in business, we've built a reputation for honesty, transparency, and customer satisfaction.",
      color: "from-purple-100 to-purple-200",
      iconColor: "text-purple-600",
      hoverColor: "group-hover:text-purple-600",
    },
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose AutoHub?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in finding the perfect vehicle with unmatched service and quality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                initial={{
                  x: index === 0 ? -100 : index === 1 ? 0 : 100,
                  y: index === 1 ? 100 : 0,
                  opacity: 0,
                }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`bg-gradient-to-br ${feature.color} w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300`}
                >
                  <IconComponent className={`h-12 w-12 ${feature.iconColor}`} />
                </motion.div>
                <h3 className={`text-2xl font-semibold mb-4 ${feature.hoverColor} transition-colors duration-300`}>
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
