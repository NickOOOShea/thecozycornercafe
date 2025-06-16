'use client'

import { motion } from 'framer-motion'

export default function MapEmbed() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-full min-h-[400px] lg:min-h-[600px] relative"
    >
      <div className="bg-white rounded-lg shadow-lg h-full p-2">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.5!2d-80.3445!3d39.2806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDE2JzUwLjIiTiA4MMKwMjAnNDAuMiJX!5e0!3m2!1sen!2sus!4v1234567890123"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
          title="The Cozy Corner Cafe Location"
        />
      </div>
      
      {/* Address overlay */}
      <div className="absolute bottom-6 left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
        <h3 className="font-bold text-mountain-green-900 mb-1">The Cozy Corner Cafe</h3>
        <p className="text-sm text-mountain-green-600">
          123 Main Street<br />
          Clarksburg, WV 26301
        </p>
      </div>
    </motion.div>
  )
}