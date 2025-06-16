'use client'

import { useState, useEffect } from 'react'
import { X, AlertCircle, Info } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type AnnouncementType = 'info' | 'warning' | 'urgent'

type Announcement = {
  active: boolean
  message: string
  type: AnnouncementType
  expiresAt: string
  createdAt: string
  id: string
}

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [announcement, setAnnouncement] = useState<Announcement | null>(null)

  useEffect(() => {
    // In production, this would fetch from the announcements.json file
    // For now, we'll use a sample announcement
    const sampleAnnouncement: Announcement = {
      active: true,
      message: "Fresh strawberries now available! First come, first served - limited quantities.",
      type: "info", // info, warning, urgent
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
      createdAt: new Date().toISOString(),
      id: "announcement-1"
    }

    // Check if announcement is still valid
    if (sampleAnnouncement.active && new Date(sampleAnnouncement.expiresAt) > new Date()) {
      setAnnouncement(sampleAnnouncement)
    }
  }, [])

  if (!announcement || !isVisible) return null

  const getAnnouncementStyles = () => {
    switch (announcement.type) {
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
    <AnimatePresence>
      {isVisible && (
        <motion.div
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
                <p className="text-sm md:text-base font-medium text-center">
                  {announcement.message}
                </p>
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