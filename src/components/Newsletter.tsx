'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setEmail('')
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000)
    }, 1000)
  }

  return (
    <section id="newsletter" className="py-16 bg-autumn-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <Mail className="w-6 h-6 text-autumn-orange-600" />
            <span className="text-autumn-orange-600 font-semibold uppercase tracking-wide">Newsletter</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold text-mountain-green-900 mb-4">
            Stay Connected
          </h2>
          
          <p className="text-lg text-mountain-green-700 mb-8">
            Join our newsletter for weekly specials, new menu items, and 
            exclusive offers. We promise not to fill your inbox!
          </p>

          <form 
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-lg p-6 md:p-8"
            data-netlify="true"
            name="newsletter"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:border-autumn-orange-500 focus:ring-2 focus:ring-autumn-orange-200 transition-colors"
              />
              
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSuccess 
                    ? 'bg-green-600 text-white' 
                    : 'bg-autumn-orange-600 text-white hover:bg-autumn-orange-700'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSuccess ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>{isSubmitting ? 'Subscribing...' : 'Subscribe'}</span>
                  </>
                )}
              </button>
            </div>
            
            <p className="text-sm text-mountain-green-600 mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}