import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

// Restaurant metadata
export const metadata: Metadata = {
  title: 'Mountain View Diner - Home Cooking Since 1952 | Preston County, WV',
  description: 'Family diner serving breakfast, lunch, and dinner with mountain hospitality. Located in Preston County, West Virginia. Famous for our biscuits and gravy, country fried steak, and homemade pies.',
  keywords: 'diner, restaurant, breakfast, lunch, dinner, Preston County, West Virginia, family restaurant, home cooking, country food',
  openGraph: {
    title: 'Mountain View Diner - Where Locals Eat',
    description: 'Family diner in Preston County, WV. Serving home-cooked meals since 1952.',
    url: 'https://mountainviewdinerwv.com',
    siteName: 'Mountain View Diner',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mountain View Diner - Preston County, West Virginia',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mountain View Diner - Home Cooking in Preston County',
    description: 'Family diner serving breakfast, lunch, and dinner since 1952.',
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