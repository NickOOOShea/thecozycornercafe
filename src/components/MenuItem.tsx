'use client'

import { DollarSign, Star, Info, Clock, Flame } from 'lucide-react'

interface MenuItemProps {
  item: {
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
    addOns?: string[]
    sides?: string[]
    note?: string
  }
}

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <div className="menu-item-card group h-full flex flex-col">
      {/* Header with name and price */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-grow">
            <h3 className="font-display font-bold text-xl text-mountain-green-900 mb-1 flex items-center">
              {item.name}
              {item.featured && (
                <Star className="inline-block w-4 h-4 ml-2 text-autumn-orange-500 fill-current" />
              )}
              {!item.available && (
                <span className="ml-2 text-sm font-normal text-barn-red-600">(86'd)</span>
              )}
            </h3>
            
            {item.description && (
              <p className="text-mountain-green-600 text-sm leading-relaxed">
                {item.description}
              </p>
            )}
          </div>
          
          <div className="ml-4 text-right">
            <div className="text-2xl font-bold text-barn-red-600">
              ${item.price.toFixed(2)}
            </div>
          </div>
        </div>

        {/* Dietary tags */}
        {item.dietary && item.dietary.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {item.dietary.map((diet) => (
              <span
                key={diet}
                className="text-xs px-2 py-1 bg-mountain-green-100 text-mountain-green-700 rounded-full"
              >
                {diet}
              </span>
            ))}
          </div>
        )}

        {/* Customization options */}
        {(item.customization || item.addOns || item.sides) && (
          <div className="mt-3 space-y-1 text-xs text-mountain-green-600">
            {item.customization && (
              <p className="flex items-start">
                <Info className="w-3 h-3 mr-1 mt-0.5 flex-shrink-0" />
                {item.customization}
              </p>
            )}
            {item.addOns && (
              <p>Add-ons available: {item.addOns.join(', ')}</p>
            )}
            {item.sides && (
              <p>Served with: {item.sides.join(', ')}</p>
            )}
          </div>
        )}

        {/* Special note */}
        {item.note && (
          <p className="mt-3 text-xs text-sky-blue-600 italic flex items-center">
            {item.note.includes('spicy') && <Flame className="w-3 h-3 mr-1" />}
            {item.note}
          </p>
        )}

        {/* Category-specific indicators */}
        {item.category === 'breakfast' && (
          <div className="mt-3 text-xs text-autumn-orange-600 flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            Served until 11 AM
          </div>
        )}
      </div>
    </div>
  )
}