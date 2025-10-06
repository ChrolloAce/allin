'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Phone, Download, Calendar, CheckCircle, Star, MapPin, Gift } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function ThankYouClient({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>
}) {
  const name = (searchParams?.name as string) || 'Friend'
  const phone = (searchParams?.phone as string) || ''
  const email = (searchParams?.email as string) || ''
  const service = (searchParams?.service as string) || ''
  const city = (searchParams?.city as string) || (searchParams?.address as string) || ''
  const message = (searchParams?.message as string) || ''
  
  const [showConfetti, setShowConfetti] = useState(true)

  useEffect(() => {
    // Fire conversion events
    if (typeof window !== 'undefined') {
      // Google Tag Manager
      ;(window as any).dataLayer = (window as any).dataLayer || []
      ;(window as any).dataLayer.push({ 
        event: 'lead_submitted',
        lead_value: 100,
        lead_source: 'quote_form'
      })
      
      // Facebook Pixel (if available)
      if (typeof (window as any).fbq !== 'undefined') {
        ;(window as any).fbq('track', 'Lead', {
          value: 100,
          currency: 'USD',
        })
      }
      
      // Google Analytics 4 (if available)
      if (typeof (window as any).gtag !== 'undefined') {
        ;(window as any).gtag('event', 'generate_lead', {
          value: 100,
          currency: 'USD',
        })
      }
    }

    // Hide confetti after animation
    const timer = setTimeout(() => setShowConfetti(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-brand-off">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
          <div className="animate-bounce">
            <div className="relative">
              <CheckCircle className="w-32 h-32 text-brand-gold animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl">🎉</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b-4 border-brand-gold bg-brand-blue">
        <div className="absolute inset-0 bg-noise opacity-20" />
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white ring-2 ring-white/40 px-4 py-2 font-semibold uppercase">
              <CheckCircle className="w-5 h-5" />
              Request Received
            </span>
            
            <h1 className="mt-6 font-heading uppercase tracking-tight leading-[0.95] text-4xl sm:text-5xl md:text-6xl text-white">
              Thank You, {name}!
              <span className="block text-brand-gold">Your Free Estimate</span>
              Is On The Way
            </h1>
            
            <p className="mt-6 text-xl text-white/90">
              A plumbing specialist will contact you within <strong>30 minutes</strong> during business hours 
              to confirm details and provide pricing. For urgent issues, call us directly.
            </p>

            <div className="mt-8">
              <Button
                as="a"
                href="tel:5615712995"
                size="lg"
                variant="primary"
                className="!bg-white !text-brand-black hover:!bg-brand-gold"
              >
                <Phone className="inline-block mr-2" size={20} />
                Call Now (561) 571-2995
              </Button>
            </div>

            <div className="mt-6 text-sm text-white/70 flex items-center gap-2">
              <CheckCircle size={16} />
              Average response time: Under 30 minutes
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - Summary & Coupon */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Summary Card */}
            <div className="border-2 border-brand-black bg-white rounded-none shadow-card">
              <div className="px-5 py-4 border-b-2 border-brand-gold bg-brand-black text-white">
                <h3 className="font-heading uppercase text-xl">Your Information</h3>
                <p className="text-sm text-white/80">We'll confirm these details shortly</p>
              </div>
              <div className="p-5 space-y-3">
                <InfoRow label="Name" value={name} />
                {phone && <InfoRow label="Phone" value={phone} />}
                {email && <InfoRow label="Email" value={email} />}
                {service && <InfoRow label="Service" value={service} />}
                {city && <InfoRow label="Location" value={city} />}
                {message && (
                  <div className="pt-3 border-t border-brand-black/10">
                    <span className="text-sm text-black/60">Message:</span>
                    <p className="mt-1 text-sm">{message}</p>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Right Column - Next Steps & More */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* What Happens Next */}
            <div className="border-2 border-brand-black bg-white rounded-none shadow-card p-6">
              <h2 className="font-heading uppercase text-2xl mb-6 text-brand-black">
                What Happens Next
              </h2>
              <div className="space-y-4">
                {[
                  { num: '1', text: 'Our dispatch team reviews your request and checks technician availability in your area' },
                  { num: '2', text: 'We call or text you with an exact price quote and available time slots' },
                  { num: '3', text: 'Once confirmed, we send a technician and text you when they\'re on the way' },
                  { num: '4', text: 'Service is completed, and you only pay after you\'re 100% satisfied' }
                ].map((step) => (
                  <div key={step.num} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-brand-gold text-brand-black font-bold rounded-full flex items-center justify-center">
                      {step.num}
                    </span>
                    <p className="text-black/80">{step.text}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  as="a"
                  href="/services"
                  variant="secondary"
                  size="md"
                >
                  Browse All Services
                </Button>
                <Button
                  as="a"
                  href="/24-7-emergency"
                  variant="primary"
                  size="md"
                  className="!bg-brand-blue"
                >
                  Emergency Services
                </Button>
              </div>
            </div>

            {/* Customer Reviews */}
            <div className="border-2 border-brand-black bg-white rounded-none shadow-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex text-brand-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-black/70">4.9/5 from 500+ Miami homeowners</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <ReviewCard
                  name="Maria G. • Coral Gables"
                  text="Emergency service at 2 AM for a burst pipe. They arrived in 45 minutes and saved our home from flooding. True professionals!"
                />
                <ReviewCard
                  name="David L. • Brickell"
                  text="Fair pricing, excellent work on our bathroom renovation. The team was clean, courteous, and finished on schedule."
                />
              </div>
            </div>

            {/* Service Areas */}
            <div className="border-2 border-brand-black bg-white rounded-none shadow-card p-6">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="text-brand-blue" size={24} />
                <h3 className="font-heading uppercase text-2xl">Serving All of Miami-Dade</h3>
              </div>
              <p className="text-black/70">
                Miami • Miami Beach • Coral Gables • Aventura • Kendall • Homestead • 
                Palmetto Bay • Cutler Bay • Doral • Hialeah • Key Biscayne • Wynwood • 
                Brickell • Coconut Grove • South Beach
              </p>
            </div>

            {/* Quick FAQ */}
            <div className="border-2 border-brand-black bg-white rounded-none shadow-card p-6">
              <h3 className="font-heading uppercase text-2xl mb-4">Quick Answers</h3>
              <div className="space-y-3">
                <details className="border-b border-black/10 pb-3">
                  <summary className="cursor-pointer font-semibold hover:text-brand-blue">
                    How quickly can you arrive?
                  </summary>
                  <p className="mt-2 text-black/70">
                    Emergency services: 30-60 minutes. Regular service: Same day or next day. 
                    We'll confirm exact timing when we call.
                  </p>
                </details>
                <details className="border-b border-black/10 pb-3">
                  <summary className="cursor-pointer font-semibold hover:text-brand-blue">
                    Do I need to be home?
                  </summary>
                  <p className="mt-2 text-black/70">
                    For most services, yes. However, for some exterior work we can arrange 
                    access. We'll discuss this when confirming your appointment.
                  </p>
                </details>
                <details className="border-b border-black/10 pb-3">
                  <summary className="cursor-pointer font-semibold hover:text-brand-blue">
                    What payment methods do you accept?
                  </summary>
                  <p className="mt-2 text-black/70">
                    We accept cash, check, all major credit cards, and offer financing 
                    for larger projects through approved credit.
                  </p>
                </details>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-brand-black border-t-4 border-brand-gold py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading uppercase text-3xl text-white mb-4">
            Need Immediate Help?
          </h2>
          <p className="text-white/80 mb-6">
            Our emergency team is standing by 24/7 for urgent plumbing issues
          </p>
          <Button
            as="a"
            href="tel:5615712995"
            size="lg"
            variant="primary"
            className="!bg-brand-gold !text-brand-black hover:!bg-white"
          >
            <Phone className="inline-block mr-2" size={20} />
            Call Emergency Line: (561) 571-2995
          </Button>
        </div>
      </section>
    </main>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 text-sm">
      <span className="text-black/60">{label}:</span>
      <span className="font-medium text-right">{value}</span>
    </div>
  )
}

function ReviewCard({ name, text }: { name: string; text: string }) {
  return (
    <div className="border border-black/10 p-4 bg-brand-off">
      <div className="flex text-brand-gold mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>
      <p className="text-sm text-black/80">{text}</p>
      <p className="text-xs text-black/60 mt-2">{name}</p>
    </div>
  )
}
