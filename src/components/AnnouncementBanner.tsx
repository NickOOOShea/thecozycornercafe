'use client'

import { useState, useEffect } from 'react'
import { X, AlertCircle, Info } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import announcementsData from '@/content/announcements.json'

type AnnouncementType = 'info' | 'warning' | 'urgent'

type Announcement = {
  id: number
  title: string
  content: string
  startDate: string
  endDate: string
  priority: string
  type?: AnnouncementType
}

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [currentAnnouncements, setCurrentAnnouncements] = useState<Announcement[]>([])
  const [displayIndex, setDisplayIndex] = useState(0)

  useEffect(() => {
    // Filter active announcements based on date
    const now = new Date()
    const active = announcementsData.filter((announcement: any) => {
      const start = new Date(announcement.startDate)
      const end = new Date(announcement.endDate)
      return now >= start && now <= end
    }).sort((a: any, b: any) => {
      // Sort by priority (high > normal > low)
      const priorityOrder = { high: 3, normal: 2, low: 1 }
      return (priorityOrder[b.priority as keyof typeof priorityOrder] || 0) - 
             (priorityOrder[a.priority as keyof typeof priorityOrder] || 0)
    })
    
    setCurrentAnnouncements(active)
  }, [])

  // Rotate through announcements if multiple
  useEffect(() => {
    if (currentAnnouncements.length > 1) {
      const interval = setInterval(() => {
        setDisplayIndex((prev) => (prev + 1) % currentAnnouncements.length)
      }, 5000) // Change every 5 seconds
      return () => clearInterval(interval)
    }
  }, [currentAnnouncements.length])

  if (currentAnnouncements.length === 0 || !isVisible) return null

  const announcement = currentAnnouncements[displayIndex]

  const getAnnouncementStyles = () => {
    // Map priority to type for styling
    const typeMap = {
      high: 'urgent',
      normal: 'warning',
      low: 'info'
    }
    const type = announcement.type || typeMap[announcement.priority as keyof typeof typeMap] || 'info'
    
    switch (type) {
      case 'urgent':
        return {
          bg: 'bg-barn-red-600',
          text: 'text-white',
          icon: <AlertCircle className="w-5 h-5" />
        }
      case 'warning':
        return {
          bg: 'bg-autumn-orange-500',
          text: 'text-white',
          icon: <AlertCircle className="w-5 h-5" />
        }
      default:
        return {
          bg: 'bg-mountain-green-600',
          text: 'text-white',
          icon: <Info className="w-5 h-5" />
        }
    }
  }

  const styles = getAnnouncementStyles()

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key={announcement.id}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`${styles.bg} ${styles.text} relative overflow-hidden`}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center py-3 relative">
              {/* Icon */}
              <div className="flex items-center space-x-3">
                {styles.icon}
                <div className="text-sm md:text-base font-medium text-center">
                  {announcement.title && (
                    <span className="font-bold mr-2">{announcement.title}:</span>
                  )}
                  {announcement.content}
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsVisible(false)}
                className="absolute right-0 p-1 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close announcement"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)`
            }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}