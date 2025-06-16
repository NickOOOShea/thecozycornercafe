'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, UtensilsCrossed, Clock, Info, Home, MapPin } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Restaurant business hours configuration
const BUSINESS_HOURS = {
  monday: { open: '06:00', close: '21:00' },
  tuesday: { open: '06:00', close: '21:00' },
  wednesday: { open: '06:00', close: '21:00' },
  thursday: { open: '06:00', close: '21:00' },
  friday: { open: '06:00', close: '22:00' },
  saturday: { open: '07:00', close: '22:00' },
  sunday: { open: '07:00', close: '20:00' }
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [businessStatus, setBusinessStatus] = useState({ isOpen: false, text: 'Closed' })

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/menu', label: 'Menu', icon: UtensilsCrossed },
    { href: '/about', label: 'About', icon: Info },
    { href: '/contact', label: 'Contact', icon: Phone },
  ]

  // Function to check if restaurant is currently open
  const checkBusinessHours = () => {
    const now = new Date()
    const dayName = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase()
    const currentTime = now.toTimeString().slice(0, 5) // Get HH:MM format
    
    const todayHours = BUSINESS_HOURS[dayName as keyof typeof BUSINESS_HOURS]
    
    if (todayHours) {
      const isCurrentlyOpen = currentTime >= todayHours.open && currentTime < todayHours.close
      
      if (isCurrentlyOpen) {
        setBusinessStatus({ 
          isOpen: true, 
          text: `Open until ${formatTime(todayHours.close)}` 
        })
      } else if (currentTime < todayHours.open) {
        setBusinessStatus({ 
          isOpen: false, 
          text: `Opens at ${formatTime(todayHours.open)}` 
        })
      } else {
        // Get tomorrow's opening time
        const tomorrow = new Date(now)
        tomorrow.setDate(tomorrow.getDate() + 1)
        const tomorrowName = tomorrow.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase()
        const tomorrowHours = BUSINESS_HOURS[tomorrowName as keyof typeof BUSINESS_HOURS]
        
        setBusinessStatus({ 
          isOpen: false, 
          text: `Closed • Opens ${tomorrowName} at ${formatTime(tomorrowHours.open)}` 
        })
      }
    }
  }

  // Format time from 24h to 12h format
  const formatTime = (time: string) => {
    const [hour, minute] = time.split(':').map(Number)
    const period = hour >= 12 ? 'PM' : 'AM'
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
    return `${displayHour}${minute > 0 ? `:${minute.toString().padStart(2, '0')}` : ''} ${period}`
  }

  // Check business hours on mount and every minute
  useEffect(() => {
    checkBusinessHours()
    const interval = setInterval(checkBusinessHours, 60000) // Update every minute
    
    return () => clearInterval(interval)
  }, [])

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-barn-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">CC</span>
            </div>
            <div>
              <h1 className="font-display font-bold text-xl text-mountain-green-800">
                The Cozy Corner Cafe
              </h1>
              <p className="text-xs text-barn-red-600">Since 1985</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-2 text-mountain-green-700 hover:text-mountain-green-900 transition-colors"
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
            
            {/* Call for Takeout Button - Only show when open */}
            {businessStatus.isOpen && (
              <a
                href="tel:304-555-0123"
                className="flex items-center space-x-2 px-4 py-2 bg-barn-red-600 text-white rounded-full hover:bg-barn-red-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">Call for Takeout</span>
              </a>
            )}
            
            {/* Hours Badge */}
            <div className="flex items-center space-x-2">
              <Clock className={`w-4 h-4 ${businessStatus.isOpen ? 'text-green-600' : 'text-red-600'}`} />
              <span className={`text-sm font-medium ${businessStatus.isOpen ? 'text-green-600' : 'text-red-600'}`}>
                {businessStatus.text}
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-mountain-green-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-mountain-green-100"
            >
              <div className="py-4 space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-2 text-mountain-green-700 hover:bg-mountain-green-50 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
                
                {/* Mobile Call Button - Only show when open */}
                {businessStatus.isOpen && (
                  <a
                    href="tel:304-555-0123"
                    className="flex items-center space-x-3 px-4 py-2 mx-4 bg-barn-red-600 text-white rounded-lg hover:bg-barn-red-700 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">Call for Takeout</span>
                  </a>
                )}
                
                {/* Mobile Hours Display */}
                <div className={`px-4 py-2 rounded-lg mx-4 ${businessStatus.isOpen ? 'bg-green-50' : 'bg-red-50'}`}>
                  <div className={`flex items-center space-x-2 ${businessStatus.isOpen ? 'text-green-700' : 'text-red-700'}`}>
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">{businessStatus.text}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}