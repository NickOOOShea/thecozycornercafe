'use client'

import Link from 'next/link'
import { Phone, MapPin, Mail, Facebook, Instagram, Clock } from 'lucide-react'
import hoursData from '@/content/hours.json'
import restaurantInfo from '@/content/restaurant-info.json'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  // Format hours for display
  const formatHours = (day: { open: string; close: string; closed: boolean }) => {
    if (day.closed) return 'Closed'
    return `${day.open} - ${day.close}`
  }

  return (
    <footer className="bg-mountain-green-800 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Visit Us</h3>
            <div className="space-y-3">
              <a 
                href={`https://maps.google.com/maps?daddr=${restaurantInfo.address.street},+${restaurantInfo.address.city},+${restaurantInfo.address.state}+${restaurantInfo.address.zip}`}
                className="flex items-start space-x-3 hover:text-autumn-orange-300 transition-colors"
              >
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  {restaurantInfo.address.street}<br />
                  {restaurantInfo.address.city}, {restaurantInfo.address.state} {restaurantInfo.address.zip}<br />
                  {restaurantInfo.address.county} County
                </span>
              </a>
              
              <a 
                href={`tel:${restaurantInfo.phone.replace(/\D/g, '')}`}
                className="flex items-center space-x-3 hover:text-autumn-orange-300 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{restaurantInfo.phone}</span>
              </a>
              
              <a 
                href={`mailto:${restaurantInfo.email}`}
                className="flex items-center space-x-3 hover:text-autumn-orange-300 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{restaurantInfo.email}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link href="/menu" className="block hover:text-autumn-orange-300 transition-colors">
                Our Menu
              </Link>
              <Link href="/about" className="block hover:text-autumn-orange-300 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="block hover:text-autumn-orange-300 transition-colors">
                Contact & Directions
              </Link>
              <a href="#newsletter" className="block hover:text-autumn-orange-300 transition-colors">
                Newsletter Sign Up
              </a>
            </nav>
            
            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {restaurantInfo.social.facebook && (
                  <a 
                    href={restaurantInfo.social.facebook}
                    aria-label="Facebook"
                    className="w-10 h-10 bg-mountain-green-700 rounded-full flex items-center justify-center hover:bg-mountain-green-600 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                )}
                {restaurantInfo.social.instagram && (
                  <a 
                    href={restaurantInfo.social.instagram}
                    aria-label="Instagram"
                    className="w-10 h-10 bg-mountain-green-700 rounded-full flex items-center justify-center hover:bg-mountain-green-600 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Restaurant Hours */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Restaurant Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>{formatHours(hoursData.regular.monday)}</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>{formatHours(hoursData.regular.saturday)}</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>{formatHours(hoursData.regular.sunday)}</span>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-mountain-green-700 rounded-lg">
              <p className="text-sm flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Kitchen closes 30 min before closing</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-mountain-green-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-mountain-green-300">
              © {currentYear} {restaurantInfo.name}. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-mountain-green-400">Powered by</span>
              <a 
                href="https://hollerbuilt.com" 
                className="text-autumn-orange-400 hover:text-autumn-orange-300 transition-colors font-semibold"
              >
                HollerBuilt
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
