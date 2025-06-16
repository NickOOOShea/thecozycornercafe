'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Flower, Snowflake, Leaf, Sun, Soup, Coffee, IceCream, Apple } from 'lucide-react'

type Season = 'spring' | 'summer' | 'fall' | 'winter'

type SeasonalData = {
  season: Season
  icon: React.ReactNode
  message: string
}

export default function SeasonalMessage() {
  const [seasonalData, setSeasonalData] = useState<SeasonalData | null>(null)

  useEffect(() => {
    const currentMonth = new Date().getMonth()
    let season: Season
    let icon: React.ReactNode
    let message: string

    if (currentMonth >= 2 && currentMonth <= 4) {
      season = 'spring'
      icon = <Flower className="w-8 h-8" />
      message = "Fresh spring salads with local greens! Try our strawberry shortcake made with Preston County berries."
    } else if (currentMonth >= 5 && currentMonth <= 7) {
      season = 'summer'
      icon = <IceCream className="w-8 h-8" />
      message = "Beat the heat with our hand-dipped milkshakes and fresh fruit pies. Sweet corn on every plate!"
    } else if (currentMonth >= 8 && currentMonth <= 10) {
      season = 'fall'
      icon = <Apple className="w-8 h-8" />
      message = "Apple pie season is here! Warm up with our hearty soups and hot apple cider."
    } else {
      season = 'winter'
      icon = <Soup className="w-8 h-8" />
      message = "Comfort food season! Daily soup specials and our famous chicken & dumplings to warm you up."
    }

    setSeasonalData({ season, icon, message })
  }, [])

  if (!seasonalData) return null

  const seasonColors: Record<Season, string> = {
    spring: 'from-green-100 to-sky-blue-100 text-mountain-green-800',
    summer: 'from-yellow-100 to-autumn-orange-100 text-autumn-orange-800',
    fall: 'from-autumn-orange-100 to-barn-red-100 text-barn-red-800',
    winter: 'from-sky-blue-100 to-mountain-green-100 text-sky-blue-800'
  }

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`relative rounded-2xl bg-gradient-to-r ${seasonColors[seasonalData.season]} p-8 md:p-12 overflow-hidden`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>

          <div className="relative flex flex-col md:flex-row items-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-6">
            {/* Icon */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="flex-shrink-0"
            >
              {seasonalData.icon}
            </motion.div>

            {/* Message */}
            <div className="flex-grow">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-2 capitalize">
                {seasonalData.season} at the Diner
              </h2>
              <p className="text-lg md:text-xl opacity-90">
                {seasonalData.message}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}