'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Coffee, Calendar, Heart, ArrowRight } from 'lucide-react'

export default function AboutPreview() {
  return (
    <section className="section-container">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden mountain-shadow">
            {/* Placeholder for diner/family image */}
            <div className="aspect-[4/3] bg-gradient-to-br from-barn-red-100 to-autumn-orange-100">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <Coffee className="w-16 h-16 text-barn-red-400 mx-auto mb-4" />
                  <p className="text-barn-red-600">Diner Interior Photo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Stats */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-xl p-4"
          >
            <div className="flex items-center space-x-3">
              <Calendar className="w-8 h-8 text-barn-red-600" />
              <div>
                <p className="text-2xl font-bold text-mountain-green-800">Since 1952</p>
                <p className="text-sm text-mountain-green-600">Serving Our Community</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <Heart className="w-6 h-6 text-barn-red-600" />
            <span className="text-barn-red-600 font-semibold uppercase tracking-wide">Our Story</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-mountain-green-900 mb-6">
            Where Neighbors
            <span className="text-gradient block">Become Family</span>
          </h2>

          <div className="space-y-4 text-mountain-green-700">
            <p className="text-lg leading-relaxed">
              Mountain View Diner started in 1952 when Grandma Betty decided Preston County 
              needed a place where folks could get a hot meal that tasted like home - because 
              it was made just like home.
            </p>
            
            <p className="leading-relaxed">
              Three generations later, we're still flipping pancakes on the same griddle, 
              still making biscuits from Grandma's recipe, and still greeting customers 
              by name. Some things are worth keeping exactly the way they are.
            </p>
            
            <p className="leading-relaxed">
              This isn't just where you eat - it's where the coffee's always hot, the 
              pie's always fresh, and there's always a friendly face ready to ask how 
              your day's going. That's the Mountain View way.
            </p>
          </div>

          <div className="mt-8">
            <Link 
              href="/about" 
              className="inline-flex items-center space-x-2 text-barn-red-600 hover:text-barn-red-700 font-semibold group"
            >
              <span>Read Our Full Story</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}