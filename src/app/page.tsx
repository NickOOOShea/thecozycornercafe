'use client'

import Hero from '@/components/Hero'
import MenuPreview from '@/components/MenuPreview'
import AboutPreview from '@/components/AboutPreview'
import HoursDisplay from '@/components/HoursDisplay'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import SeasonalMessage from '@/components/SeasonalMessage'
import Newsletter from '@/components/Newsletter'
import RestaurantFeatures from '@/components/RestaurantFeatures'
import DailySpecials from '@/components/DailySpecials'

export default function Home() {
  return (
    <>
      <AnnouncementBanner />
      <Hero />
      <SeasonalMessage />
      <DailySpecials />
      <MenuPreview />
      <RestaurantFeatures />
      <AboutPreview />
      <HoursDisplay />
      <Newsletter />
    </>
  )
}