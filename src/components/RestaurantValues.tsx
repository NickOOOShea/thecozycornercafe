'use client'

import { motion } from 'framer-motion'
import { Home, Heart, Users, Clock, Utensils } from 'lucide-react'

type ColorName = 'mountain-green' | 'autumn-orange' | 'sky-blue' | 'barn-red'

export default function RestaurantValues() {
  const values = [
    {
      icon: <Home className="w-12 h-12" />,
      title: 'Family Tradition',
      description: 'Three generations of the Johnson family serving authentic mountain recipes passed down through the years.',
      color: 'mountain-green' as ColorName
    },
    {
      icon: <Utensils className="w-12 h-12" />,
      title: 'Made From Scratch',
      description: 'Everything from our biscuits to our pies is made fresh daily. No shortcuts, no compromises on quality.',
      color: 'autumn-orange' as ColorName
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Community Gathering',
      description: 'More than a diner - we\'re where neighbors become friends over coffee and where memories are made.',
      color: 'sky-blue' as ColorName
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Service With Heart',
      description: 'Every guest is family. We remember your usual order and always have time for a friendly chat.',
      color: 'barn-red' as ColorName
    }
  ]

  const getColorClasses = (color: ColorName) => {
    const colorMap: Record<ColorName, { bg: string; text: string; hover: string }> = {
      'mountain-green': {
        bg: 'bg-mountain-green-100',
        text: 'text-mountain-green-600',
        hover: 'group-hover:bg-mountain-green-600'
      },
      'autumn-orange': {
        bg: 'bg-autumn-orange-100',
        text: 'text-autumn-orange-600',
        hover: 'group-hover:bg-autumn-orange-600'
      },
      'sky-blue': {
        bg: 'bg-sky-blue-100',
        text: 'text-sky-blue-600',
        hover: 'group-hover:bg-sky-blue-600'
      },
      'barn-red': {
        bg: 'bg-barn-red-100',
        text: 'text-barn-red-600',
        hover: 'group-hover:bg-barn-red-600'
      }
    }
    return colorMap[color]
  }

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-mountain-green-900 mb-4">
            What Makes Us Special
          </h2>
          <p className="text-lg text-mountain-green-700 max-w-2xl mx-auto">
            These aren't just words - they're the principles that have guided our 
            diner for over 70 years.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const colors = getColorClasses(value.color)
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`inline-flex items-center justify-center w-24 h-24 ${colors.bg} ${colors.text} rounded-full mb-6 ${colors.hover} group-hover:text-white transition-all duration-300 transform group-hover:scale-110`}>
                  {value.icon}
                </div>
                
                <h3 className="font-display font-bold text-xl text-mountain-green-900 mb-3">
                  {value.title}
                </h3>
                
                <p className="text-mountain-green-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
