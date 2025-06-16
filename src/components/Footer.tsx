'use client'

import Link from 'next/link'
import { Phone, MapPin, Mail, Facebook, Instagram, Clock } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-mountain-green-800 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Visit Us</h3>
            <div className="space-y-3">
              <a 
                href="https://maps.google.com/maps?daddr=123+Main+Street,+Clarksburg,+WV+26301" 
                className="flex items-start space-x-3 hover:text-autumn-orange-300 transition-colors"
              >
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  123 Main Street<br />
                  Clarksburg, WV 26301<br />
                  Harrison County
                </span>
              </a>
              
              <a 
                href="tel:+13045550123" 
                className="flex items-center space-x-3 hover:text-autumn-orange-300 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(304) 555-0123</span>
              </a>
              
              <a 
                href="mailto:hello@cozycornercafe.com" 
                className="flex items-center space-x-3 hover:text-autumn-orange-300 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>hello@cozycornercafe.com</span>
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
                <a 
                  href="https://facebook.com/cozycornercafe" 
                  aria-label="Facebook"
                  className="w-10 h-10 bg-mountain-green-700 rounded-full flex items-center justify-center hover:bg-mountain-green-600 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com/cozycornercafe" 
                  aria-label="Instagram"
                  className="w-10 h-10 bg-mountain-green-700 rounded-full flex items-center justify-center hover:bg-mountain-green-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Restaurant Hours */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Restaurant Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>6:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>7:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>8:00 AM - 3:00 PM</span>
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
              © {currentYear} The Cozy Corner Cafe. All rights reserved.
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