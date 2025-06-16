'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Clock, Users, Award, ArrowRight } from 'lucide-react'

export default function AboutPreview() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-mountain-green-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-mountain-green-900 mb-6">
              Welcome to The Cozy Corner Cafe
            </h2>
            
            <p className="text-lg text-mountain-green-700 mb-6 leading-relaxed">
              Since 1985, we've been serving comfort food that warms the heart and 
              satisfies the soul. Our family-owned restaurant has become a beloved 
              gathering place for Clarksburg residents and visitors alike.
            </p>
            
            <p className="text-lg text-mountain-green-700 mb-8 leading-relaxed">
              From our famous country breakfast to our hearty dinner platters, 
              everything is made from scratch daily using time-tested recipes. 
              When you dine with us, you're not just a customer - you're family.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Clock className="w-8 h-8 text-barn-red-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-mountain-green-800">39</p>
                <p className="text-sm text-mountain-green-600">Years Serving</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-barn-red-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-mountain-green-800">3</p>
                <p className="text-sm text-mountain-green-600">Generations</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-barn-red-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-mountain-green-800">14</p>
                <p className="text-sm text-mountain-green-600">Years Best Food</p>
              </div>
            </div>

            <Link 
              href="/about" 
              className="inline-flex items-center text-barn-red-600 hover:text-barn-red-700 font-semibold transition-colors"
            >
              Read Our Full Story
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              {/* Placeholder for restaurant image */}
              <div className="w-full h-full bg-gradient-to-br from-barn-red-100 to-autumn-orange-100 flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-20 h-20 text-barn-red-400 mx-auto mb-4" />
                  <p className="text-barn-red-600">Restaurant Photo</p>
                  <p className="text-sm text-barn-red-500 mt-2">The Cozy Corner Cafe Team</p>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-autumn-orange-200 rounded-full opacity-50 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}