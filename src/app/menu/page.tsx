'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { UtensilsCrossed, Filter, X, Coffee, Utensils, Cake, Salad } from 'lucide-react'
import MenuItem from '@/components/MenuItem'
import MenuFilters from '@/components/MenuFilters'
import AnnouncementBanner from '@/components/AnnouncementBanner'

// Import menu data
import breakfastData from '@/content/menu/breakfast.json'
import lunchDinnerData from '@/content/menu/lunch-dinner.json'
import dessertsData from '@/content/menu/desserts.json'
import sidesData from '@/content/menu/sides.json'

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
  customization?: string
  addOns?: any[]
  sides?: string[]
  note?: string
}

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

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

    // Combine all menu items
    const allItems: MenuItemType[] = [
      ...breakfastData.items.map(item => processItem(item, 'breakfast')),
      ...lunchDinnerData.items.map(item => processItem(item, 'lunch')),
      ...dessertsData.items.map(item => processItem(item, 'dessert')),
      ...sidesData.items.map(item => ({
        ...processItem(item, 'sides'),
        description: item.description || ''
      }))
    ]
    
    setMenuItems(allItems)
    setLoading(false)
  }, [])

  // Calculate categories with counts
  const categories = useMemo(() => {
    const cats = menuItems.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = 0
      }
      if (!showOnlyAvailable || item.available) {
        acc[item.category]++
      }
      return acc
    }, {} as Record<string, number>)

    return [
      { id: 'all', name: 'All Items', count: Object.values(cats).reduce((a, b) => a + b, 0), icon: UtensilsCrossed },
      { id: 'breakfast', name: 'Breakfast', count: cats.breakfast || 0, icon: Coffee },
      { id: 'lunch', name: 'Lunch', count: cats.lunch || 0, icon: Utensils },
      { id: 'dinner', name: 'Dinner', count: cats.dinner || 0, icon: Utensils },
      { id: 'dessert', name: 'Desserts', count: cats.dessert || 0, icon: Cake },
      { id: 'sides', name: 'Sides', count: cats.sides || 0, icon: Salad }
    ]
  }, [menuItems, showOnlyAvailable])

  // Filter menu items
  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
      const matchesAvailability = !showOnlyAvailable || item.available
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (item.description?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false)
      
      return matchesCategory && matchesAvailability && matchesSearch
    })
  }, [menuItems, selectedCategory, showOnlyAvailable, searchTerm])

  return (
    <>
      <AnnouncementBanner />
      
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center justify-center space-x-2 mb-4"
            >
              <UtensilsCrossed className="w-6 h-6 text-barn-red-600" />
              <span className="text-barn-red-600 font-semibold uppercase tracking-wide">
                Our Menu
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-display font-bold text-mountain-green-900 mb-4"
            >
              Mountain Comfort Food
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-mountain-green-700 max-w-2xl mx-auto"
            >
              Everything made from scratch daily. Call ahead for takeout or come on in and 
              enjoy our cozy dining room. All prices include tax.
            </motion.p>
          </div>

          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="btn-secondary w-full flex items-center justify-center"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filter Menu ({filteredItems.length})
            </button>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Desktop Filters */}
            <div className="hidden lg:block">
              <MenuFilters
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                showOnlyAvailable={showOnlyAvailable}
                onAvailabilityChange={setShowOnlyAvailable}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />
            </div>

            {/* Menu Grid */}
            <div className="lg:col-span-3">
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="animate-pulse">
                      <div className="bg-gray-200 rounded-lg h-48" />
                    </div>
                  ))}
                </div>
              ) : filteredItems.length > 0 ? (
                <motion.div
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {filteredItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <MenuItem item={item} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">No menu items found matching your criteria.</p>
                  <button
                    onClick={() => {
                      setSelectedCategory('all')
                      setShowOnlyAvailable(false)
                      setSearchTerm('')
                    }}
                    className="text-mountain-green-600 hover:text-mountain-green-700 font-medium"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Filters Modal */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileFiltersOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="fixed left-0 top-0 h-full w-full max-w-sm bg-white shadow-xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-display font-bold text-mountain-green-900">
                    Filter Menu
                  </h2>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <MenuFilters
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  showOnlyAvailable={showOnlyAvailable}
                  onAvailabilityChange={setShowOnlyAvailable}
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                />
                
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="btn-primary w-full mt-6"
                >
                  Show {filteredItems.length} Items
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}