import React from 'react'
import { Metadata } from 'next'
import { PlayCircle } from 'lucide-react'
import { CTAButton } from '@/components/ui/CTAButton'

export const metadata: Metadata = {
  title: 'Watch Videos | Brown\'s Pressure Washing | Nashville',
  description: 'See our pressure washing services in action. Watch before and after transformations of houses, roofs, driveways, and more in Nashville.',
}

export default function WatchVideosPage() {
  const videos = [
    {
      title: 'House Washing Transformation',
      description: 'Watch us restore this Nashville home to its original beauty',
      thumbnail: '/images/video-thumb-house.svg',
      duration: '2:34'
    },
    {
      title: 'Roof Cleaning Process',
      description: 'See our soft wash technique remove years of algae buildup',
      thumbnail: '/images/video-thumb-roof.svg',
      duration: '3:15'
    },
    {
      title: 'Driveway Before & After',
      description: 'Amazing concrete cleaning and sealing results',
      thumbnail: '/images/video-thumb-concrete.svg',
      duration: '1:58'
    },
    {
      title: 'Commercial Property Cleaning',
      description: 'Large-scale pressure washing for businesses',
      thumbnail: '/images/video-thumb-commercial.svg',
      duration: '4:22'
    }
  ]
  
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="heading-xl text-center mb-8">
          See Our Work in Action
        </h1>
        
        <p className="text-xl text-center text-black/70 mb-12 max-w-3xl mx-auto">
          Watch real transformations from our pressure washing projects across Nashville. 
          These videos showcase our techniques, equipment, and the amazing results we deliver.
        </p>
        
        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {videos.map((video, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl2 bg-black mb-4">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition">
                    <PlayCircle className="h-12 w-12 text-brand-blue" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
              <p className="text-black/60">{video.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-brand-gray rounded-xl2 p-12">
          <h2 className="heading-lg mb-6">
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl text-black/70 mb-8 max-w-2xl mx-auto">
            Don&apos;t just watch the transformations - experience one yourself! 
            Contact us today for your free estimate.
          </p>
          <div className="flex gap-4 justify-center">
            <CTAButton href="/contact" size="lg">
              Get Your Free Quote
            </CTAButton>
            <CTAButton href="tel:5615712995" variant="secondary" size="lg">
              Call (561) 571-2995
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  )
}
