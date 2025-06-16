'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Award, Clock, Coffee, Utensils } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every dish is prepared with care, using time-tested recipes passed down through generations.',
  },
  {
    icon: Users,
    title: 'Family Owned',
    description: 'Three generations working together to bring you the best dining experience in Clarksburg.',
  },
  {
    icon: Coffee,
    title: 'Fresh Daily',
    description: 'From our famous biscuits to our homemade pies, everything is made fresh every single day.',
  },
  {
    icon: Clock,
    title: 'Quick Service',
    description: 'Whether you\'re on your lunch break or settling in for dinner, we\'ll have you served promptly.',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Voted "Best Comfort Food" for 14 consecutive years by the Clarksburg Exponent.',
  },
  {
    icon: Utensils,
    title: 'Full Menu',
    description: 'Breakfast, lunch, and dinner - we\'ve got something delicious for every meal of the day.',
  },
]

export default function RestaurantFeatures() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-sky-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-mountain-green-900 mb-4">
            Why Locals Love The Cozy Corner Cafe
          </h2>
          <p className="text-lg text-mountain-green-700 max-w-2xl mx-auto">
            It's more than just great food - it's about creating memories around the table.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-barn-red-100 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-barn-red-600" />
                </div>
                <h3 className="font-display font-bold text-xl text-mountain-green-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-mountain-green-600">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}