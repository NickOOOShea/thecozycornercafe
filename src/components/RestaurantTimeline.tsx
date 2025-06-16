'use client'

import { motion } from 'framer-motion'
import { Coffee, Users, Utensils, Award, Home, Heart, Music } from 'lucide-react'

export default function RestaurantTimeline() {
  const milestones = [
    {
      year: '1952',
      title: 'Grand Opening',
      description: 'Earl and Betty Johnson open Mountain View Diner with just 10 tables and a dream.',
      icon: <Home className="w-6 h-6" />
    },
    {
      year: '1968',
      title: 'Local Favorite',
      description: 'Expanded dining room to seat 50. Famous for our 25¢ coffee and homemade pie.',
      icon: <Coffee className="w-6 h-6" />
    },
    {
      year: '1985',
      title: 'Second Generation',
      description: 'Tom and Mary Johnson take over, keeping all the original recipes while adding new favorites.',
      icon: <Heart className="w-6 h-6" />
    },
    {
      year: '1999',
      title: 'Best Breakfast Award',
      description: 'Preston County Times readers vote us "Best Breakfast" - an honor we\'ve won 20+ times since.',
      icon: <Award className="w-6 h-6" />
    },
    {
      year: '2015',
      title: 'Bluegrass Fridays',
      description: 'Started hosting live bluegrass music every Friday night. Now a beloved community tradition.',
      icon: <Music className="w-6 h-6" />
    },
    {
      year: '2024',
      title: 'Modern Convenience',
      description: 'Launched voice-powered menu updates so we can share daily specials instantly.',
      icon: <Utensils className="w-6 h-6" />
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-barn-red-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-mountain-green-900 mb-4">
            Over 70 Years of Mountain Hospitality
          </h2>
          <p className="text-lg text-mountain-green-700 max-w-2xl mx-auto">
            Three generations of serving home-cooked meals and creating memories 
            for our community.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-barn-red-200 -translate-x-1/2" />

            {/* Milestones */}
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="ml-20 md:ml-0">
                    <span className="text-barn-red-600 font-bold text-xl">
                      {milestone.year}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-mountain-green-900 mt-1 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-mountain-green-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-barn-red-600 z-10">
                  {milestone.icon}
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
