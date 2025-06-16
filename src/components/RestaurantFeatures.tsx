'use client'

import { motion } from 'framer-motion'
import { Utensils, Users, Clock, MapPin, Heart, Award } from 'lucide-react'

export default function RestaurantFeatures() {
  const features = [
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Made From Scratch",
      description: "Everything from our biscuits to our pies is made fresh daily in our kitchen."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family Tradition",
      description: "Three generations of the same family serving hearty mountain meals since 1952."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "All-Day Breakfast",
      description: "Craving pancakes at 7 PM? No problem! We serve breakfast all day, every day."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Local Ingredients",
      description: "We source from local farms whenever possible, including Mountain View Farm down the road."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Community Gathering",
      description: "More than a diner - we're where neighbors meet, deals are made, and stories are shared."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Award Winning",
      description: "Voted 'Best Breakfast in Preston County' five years running. Try our famous biscuits!"
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-autumn-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-mountain-green-900 mb-4">
            Why Mountain View Diner?
          </h2>
          <p className="text-lg text-mountain-green-700 max-w-2xl mx-auto">
            We're not just serving food - we're serving up a piece of mountain heritage with every meal.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-barn-red-100 text-barn-red-600 rounded-full mb-4 group-hover:bg-barn-red-600 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              
              <h3 className="font-display font-bold text-xl text-mountain-green-900 mb-2">
                {feature.title}
              </h3>
              
              <p className="text-mountain-green-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}