'use client'

import { motion } from 'framer-motion'
import { Coffee, Award, Clock, Phone, UtensilsCrossed } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center hero-pattern overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90" />
        <div className="w-full h-full bg-gradient-to-br from-barn-red-50 via-autumn-orange-50 to-soil-brown-50" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-autumn-orange-200 rounded-full filter blur-3xl opacity-30 animate-float" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-barn-red-200 rounded-full filter blur-3xl opacity-30 animate-float animation-delay-400" />

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="w-6 h-6 text-barn-red-600" />
              <span className="text-barn-red-700 font-semibold">Serving Since 1952</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-mountain-green-900">
              Mountain View
              <span className="text-gradient block">Diner</span>
            </h1>

            <p className="text-xl text-mountain-green-700 mb-8 leading-relaxed">
              Home-cooked comfort food served with a smile. Three generations of serving 
              hearty mountain meals to our community. Everything made from scratch daily.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/menu" className="btn-primary inline-flex items-center justify-center">
                <UtensilsCrossed className="w-5 h-5 mr-2" />
                View Our Menu
              </Link>
              
              <a href="tel:3045551234" className="btn-secondary inline-flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call for Takeout
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <div className="flex items-center space-x-2 text-mountain-green-600">
                <Award className="w-5 h-5" />
                <span className="text-sm">Best Breakfast in Preston County</span>
              </div>
              <div className="flex items-center space-x-2 text-mountain-green-600">
                <Clock className="w-5 h-5" />
                <span className="text-sm">Open 7 Days a Week</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Image Area */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden mountain-shadow">
              {/* Placeholder for hero image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-barn-red-100 to-autumn-orange-100">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <UtensilsCrossed className="w-16 h-16 text-barn-red-400 mx-auto mb-4" />
                    <p className="text-barn-red-600">Diner Hero Image</p>
                  </div>
                </div>
              </div>
              
              {/* Overlay Badge */}
              <div className="absolute top-4 right-4 bg-barn-red-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                Open Now!
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-xl p-4 max-w-[200px]"
            >
              <p className="text-sm font-semibold text-mountain-green-800">Today's Special:</p>
              <p className="text-barn-red-600 font-bold">Chicken & Dumplings - $13.99</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}