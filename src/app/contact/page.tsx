'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, Navigation } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import MapEmbed from '@/components/MapEmbed'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-mountain-green-50 to-white py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center space-x-2 mb-4">
              <MapPin className="w-6 h-6 text-mountain-green-600" />
              <span className="text-mountain-green-600 font-semibold uppercase tracking-wide">Visit Us</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-mountain-green-900 mb-4">
              Find Mountain View Farm
            </h1>
            
            <p className="text-lg text-mountain-green-700 max-w-2xl mx-auto">
              Located in the heart of Preston County, just 15 minutes from Kingwood. 
              Look for the red barn and the Mountain View Farm sign.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Map */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-bold text-mountain-green-900 mb-8">
                Get in Touch
              </h2>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Address */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-mountain-green-100 rounded-full p-3">
                      <MapPin className="w-6 h-6 text-mountain-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-mountain-green-900 mb-2">
                        Farm Location
                      </h3>
                      <address className="not-italic text-mountain-green-600">
                        123 Mountain Road<br />
                        Kingwood, WV 26537<br />
                        Preston County
                      </address>
                      <a 
                        href="https://maps.google.com/maps?daddr=123+Mountain+Road,+Kingwood,+WV+26537" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 mt-3 text-mountain-green-600 hover:text-mountain-green-700 font-medium"
                      >
                        <Navigation className="w-4 h-4" />
                        <span>Get Directions</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-sky-blue-100 rounded-full p-3">
                      <Phone className="w-6 h-6 text-sky-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-mountain-green-900 mb-2">
                        Call Us
                      </h3>
                      <a 
                        href="tel:+13045551234" 
                        className="text-xl text-mountain-green-600 hover:text-mountain-green-700 font-medium"
                      >
                        (304) 555-1234
                      </a>
                      <p className="text-sm text-mountain-green-600 mt-1">
                        Best time to call: 8 AM - 6 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-autumn-orange-100 rounded-full p-3">
                      <Mail className="w-6 h-6 text-autumn-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-mountain-green-900 mb-2">
                        Email Us
                      </h3>
                      <a 
                        href="mailto:info@mountainviewfarmwv.com" 
                        className="text-mountain-green-600 hover:text-mountain-green-700"
                      >
                        info@mountainviewfarmwv.com
                      </a>
                      <p className="text-sm text-mountain-green-600 mt-1">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-barn-red-100 rounded-full p-3">
                      <Clock className="w-6 h-6 text-barn-red-600" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-lg text-mountain-green-900 mb-2">
                        Farm Stand Hours
                      </h3>
                      <div className="space-y-1 text-mountain-green-600">
                        <div className="flex justify-between">
                          <span>Monday - Friday:</span>
                          <span className="font-medium">8 AM - 6 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday:</span>
                          <span className="font-medium">7 AM - 7 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday:</span>
                          <span className="font-medium">9 AM - 5 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <MapEmbed />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-b from-white to-mountain-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-mountain-green-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg text-mountain-green-700">
                Have a question about our products or want to schedule a farm visit? 
                We'd love to hear from you!
              </p>
            </div>

            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  )
}