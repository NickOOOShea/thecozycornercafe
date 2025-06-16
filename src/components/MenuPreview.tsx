'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { UtensilsCrossed, Star, Clock, AlertCircle } from 'lucide-react'
import MenuItem from '@/components/MenuItem'

// Import menu data
import breakfastData from '@/content/menu/breakfast.json'
import lunchDinnerData from '@/content/menu/lunch-dinner.json'

type MenuItemType = {
  id: string
  name: string
  description?: string
  price: number
  category: string
  available: boolean
  featured?: boolean
  dietary?: string[]
  image?: string
}

export default function MenuPreview() {
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Helper function to process menu items
    const processItem = (item: any, defaultCategory: string) => ({
      ...item,
      price: typeof item.price === 'string' ? parseFloat(item.price.replace('$', '')) : item.price,
      category: item.category || defaultCategory,
      available: true,
      dietary: [
        ...(item.vegetarian ? ['vegetarian'] : []),
        ...(item.glutenFree ? ['gluten-free'] : []),
        ...(item.spicy ? ['spicy'] : [])
      ]
    })

    // Combine featured items from different categories
    const allItems: MenuItemType[] = [
      ...breakfastData.items.map(item => processItem(item, 'breakfast')),
      ...lunchDinnerData.items.map(item => processItem(item, 'lunch'))
    ]
    
    setMenuItems(allItems)
    setLoading(false)
  }, [])

  const featuredItems = menuItems.filter(item => item.featured && item.available).slice(0, 4)

  return (
    <section className="section-container">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center space-x-2 mb-4"
        >
          <Star className="w-6 h-6 text-autumn-orange-600" />
          <span className="text-autumn-orange-600 font-semibold uppercase tracking-wide">Customer Favorites</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-display font-bold text-mountain-green-900 mb-4"
        >
          Popular Menu Items
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-mountain-green-700 max-w-2xl mx-auto"
        >
          Our most-loved dishes, made fresh daily. Call ahead for takeout or dine in with us!
        </motion.p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 rounded-lg h-48" />
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <MenuItem item={item} />
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/menu" className="btn-primary inline-flex items-center">
              <UtensilsCrossed className="w-5 h-5 mr-2" />
              View Full Menu
            </Link>
            
            <p className="mt-4 text-sm text-mountain-green-600 flex items-center justify-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Kitchen open until 30 minutes before closing</span>
            </p>
          </motion.div>
        </>
      )}
    </section>
  )
}