'use client'

import Image from 'next/image'
import { useState } from 'react'
import Button from '@/components/ui/Button'

export default function Hero() {
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState<null | boolean>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setOk(null)
    const form = e.currentTarget
    const fd = new FormData(form)
    
    // Convert FormData to JSON for the API
    const data = Object.fromEntries(fd.entries())
    
    const res = await fetch('/api/quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).catch(() => null)
    
    setLoading(false)
    
    if (res?.ok) {
      // Redirect to thank-you page with form data
      const params = new URLSearchParams({
        name: data.name as string || '',
        phone: data.phone as string || '',
        email: data.email as string || '',
        service: data.service as string || '',
        address: data.address as string || '',
        message: data.message as string || '',
      })
      window.location.href = `/thank-you?${params.toString()}`
    } else {
      setOk(false)
    }
  }

  return (
    <section className="relative isolate">
      {/* Background video - responsive */}
      <div className="absolute inset-0 -z-10">
        {/* Desktop video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-center hidden sm:block"
        >
          <source src="/images/videoofbanner.mp4" type="video/mp4" />
        </video>
        
        {/* Mobile background image */}
        <div className="absolute inset-0 h-full w-full sm:hidden">
          <Image
            src="/images/hero-mobile-bg.png"
            alt="Professional plumbing services"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        {/* Overlay: left-to-right gradient + subtle noise */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
        <div className="absolute inset-0 mix-blend-overlay bg-noise opacity-[.08]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Copy / CTAs */}
          <div className="text-white">
            <h1 className="font-heading uppercase leading-[0.95] tracking-tight text-5xl sm:text-6xl">
              All In <span className="underline decoration-brand-gold decoration-4 underline-offset-4">Plumbing</span> Solutions
              <br /> <span className="text-brand-blue">The Palm Beaches</span> Trusted Experts
            </h1>

            <p className="mt-5 max-w-xl text-lg text-white/90">
              Licensed CFC 1430367 • Insured • 24/7 Emergency Service. From leaks to installations, we handle all your plumbing needs with expertise and care.
            </p>

            {/* Trust row */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
              <div className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 ring-1 ring-white/20">
                <span className="text-brand-gold">★★★★★</span>
                <span className="text-white/80">5.0 from 500+ customers</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 ring-1 ring-white/20">
                <span className="text-brand-blue">Licensed & Insured</span>
                <span className="text-white/80">Master Plumbers</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Button 
                as="a" 
                href="tel:5615712995" 
                variant="secondary"
                className="!bg-white/10 !text-white !border-white hover:!bg-white/20"
              >
                Call (561) 571-2995
              </Button>
              <Button 
                as="a" 
                href="#quote" 
                variant="primary"
              >
                Get Free Estimate
              </Button>
            </div>

            {/* Small proof strip */}
            <p className="mt-5 text-sm text-white/75">
              24/7 Emergency Response • Same-day service • Free estimates • Fully insured
            </p>
          </div>

          {/* Right: Form */}
          <div id="quote" className="lg:justify-self-end w-full">
            <form
              onSubmit={onSubmit}
              className="rounded-none bg-white/40 sm:bg-white/95 backdrop-blur-md sm:backdrop-blur px-5 sm:px-6 py-6 shadow-card ring-1 ring-white/30 sm:ring-brand-black/10 max-w-md ml-auto"
            >
              <div className="pb-4 border-b border-white/50 sm:border-brand-gold/30 mb-4">
                <h3 className="font-heading uppercase text-2xl text-white sm:text-brand-black">
                  Get Your Free Quote
                </h3>
                <p className="text-sm text-white/90 sm:text-brand-black/70">
                  Answer a few quick questions—we&apos;ll text you a price today.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <label className="block">
                  <span className="text-sm font-medium text-white sm:text-brand-black">Full Name*</span>
                  <input 
                    name="name" 
                    required 
                    className="mt-1 w-full rounded-md border border-white/30 sm:border-brand-black/20 bg-white/20 sm:bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-brand-blue placeholder-white/50 sm:placeholder-gray-400 text-white sm:text-brand-black" 
                  />
                </label>

                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-sm font-medium text-white sm:text-brand-black">Phone*</span>
                    <input 
                      name="phone" 
                      required 
                      inputMode="tel" 
                      className="mt-1 w-full rounded-md border border-white/30 sm:border-brand-black/20 bg-white/20 sm:bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-brand-blue placeholder-white/50 sm:placeholder-gray-400 text-white sm:text-brand-black" 
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-white sm:text-brand-black">Email</span>
                    <input 
                      name="email" 
                      type="email" 
                      className="mt-1 w-full rounded-md border border-white/30 sm:border-brand-black/20 bg-white/20 sm:bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-brand-blue placeholder-white/50 sm:placeholder-gray-400 text-white sm:text-brand-black" 
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-sm font-medium text-white sm:text-brand-black">Service Needed</span>
                  <select 
                    name="service" 
                    className="mt-1 w-full rounded-md border border-white/30 sm:border-brand-black/20 bg-white/20 sm:bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-brand-blue text-white sm:text-brand-black"
                  >
                    <option>Emergency Repair</option>
                    <option>Leak Detection & Repair</option>
                    <option>Drain Cleaning</option>
                    <option>Water Heater Service</option>
                    <option>Toilet Repair/Installation</option>
                    <option>Pipe Repair/Replacement</option>
                    <option>Fixture Installation</option>
                    <option>Sewer Line Service</option>
                    <option>Commercial Plumbing</option>
                    <option>Other</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-white sm:text-brand-black">Address (City/ZIP)</span>
                  <input 
                    name="address" 
                    className="mt-1 w-full rounded-md border border-white/30 sm:border-brand-black/20 bg-white/20 sm:bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-brand-blue placeholder-white/50 sm:placeholder-gray-400 text-white sm:text-brand-black" 
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-white sm:text-brand-black">Notes</span>
                  <textarea 
                    name="notes" 
                    rows={3} 
                    className="mt-1 w-full rounded-md border border-white/30 sm:border-brand-black/20 bg-white/20 sm:bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-brand-blue placeholder-white/50 sm:placeholder-gray-400 text-white sm:text-brand-black" 
                  />
                </label>

                <Button
                  disabled={loading}
                  variant="primary"
                  fullWidth
                  className="mt-1"
                >
                  {loading ? 'Sending…' : 'Request Estimate'}
                </Button>

                {ok === true && (
                  <p className="text-sm text-emerald-600">Thanks! We got it—someone will reach out shortly.</p>
                )}
                {ok === false && (
                  <p className="text-sm text-red-600">Something went wrong. Please call us or try again.</p>
                )}
              </div>

              {/* Trust Badges */}
              <div className="mt-6 pt-4 border-t border-white/30 sm:border-brand-gold/30">
                <div className="flex items-center justify-center gap-6">
                  {/* Yelp Badge */}
                  <Image
                    src="/images/yelp-badge.png"
                    alt="Yelp 5 Stars"
                    width={140}
                    height={90}
                    className="object-contain"
                  />
                  
                  {/* Google Badge */}
                  <Image
                    src="/images/google-badge-2.png"
                    alt="Google 5 Stars"
                    width={140}
                    height={90}
                    className="object-contain"
                  />
                  
                  {/* BBB Badge */}
                  <a 
                    href="https://www.bbb.org/us/fl/west-palm-beach/profile/plumber/all-in-plumbing-solutions-llc-0633-92041461#sealclick"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src="/images/bbb-accredited.png"
                      alt="BBB Accredited Business"
                      width={140}
                      height={90}
                      className="object-contain"
                    />
                  </a>
                </div>
              </div>

              {/* gold accent frame - more subtle on mobile */}
              <div className="pointer-events-none absolute inset-0 rounded-none ring-1 ring-white/40 sm:ring-brand-gold/60"></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
