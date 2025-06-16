'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, Calendar, AlertCircle, CheckCircle, Coffee, Utensils, Moon } from 'lucide-react'
import hoursData from '@/content/hours.json'

type DayName = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'

export default function HoursDisplay() {
  const [currentDay, setCurrentDay] = useState<DayName>('monday')
  const [isOpen, setIsOpen] = useState(false)
  const [currentMealService, setCurrentMealService] = useState<string>('')

  useEffect(() => {
    // Determine current day and if open
    const now = new Date()
    const dayNames: DayName[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    const today = dayNames[now.getDay()]
    setCurrentDay(today)

    // Check if currently open
    const currentHour = now.getHours()
    const currentMinute = now.getMinutes()
    const currentTime = currentHour + currentMinute / 60
    
    const todayHours = hoursData.regular[today]
    if (!todayHours.closed && todayHours.open && todayHours.close) {
      // Parse time strings
      const parseTime = (timeStr: string) => {
        const [time, period] = timeStr.split(' ')
        const [hours, minutes] = time.split(':').map(Number)
        let hour = hours
        if (period === 'PM' && hours !== 12) hour += 12
        if (period === 'AM' && hours === 12) hour = 0
        return hour + (minutes || 0) / 60
      }
      
      const openTime = parseTime(todayHours.open)
      const closeTime = parseTime(todayHours.close)
      
      setIsOpen(currentTime >= openTime && currentTime < closeTime)
      
      // Determine current meal service
      if (isOpen) {
        if (currentTime < parseTime(hoursData.special.lunch.start)) {
          setCurrentMealService('Breakfast')
        } else if (currentTime < parseTime(hoursData.special.dinner.start)) {
          setCurrentMealService('Lunch')
        } else {
          setCurrentMealService('Dinner')
        }
      }
    }
  }, [isOpen])

  const dayOrder: DayName[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-barn-red-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center space-x-2 mb-4">
              <Clock className="w-6 h-6 text-barn-red-600" />
              <span className="text-barn-red-600 font-semibold uppercase tracking-wide">Restaurant Hours</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-mountain-green-900 mb-4">
              When We're Serving
            </h2>
            
            {/* Current Status */}
            <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${
              isOpen ? 'bg-mountain-green-100 text-mountain-green-800' : 'bg-barn-red-100 text-barn-red-800'
            }`}>
              {isOpen ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Open Now - Serving {currentMealService}</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5" />
                  <span className="font-semibold">Closed Now</span>
                </>
              )}
            </div>
          </div>

          {/* Hours Grid */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            {/* Meal Service Times */}
            <div className="mb-8 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-sky-blue-50 rounded-lg">
                <Coffee className="w-6 h-6 text-sky-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-mountain-green-800">Breakfast</h4>
                <p className="text-sm text-mountain-green-600">{hoursData.special.breakfast.times}</p>
              </div>
              <div className="text-center p-4 bg-autumn-orange-50 rounded-lg">
                <Utensils className="w-6 h-6 text-autumn-orange-600 mx-auto mb-2" />
                <h4 className="font-semibold text-mountain-green-800">Lunch</h4>
                <p className="text-sm text-mountain-green-600">{hoursData.special.lunch.start} - {hoursData.special.lunch.end}</p>
              </div>
              <div className="text-center p-4 bg-barn-red-50 rounded-lg">
                <Moon className="w-6 h-6 text-barn-red-600 mx-auto mb-2" />
                <h4 className="font-semibold text-mountain-green-800">Dinner</h4>
                <p className="text-sm text-mountain-green-600">{hoursData.special.dinner.start} - {hoursData.special.dinner.end}</p>
              </div>
            </div>

            {/* Daily Hours */}
            <div className="space-y-3">
              {dayOrder.map((day) => {
                const dayHours = hoursData.regular[day]
                const isToday = day === currentDay
                
                return (
                  <motion.div
                    key={day}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`flex justify-between items-center py-3 px-4 rounded-lg transition-colors ${
                      isToday ? 'bg-barn-red-50 border-2 border-barn-red-200' : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {isToday && <Calendar className="w-5 h-5 text-barn-red-600" />}
                      <span className={`capitalize font-medium ${
                        isToday ? 'text-barn-red-800' : 'text-mountain-green-700'
                      }`}>
                        {day}
                        {isToday && <span className="ml-2 text-sm">(Today)</span>}
                      </span>
                    </div>
                    
                    <span className={`font-medium ${
                      dayHours.closed ? 'text-barn-red-600' : 'text-mountain-green-600'
                    }`}>
                      {dayHours.closed ? 'Closed' : `${dayHours.open} - ${dayHours.close}`}
                    </span>
                  </motion.div>
                )
              })}
            </div>

            {/* Holiday Hours */}
            {hoursData.holidays && hoursData.holidays.length > 0 && (
              <div className="mt-6 p-4 bg-autumn-orange-50 rounded-lg border border-autumn-orange-200">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-autumn-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-autumn-orange-800 mb-1">Holiday Hours</p>
                    {hoursData.holidays.map((holiday, index) => (
                      <p key={index} className="text-sm text-autumn-orange-700">
                        {holiday.name} ({new Date(holiday.date).toLocaleDateString()}) - 
                        {holiday.hours.closed ? ' Closed' : ` ${holiday.hours.open} - ${holiday.hours.close}`}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Kitchen Close Notice */}
            <div className="mt-6 text-center">
              <p className="text-sm text-mountain-green-600">
                Kitchen closes 30 minutes before restaurant closing time
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}