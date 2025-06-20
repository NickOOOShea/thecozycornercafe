'use client'

import { motion } from 'framer-motion'
import { Coffee, Calendar, Mountain, Heart, Award, Utensils } from 'lucide-react'
import RestaurantTimeline from '@/components/RestaurantTimeline'
import RestaurantValues from '@/components/RestaurantValues'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-barn-red-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20z' fill='%23b91c1c' fill-opacity='0.4'/%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center space-x-2 mb-4">
              <Coffee className="w-6 h-6 text-barn-red-600" />
              <span className="text-barn-red-600 font-semibold uppercase tracking-wide">Our Story</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-mountain-green-900 mb-6">
              Comfort Food &
              <span className="text-gradient block">Warm Hearts Since 1985</span>
            </h1>
            
            <p className="text-xl text-mountain-green-700 leading-relaxed">
              For nearly 40 years, The Cozy Corner Cafe has been serving 
              Clarksburg's favorite comfort food. Where every meal feels like home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Family Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl font-display font-bold text-mountain-green-900 mb-6">
                More Than Just a Restaurant
              </h2>
              
              <div className="space-y-4 text-mountain-green-700">
                <p className="leading-relaxed">
                  When Sarah and Mike Thompson opened The Cozy Corner Cafe in 1985, 
                  they had a simple dream: create a place where neighbors could gather 
                  for good food and warm conversation.
                </p>
                
                <p className="leading-relaxed">
                  Today, that dream lives on. We still make everything from scratch 
                  daily - from our famous buttermilk biscuits to our homemade pies. 
                  We still brew fresh coffee every hour. And we still believe that 
                  a good meal shared with good people is what life's all about.
                </p>
                
                <p className="leading-relaxed">
                  When you dine at The Cozy Corner Cafe, you're not just a customer. 
                  You're part of our family, part of a tradition that's been 
                  bringing Clarksburg together for generations.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-barn-red-50 rounded-lg p-4 text-center">
                  <Calendar className="w-8 h-8 text-barn-red-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-barn-red-800">39</p>
                  <p className="text-sm text-barn-red-600">Years Serving</p>
                </div>
                <div className="bg-sky-blue-50 rounded-lg p-4 text-center">
                  <Utensils className="w-8 h-8 text-sky-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-sky-blue-800">75K+</p>
                  <p className="text-sm text-sky-blue-600">Meals Served Yearly</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden mountain-shadow">
                {/* Placeholder for cafe photo */}
                <div className="aspect-[4/3] bg-gradient-to-br from-barn-red-100 to-autumn-orange-100">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <Coffee className="w-20 h-20 text-barn-red-400 mx-auto mb-4" />
                      <p className="text-barn-red-600">Cafe Interior Photo</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Restaurant Timeline */}
      <RestaurantTimeline />

      {/* Our Values */}
      <RestaurantValues />

      {/* Awards & Recognition */}
      <section className="py-16 bg-gradient-to-b from-white to-barn-red-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center space-x-2 mb-4">
              <Award className="w-6 h-6 text-barn-red-600" />
              <span className="text-barn-red-600 font-semibold uppercase tracking-wide">Recognition</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-mountain-green-900">
              Awards & Accolades
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                year: '2010-2024',
                title: 'Best Comfort Food',
                description: 'Clarksburg Exponent - 14 consecutive years'
              },
              {
                year: '2023',
                title: 'Community Favorite',
                description: 'West Virginia Restaurant Association'
              },
              {
                year: '2022',
                title: 'Best Apple Pie',
                description: 'Harrison County Fair'
              }
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <p className="text-barn-red-600 font-bold mb-2">{award.year}</p>
                <h3 className="font-display font-bold text-xl text-mountain-green-900 mb-2">
                  {award.title}
                </h3>
                <p className="text-mountain-green-600 text-sm">
                  {award.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-barn-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold mb-4">
              Come Join Us for a Meal
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
              Whether it's breakfast, lunch, or dinner, we've got a seat waiting for you. 
              Stop by today and experience what makes The Cozy Corner Cafe special.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/menu" className="btn-secondary bg-white text-barn-red-600 hover:bg-gray-100">
                View Our Menu
              </a>
              <a href="tel:+13045550123" className="btn-secondary bg-transparent border-white text-white hover:bg-white/10">
                Call for Takeout
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}