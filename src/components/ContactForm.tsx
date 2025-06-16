'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // In production, this would submit to Netlify Forms
    // For now, we'll simulate a submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <form 
      name="contact" 
      method="POST" 
      data-netlify="true"
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-lg p-8"
    >
      <input type="hidden" name="form-name" value="contact" />
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="form-label">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            disabled={status === 'loading' || status === 'success'}
            className="form-input"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="form-label">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={status === 'loading' || status === 'success'}
            className="form-input"
            placeholder="john@example.com"
          />
        </div>
      </div>

      {/* Phone */}
      <div className="mb-6">
        <label htmlFor="phone" className="form-label">
          Phone Number (Optional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          disabled={status === 'loading' || status === 'success'}
          className="form-input"
          placeholder="(304) 555-1234"
        />
      </div>

      {/* Message */}
      <div className="mb-6">
        <label htmlFor="message" className="form-label">
          Your Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          disabled={status === 'loading' || status === 'success'}
          className="form-input resize-none"
          placeholder="Tell us how we can help you..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
            <span>Sending...</span>
          </>
        ) : status === 'success' ? (
          <>
            <CheckCircle className="w-5 h-5 mr-2" />
            <span>Message Sent!</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            <span>Send Message</span>
          </>
        )}
      </button>

      {/* Success Message */}
      {status === 'success' && (
        <div className="mt-4 p-4 bg-mountain-green-50 rounded-lg border border-mountain-green-200">
          <p className="text-mountain-green-700 text-center">
            Thanks for reaching out! We'll get back to you within 24 hours.
          </p>
        </div>
      )}

      {/* Error Message */}
      {status === 'error' && (
        <div className="mt-4 p-4 bg-barn-red-50 rounded-lg border border-barn-red-200">
          <p className="text-barn-red-700 text-center">
            Oops! Something went wrong. Please try again or give us a call.
          </p>
        </div>
      )}
    </form>
  )
}