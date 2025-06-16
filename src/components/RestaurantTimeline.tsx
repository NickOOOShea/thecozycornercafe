'use client'

import { motion } from 'framer-motion'
import { Clock, Calendar, Star } from 'lucide-react'

const timeline = [
  {
    year: '1985',
    title: 'The Beginning',
    description: 'Sarah and Mike Thompson open The Cozy Corner Cafe with just 10 tables and a dream.',
    icon: Star,
  },
  {
    year: '1992',
    title: 'First Expansion',
    description: 'Added the dining room extension, doubling our seating capacity.',
    icon: Calendar,
  },
  {
    year: '2001',
    title: 'Next Generation',
    description: 'Their daughter Jennifer joins the business, bringing fresh ideas while keeping traditions.',
    icon: Clock,
  },
  {
    year: '2010',
    title: 'Community Recognition',
    description: 'Named "Best Comfort Food" by Clarksburg Exponent for the first time.',
    icon: Star,
  },
  {
    year: '2020',
    title: 'Adapting & Thriving',
    description: 'Introduced takeout service and kept serving our community through challenging times.',
    icon: Calendar,
  },
  {
    year: 'Today',
    title: 'Still Going Strong',
    description: 'Three generations working together, serving the same great food with the same warm hospitality.',
    icon: Clock,
  },
]

export default function RestaurantTimeline() {
  return (
    <section className="py-16 bg-mountain-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-mountain-green-900 mb-4">
            Our Journey Through the Years
          </h2>
          <p className="text-lg text-mountain-green-700 max-w-2xl mx-auto">
            From humble beginnings to a Clarksburg institution, 
            here's how The Cozy Corner Cafe has grown over nearly four decades.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-barn-red-200" />

          {/* Timeline items */}
          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className="w-1/2" />
                  
                  {/* Icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-barn-red-600 rounded-full flex items-center justify-center z-10">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <p className="text-barn-red-600 font-bold mb-2">{item.year}</p>
                      <h3 className="font-display font-bold text-xl text-mountain-green-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-mountain-green-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}