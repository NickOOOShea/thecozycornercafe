'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Home, Phone } from 'lucide-react'
import Link from 'next/link'

export default function ContactSuccessPage() {
  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', bounce: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-mountain-green-100 rounded-full mb-6"
          >
            <CheckCircle className="w-10 h-10 text-mountain-green-600" />
          </motion.div>

          <h1 className="text-3xl md:text-4xl font-display font-bold text-mountain-green-900 mb-4">
            Message Sent Successfully!
          </h1>

          <p className="text-lg text-mountain-green-700 mb-8">
            Thank you for reaching out! We'll get back to you within 24 hours.
          </p>

          {/* What to Expect */}
          <div className="bg-mountain-green-50 rounded-xl p-6 mb-8">
            <h2 className="font-semibold text-mountain-green-900 mb-3">
              What happens next?
            </h2>
            <p className="text-mountain-green-700">
              We check our messages every morning and evening. 
              If your message is urgent, feel free to give us a call!
            </p>
          </div>

          {/* Contact Info */}
          <div className="mb-8">
            <a
              href="tel:304-555-1234"
              className="inline-flex items-center text-mountain-green-700 hover:text-mountain-green-800 font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              (304) 555-1234
            </a>
          </div>

          {/* Action Button */}
          <Link href="/" className="btn-primary inline-flex items-center justify-center">
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}