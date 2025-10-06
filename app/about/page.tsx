import React from 'react'
import Image from 'next/image'
import { Phone } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-blue to-brand-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl uppercase tracking-tight mb-6">
              About <span className="text-brand-gold">All In Plumbing</span> Solutions
            </h1>
            <p className="text-xl text-white/90">
              The Palm Beaches' trusted plumbing experts since day one
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-4xl uppercase text-brand-black mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    All In Plumbing Solutions was founded with a simple mission: to provide 
                    the Palm Beaches community with honest, reliable, and expert plumbing 
                    services that exceed expectations.
                  </p>
                  <p>
                    From our humble beginnings, we've grown into a trusted name throughout 
                    the region, serving thousands of residential and commercial clients with 
                    dedication and professionalism.
                  </p>
                  <p>
                    Our team of licensed and insured plumbers brings decades of combined 
                    experience to every job, whether it's a simple repair or a complex 
                    installation.
                  </p>
                </div>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/Untitled design (11).png"
                  alt="All In Plumbing Solutions Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-4xl uppercase text-brand-black text-center mb-12">
              Why Choose Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-card">
                <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl text-white">✓</span>
                </div>
                <h3 className="font-heading text-xl uppercase mb-3">Licensed & Insured</h3>
                <p className="text-gray-600">
                  Fully licensed (CFC 1430361) and insured for your protection and peace of mind.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-card">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl text-white">★</span>
                </div>
                <h3 className="font-heading text-xl uppercase mb-3">24/7 Emergency Service</h3>
                <p className="text-gray-600">
                  Available around the clock for all your plumbing emergencies. We're always here when you need us.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-card">
                <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl text-white">♥</span>
                </div>
                <h3 className="font-heading text-xl uppercase mb-3">Customer First</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We treat every home like our own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl uppercase text-brand-black text-center mb-12">
              Our Values
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-brand-gold pl-6">
                <h3 className="font-heading text-2xl uppercase text-brand-black mb-2">Integrity</h3>
                <p className="text-gray-700">
                  We believe in honest communication and transparent pricing. No surprises, no hidden fees.
                </p>
              </div>
              
              <div className="border-l-4 border-brand-blue pl-6">
                <h3 className="font-heading text-2xl uppercase text-brand-black mb-2">Excellence</h3>
                <p className="text-gray-700">
                  We strive for perfection in every job, using the best materials and latest techniques.
                </p>
              </div>
              
              <div className="border-l-4 border-brand-gold pl-6">
                <h3 className="font-heading text-2xl uppercase text-brand-black mb-2">Reliability</h3>
                <p className="text-gray-700">
                  When we say we'll be there, we will. On time, every time, ready to solve your problem.
                </p>
              </div>
              
              <div className="border-l-4 border-brand-blue pl-6">
                <h3 className="font-heading text-2xl uppercase text-brand-black mb-2">Community</h3>
                <p className="text-gray-700">
                  We're proud to serve the Palm Beaches and give back to the community we call home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl uppercase mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Experience the All In Plumbing Solutions difference. Contact us today for all your plumbing needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                as="a" 
                href="tel:5615712995" 
                variant="primary"
              >
                <Phone className="mr-2" size={20} />
                Call (561) 571-2995
              </Button>
              <Button 
                as="a" 
                href="/contact" 
                variant="secondary"
              >
                Get Free Estimate
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

