'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle, Newspaper } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')

    // In production, this would submit to Netlify Forms
    // For now, we'll simulate a submission
    setTimeout(() => {
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 5000)
    }, 1000)
  }

  return (
    <section id="newsletter" className="py-16 md:py-20 bg-gradient-to-br from-mountain-green-600 to-sky-blue-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6"
          >
            <Newspaper className="w-8 h-8" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Stay Connected with the Farm
          </h2>
          
          <p className="text-lg mb-8 text-white/90">
            Get weekly updates on what's fresh, seasonal recipes, and special farm events. 
            We promise not to fill your inbox - just the good stuff!
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                disabled={status === 'loading' || status === 'success'}
                className="w-full px-6 py-4 pr-32 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors disabled:opacity-50"
              />
              
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-white text-mountain-green-700 font-semibold rounded-full hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-mountain-green-300 border-t-mountain-green-700 rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Subscribe</span>
                  </>
                )}
              </button>
            </div>

            {/* Success Message */}
            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-white/90"
              >
                Thanks for subscribing! Check your email for a welcome message.
              </motion.p>
            )}

            {/* Privacy Note */}
            <p className="mt-4 text-sm text-white/70">
              We respect your privacy and will never share your email. 
              You can unsubscribe anytime.
            </p>
          </form>

          {/* Hidden Netlify Form */}
          <form name="newsletter" data-netlify="true" hidden>
            <input type="email" name="email" />
          </form>
        </motion.div>
      </div>
    </section>
  )
}