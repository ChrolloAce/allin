'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, MapPin, Phone } from 'lucide-react'
import { LOCATIONS } from '@/content/locations'
import Button from '@/components/ui/Button'

export default function LocationsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCounty, setSelectedCounty] = useState('all')

  // Get unique counties for filter
  const counties = useMemo(() => {
    const uniqueCounties = new Set<string>()
    LOCATIONS.forEach(loc => {
      if (loc.county) uniqueCounties.add(loc.county)
    })
    return Array.from(uniqueCounties).sort()
  }, [])

  // Filter locations based on search and county
  const filteredLocations = useMemo(() => {
    return LOCATIONS.filter(location => {
      const matchesSearch = searchTerm === '' || 
        location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        location.zips?.some(zip => zip.includes(searchTerm)) ||
        location.neighborhoods?.some(n => n.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCounty = selectedCounty === 'all' || location.county === selectedCounty
      
      return matchesSearch && matchesCounty
    })
  }, [searchTerm, selectedCounty])

  return (
    <main className="min-h-screen bg-off">
      {/* Hero Section */}
      <section className="relative bg-brand-black py-16 md:py-20">
        <div className="absolute inset-0 bg-noise opacity-[0.03]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-6xl uppercase tracking-tight text-white">
            Service Areas
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Professional plumbing services across Palm Beach County and beyond. 
            Find your city for local service information and same-day scheduling.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              as="a"
              href="tel:5615712995"
              variant="primary"
              size="lg"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (561) 571-2995
            </Button>
            <Button
              as="a"
              href="/contact"
              variant="secondary"
              size="lg"
            >
              Get Free Estimate
            </Button>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="border-b-2 border-brand-black bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-black/40" />
                <input
                  type="text"
                  placeholder="Search by city, ZIP code, or neighborhood..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-none border-2 border-brand-black pl-10 pr-4 py-3 text-brand-black placeholder-brand-black/40 focus:border-brand-blue focus:outline-none"
                />
              </div>
            </div>
            
            {/* County Filter */}
            <select
              value={selectedCounty}
              onChange={(e) => setSelectedCounty(e.target.value)}
              className="rounded-none border-2 border-brand-black px-4 py-3 text-brand-black focus:border-brand-blue focus:outline-none"
            >
              <option value="all">All Counties</option>
              {counties.map(county => (
                <option key={county} value={county}>{county}</option>
              ))}
            </select>
          </div>
          
          {/* Results Count */}
          <p className="mt-4 text-sm text-brand-black/60">
            Showing {filteredLocations.length} of {LOCATIONS.length} service areas
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredLocations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group relative overflow-hidden rounded-none border-2 border-brand-black bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-gold"
              >
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="font-heading text-xl uppercase text-brand-black">
                    {location.city}
                  </h3>
                  
                  {location.county && (
                    <p className="mt-1 text-sm text-brand-black/60">
                      {location.county}
                    </p>
                  )}
                  
                  <p className="mt-3 text-sm text-brand-black/80 line-clamp-2">
                    {location.blurb || 'Professional plumbing services available'}
                  </p>
                  
                  {/* ZIP codes preview */}
                  {location.zips && location.zips.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {location.zips.slice(0, 3).map(zip => (
                        <span
                          key={zip}
                          className="inline-block rounded-none bg-brand-gray px-2 py-1 text-xs text-brand-black/70"
                        >
                          {zip}
                        </span>
                      ))}
                      {location.zips.length > 3 && (
                        <span className="inline-block px-2 py-1 text-xs text-brand-black/50">
                          +{location.zips.length - 3} more
                        </span>
                      )}
                    </div>
                  )}
                  
                  {/* View Details link */}
                  <div className="mt-4 flex items-center text-sm font-semibold text-brand-blue group-hover:text-brand-blue2">
                    View Service Details
                    <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* No Results */}
          {filteredLocations.length === 0 && (
            <div className="text-center py-12">
              <MapPin className="mx-auto h-12 w-12 text-brand-black/20" />
              <h3 className="mt-4 font-heading text-2xl uppercase text-brand-black">
                No Locations Found
              </h3>
              <p className="mt-2 text-brand-black/60">
                Try adjusting your search or filter criteria
              </p>
              <Button
                as="a"
                href="/contact"
                variant="primary"
                className="mt-6"
              >
                Contact Us for Service
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t-2 border-brand-black bg-brand-blue py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl uppercase text-brand-black">
            Don't See Your Area?
          </h2>
          <p className="mt-4 text-lg text-brand-black/80">
            We're expanding our service areas. Call us to check availability in your location.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              as="a"
              href="tel:5615712995"
              variant="secondary"
              size="lg"
            >
              Call Now: (561) 571-2995
            </Button>
            <Button
              as="a"
              href="/contact"
              variant="primary"
              size="lg"
            >
              Request Service Quote
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
