import React from 'react'
import Image from 'next/image'
import { Phone, Shield, Clock, Users, Award } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brand-black text-white py-16 md:py-24 border-b-4 border-brand-gold">
        <div className="absolute inset-0 bg-noise opacity-[.08] mix-blend-overlay" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight mb-6">
              About <span className="text-brand-gold">All In Plumbing</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              The Palm Beaches' trusted plumbing experts since day one
            </p>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm">
              <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 ring-1 ring-white/20">
                <Shield size={18} className="text-brand-gold" />
                <span>Licensed CFC 1430361</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 ring-1 ring-white/20">
                <Award size={18} className="text-brand-gold" />
                <span>Fully Insured</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4">
                  <span className="text-brand-gold font-heading text-sm uppercase tracking-wider border-b-2 border-brand-gold pb-1">
                    Our Story
                  </span>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl uppercase text-brand-black mb-6 tracking-tight">
                  Plumbing Excellence <span className="text-brand-blue">Since Day One</span>
                </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
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
                    installation. We treat every home and business like our own.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-[500px] rounded-none overflow-hidden shadow-card border-4 border-brand-black">
                  <Image
                    src="/images/Untitled design (11).png"
                    alt="All In Plumbing Solutions Team"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-gold -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-brand-off">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl md:text-5xl uppercase text-brand-black mb-4 tracking-tight">
                Why Choose <span className="text-brand-blue">All In Plumbing</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                We're more than just plumbers—we're your trusted partners in home maintenance
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-8 border-2 border-brand-black shadow-card group hover:shadow-cardHover transition-shadow">
                <div className="w-16 h-16 bg-brand-blue flex items-center justify-center mb-4">
                  <Shield className="text-white" size={32} />
                </div>
                <h3 className="font-heading text-xl uppercase mb-3 text-brand-black">Licensed & Insured</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fully licensed (CFC 1430361) and insured for your protection and peace of mind.
                </p>
              </div>
              
              <div className="bg-white p-8 border-2 border-brand-black shadow-card group hover:shadow-cardHover transition-shadow">
                <div className="w-16 h-16 bg-brand-gold flex items-center justify-center mb-4">
                  <Clock className="text-white" size={32} />
                </div>
                <h3 className="font-heading text-xl uppercase mb-3 text-brand-black">24/7 Emergency Service</h3>
                <p className="text-gray-600 leading-relaxed">
                  Available around the clock for all your plumbing emergencies. We're always here when you need us.
                </p>
              </div>
              
              <div className="bg-white p-8 border-2 border-brand-black shadow-card group hover:shadow-cardHover transition-shadow">
                <div className="w-16 h-16 bg-brand-blue flex items-center justify-center mb-4">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="font-heading text-xl uppercase mb-3 text-brand-black">Customer First</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your satisfaction is our priority. We treat every home like our own.
                </p>
              </div>

              <div className="bg-white p-8 border-2 border-brand-black shadow-card group hover:shadow-cardHover transition-shadow">
                <div className="w-16 h-16 bg-brand-gold flex items-center justify-center mb-4">
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="font-heading text-xl uppercase mb-3 text-brand-black">Expert Team</h3>
                <p className="text-gray-600 leading-relaxed">
                  Decades of combined experience with the latest tools and techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl md:text-5xl uppercase text-brand-black tracking-tight">
                Our Core <span className="text-brand-blue">Values</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-brand-gold pl-6 py-4 bg-brand-off">
                <h3 className="font-heading text-2xl uppercase text-brand-black mb-3">Integrity</h3>
                <p className="text-gray-700 leading-relaxed">
                  We believe in honest communication and transparent pricing. No surprises, no hidden fees—just straightforward service you can trust.
                </p>
              </div>
              
              <div className="border-l-4 border-brand-blue pl-6 py-4 bg-brand-off">
                <h3 className="font-heading text-2xl uppercase text-brand-black mb-3">Excellence</h3>
                <p className="text-gray-700 leading-relaxed">
                  We strive for perfection in every job, using the best materials and latest techniques to deliver superior results.
                </p>
              </div>
              
              <div className="border-l-4 border-brand-gold pl-6 py-4 bg-brand-off">
                <h3 className="font-heading text-2xl uppercase text-brand-black mb-3">Reliability</h3>
                <p className="text-gray-700 leading-relaxed">
                  When we say we'll be there, we will. On time, every time, ready to solve your plumbing problems efficiently.
                </p>
              </div>
              
              <div className="border-l-4 border-brand-blue pl-6 py-4 bg-brand-off">
                <h3 className="font-heading text-2xl uppercase text-brand-black mb-3">Community</h3>
                <p className="text-gray-700 leading-relaxed">
                  We're proud to serve the Palm Beaches and give back to the community we call home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 bg-brand-black text-white border-t-4 border-brand-gold">
        <div className="absolute inset-0 bg-noise opacity-[.08] mix-blend-overlay" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl uppercase mb-6 tracking-tight">
              Ready to Work <span className="text-brand-gold">With Us?</span>
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Experience the All In Plumbing Solutions difference. Contact us today for all your plumbing needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                as="a" 
                href="tel:5615712995" 
                variant="primary"
                className="!text-lg"
              >
                <Phone className="mr-2" size={20} />
                Call (561) 571-2995
              </Button>
              <Button 
                as="a" 
                href="/contact" 
                variant="secondary"
                className="!text-lg"
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
