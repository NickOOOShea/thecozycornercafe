'use client'

import { Search, Filter, Check } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

interface Category {
  id: string
  name: string
  count: number
  icon?: LucideIcon
}

interface MenuFiltersProps {
  categories: Category[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  showOnlyAvailable: boolean
  onAvailabilityChange: (show: boolean) => void
  searchTerm: string
  onSearchChange: (term: string) => void
}

export default function MenuFilters({
  categories,
  selectedCategory,
  onCategoryChange,
  showOnlyAvailable,
  onAvailabilityChange,
  searchTerm,
  onSearchChange
}: MenuFiltersProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Filter className="w-5 h-5 text-barn-red-600" />
        <h2 className="font-display font-bold text-xl text-mountain-green-900">
          Filter Menu
        </h2>
      </div>

      {/* Search */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-mountain-green-700 mb-2">
          Search
        </label>
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search menu items..."
            className="w-full pl-10 pr-4 py-2 border-2 border-mountain-green-200 rounded-lg focus:outline-none focus:border-barn-red-500 transition-colors"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-mountain-green-400" />
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-mountain-green-700 mb-3">
          Categories
        </h3>
        <div className="space-y-2">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center justify-between ${
                  selectedCategory === category.id
                    ? 'bg-barn-red-100 text-barn-red-800'
                    : 'hover:bg-gray-50 text-mountain-green-600'
                }`}
              >
                <div className="flex items-center space-x-2">
                  {Icon && <Icon className="w-4 h-4" />}
                  <span className="font-medium">{category.name}</span>
                </div>
                <span className="text-sm">({category.count})</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Availability Filter */}
      <div className="border-t pt-6">
        <label className="flex items-center space-x-3 cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              checked={showOnlyAvailable}
              onChange={(e) => onAvailabilityChange(e.target.checked)}
              className="sr-only"
            />
            <div className={`w-5 h-5 rounded border-2 transition-colors ${
              showOnlyAvailable
                ? 'bg-barn-red-600 border-barn-red-600'
                : 'bg-white border-mountain-green-300'
            }`}>
              {showOnlyAvailable && (
                <Check className="w-3 h-3 text-white absolute top-0.5 left-0.5" />
              )}
            </div>
          </div>
          <span className="text-mountain-green-700 font-medium">
            Show only available items
          </span>
        </label>
      </div>

      {/* Clear Filters */}
      {(selectedCategory !== 'all' || searchTerm || showOnlyAvailable) && (
        <button
          onClick={() => {
            onCategoryChange('all')
            onSearchChange('')
            onAvailabilityChange(false)
          }}
          className="mt-6 w-full text-center text-barn-red-600 hover:text-barn-red-700 font-medium underline"
        >
          Clear all filters
        </button>
      )}
    </div>
  )
}