'use client'

import { MapPin, Navigation } from 'lucide-react'

export default function MapEmbed() {
  return (
    <div className="h-full min-h-[500px] rounded-2xl overflow-hidden shadow-lg">
      {/* Map Placeholder */}
      <div className="w-full h-full bg-gradient-to-br from-mountain-green-50 via-sky-blue-50 to-mountain-green-100 relative">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-mountain-green-600 rounded-full filter blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-sky-blue-600 rounded-full filter blur-3xl" />
        </div>

        {/* Map Content */}
        <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-mountain-green-100 rounded-full mb-4">
              <MapPin className="w-8 h-8 text-mountain-green-600" />
            </div>
            
            <h3 className="font-display font-bold text-2xl text-mountain-green-900 mb-4">
              Mountain View Farm
            </h3>
            
            <address className="not-italic text-mountain-green-600 mb-6">
              123 Mountain Road<br />
              Kingwood, WV 26537<br />
              Preston County
            </address>

            <div className="space-y-3">
              <a 
                href="https://maps.google.com/maps?daddr=123+Mountain+Road,+Kingwood,+WV+26537" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full inline-flex items-center justify-center"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Get Directions
              </a>
              
              <p className="text-sm text-mountain-green-600">
                15 minutes from downtown Kingwood<br />
                Look for the red barn!
              </p>
            </div>
          </div>

          {/* Decorative Map Elements */}
          <div className="absolute top-4 left-4 bg-white rounded-lg shadow-md p-3">
            <p className="text-xs font-semibold text-mountain-green-700">
              GPS: 39.4572° N, 79.6822° W
            </p>
          </div>
        </div>
      </div>

      {/* Note about embedding real map */}
      <div className="bg-mountain-green-600 text-white p-4 text-center">
        <p className="text-sm">
          Interactive map would be embedded here with Google Maps or similar service
        </p>
      </div>
    </div>
  )
}