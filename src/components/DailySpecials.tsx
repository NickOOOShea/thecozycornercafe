'use client'

import { motion } from 'framer-motion'
import { Calendar, DollarSign, Clock, Star } from 'lucide-react'
import { useEffect, useState } from 'react'
import specialsData from '@/content/daily-specials.json'

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

interface Special {
  day: number
  dayName: string
  name: string
  price: number
  description: string
}

export default function DailySpecials() {
  const [todaySpecial, setTodaySpecial] = useState<Special | null>(null)
  
  useEffect(() => {
    const today = new Date()
    const todayIndex = today.getDay() // 0 = Sunday, 1 = Monday, etc.
    const special = specialsData.dailySpecials.find(s => s.day === todayIndex)
    setTodaySpecial(special || null)
  }, [])

  if (!todaySpecial) return null

  return (
    <section className="py-12 bg-gradient-to-r from-autumn-orange-50 to-barn-red-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <Star className="w-6 h-6 text-autumn-orange-600" />
            <span className="text-autumn-orange-600 font-semibold uppercase tracking-wide">Today's Special</span>
            <Star className="w-6 h-6 text-autumn-orange-600" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-autumn-orange-500 to-barn-red-500 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6" />
                  <h3 className="text-xl font-bold">{todaySpecial.dayName}'s Special</h3>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold"
                >
                  Available Now
                </motion.div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-display font-bold text-mountain-green-900 mb-2">
                    {todaySpecial.name}
                  </h4>
                  <p className="text-mountain-green-700">{todaySpecial.description}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-3xl font-bold text-autumn-orange-600">
                    <DollarSign className="w-6 h-6" />
                    {todaySpecial.price.toFixed(2)}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <a
                  href="/menu"
                  className="btn-secondary text-center"
                >
                  View Full Menu
                </a>
                <a
                  href="tel:3045551234"
                  className="btn-primary text-center"
                >
                  Call to Order
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Week Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-mountain-green-600 mb-4 font-semibold">This Week's Specials</p>
          <div className="flex flex-wrap justify-center gap-3">
            {specialsData.dailySpecials.map((special) => (
              <div
                key={special.day}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  special.day === todaySpecial.day
                    ? 'bg-autumn-orange-500 text-white'
                    : 'bg-white text-mountain-green-700 hover:bg-mountain-green-50'
                }`}
              >
                <span className="font-semibold">{special.dayName.slice(0, 3)}:</span> {special.name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}