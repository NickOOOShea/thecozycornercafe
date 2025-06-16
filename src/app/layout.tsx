import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

// Restaurant metadata
export const metadata: Metadata = {
  title: 'The Cozy Corner Cafe - Comfort Food & Warm Hearts Since 1985 | Clarksburg, WV',
  description: 'The Cozy Corner Cafe has been serving Clarksburg\'s favorite comfort food for nearly 40 years. From our famous country breakfast to our hearty dinner platters, everything is made with love.',
  keywords: 'cozy corner cafe, restaurant, breakfast, lunch, dinner, Clarksburg, West Virginia, family restaurant, comfort food, since 1985',
  openGraph: {
    title: 'The Cozy Corner Cafe - Where Every Meal Feels Like Home',
    description: 'Family restaurant in Clarksburg, WV. Serving comfort food since 1985.',
    url: 'https://cozycornercafe.com',
    siteName: 'The Cozy Corner Cafe',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Cozy Corner Cafe - Clarksburg, West Virginia',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Cozy Corner Cafe - Comfort Food Since 1985',
    description: 'Family restaurant serving breakfast, lunch, and dinner since 1985.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-white to-mountain-green-50">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        
        {/* Hidden forms for Netlify */}
        <div style={{ display: 'none' }}>
          <form name="contact" data-netlify="true" netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" name="name" />
            <input type="email" name="email" />
            <input type="tel" name="phone" />
            <textarea name="message"></textarea>
          </form>
          
          <form name="newsletter" data-netlify="true">
            <input type="hidden" name="form-name" value="newsletter" />
            <input type="email" name="email" />
          </form>
        </div>
      </body>
    </html>
  )
}