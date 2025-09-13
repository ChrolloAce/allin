import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Phone, Clock, CheckCircle, Star, ChevronRight } from 'lucide-react'
import { getLocationBySlug, getNearbyLocations, getAllLocationSlugs, PLUMBING_SERVICES } from '@/content/locations'
import Button from '@/components/ui/Button'
import { FAQList } from '@/components/sections/FAQList'

interface LocationPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all locations
export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({
    slug: slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const location = getLocationBySlug(params.slug)
  
  if (!location) {
    return {
      title: 'Location Not Found',
    }
  }

  const title = `Plumber in ${location.city}, FL | 24/7 Emergency, Drains, Water Heaters | All In Plumbing Solutions`
  const description = `All In Plumbing Solutions provides emergency plumbing, drain cleaning, water heater repair/installation, leak detection & more in ${location.city}, FL. Licensed & insured. Call (561) 571-2995.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://allinplumbingsolutions.com/locations/${params.slug}`,
      siteName: 'All In Plumbing Solutions',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://allinplumbingsolutions.com/locations/${params.slug}`,
    },
  }
}

export default function LocationPage({ params }: LocationPageProps) {
  const location = getLocationBySlug(params.slug)
  
  if (!location) {
    notFound()
  }

  const nearbyLocations = getNearbyLocations(params.slug)
  const services = location.services || PLUMBING_SERVICES

  // JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `https://allinplumbingsolutions.com/locations/${params.slug}#business`,
        name: 'All In Plumbing Solutions',
        description: `Professional plumbing services in ${location.city}, FL`,
        url: `https://allinplumbingsolutions.com/locations/${params.slug}`,
        telephone: '561-571-2995',
        address: {
          '@type': 'PostalAddress',
          addressLocality: location.city,
          addressRegion: 'FL',
          addressCountry: 'US',
        },
        areaServed: {
          '@type': 'City',
          name: location.city,
        },
        openingHours: 'Mo-Su 00:00-23:59',
        priceRange: '$$',
      },
      {
        '@type': 'Service',
        serviceType: 'Emergency Plumbing Services',
        provider: {
          '@id': `https://allinplumbingsolutions.com/locations/${params.slug}#business`,
        },
        areaServed: {
          '@type': 'City',
          name: location.city,
        },
        availableChannel: {
          '@type': 'ServiceChannel',
          servicePhone: {
            '@type': 'ContactPoint',
            telephone: '+1-561-571-2995',
            contactType: 'emergency',
            availableLanguage: 'English',
          },
        },
      },
    ],
  }

  if (location.faqs && location.faqs.length > 0) {
    jsonLd['@graph'].push({
      '@type': 'FAQPage',
      mainEntity: location.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    } as any)
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="min-h-screen bg-off">
        {/* Hero Section */}
        <section className="relative bg-brand-black py-16 md:py-24">
          <div className="absolute inset-0 bg-noise opacity-[0.03]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent"></div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 items-center">
              {/* Left Content */}
              <div>
                {/* Breadcrumbs */}
                <nav className="mb-6 flex items-center gap-2 text-sm text-white/60">
                  <Link href="/" className="hover:text-white">Home</Link>
                  <ChevronRight className="h-4 w-4" />
                  <Link href="/locations" className="hover:text-white">Locations</Link>
                  <ChevronRight className="h-4 w-4" />
                  <span className="text-white">{location.city}</span>
                </nav>

                <h1 className="font-heading text-4xl md:text-6xl uppercase tracking-tight text-white">
                  Plumber in{' '}
                  <span className="text-brand-gold">{location.city}</span>, FL
                </h1>
                
                <p className="mt-6 text-lg text-white/90">
                  {location.blurb || `Professional plumbing services in ${location.city}. Licensed, insured, and available 24/7 for emergencies.`}
                </p>

                {/* Trust Badges */}
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 rounded-none bg-white/10 px-3 py-2 backdrop-blur">
                    <Star className="h-5 w-5 text-brand-gold" />
                    <span className="text-sm text-white">4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-none bg-white/10 px-3 py-2 backdrop-blur">
                    <CheckCircle className="h-5 w-5 text-brand-blue" />
                    <span className="text-sm text-white">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-none bg-white/10 px-3 py-2 backdrop-blur">
                    <Clock className="h-5 w-5 text-brand-gold" />
                    <span className="text-sm text-white">24/7 Service</span>
                  </div>
                </div>

                {/* CTAs */}
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

                {/* Google Business Profile note */}
                <p className="mt-6 text-sm text-white/60">
                  ✓ Verified service area in Google Business Profile
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Introduction */}
        <section className="py-12 md:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-heading text-3xl md:text-4xl uppercase text-brand-black">
                Fast, Local Plumbers in {location.city}
              </h2>
              <div className="mt-6 space-y-4 text-brand-black/80">
                <p>
                  When plumbing problems strike in {location.city}, you need a reliable local team that understands the unique challenges 
                  of South Florida homes. From hard water damage to aging cast-iron pipes, slab leaks to hurricane-related backflow issues, 
                  we've seen and fixed it all.
                </p>
                <p>
                  Our {location.city} plumbers are equipped to handle the high groundwater tables and salt-air corrosion common in our coastal 
                  climate. Whether you're dealing with an emergency burst pipe or planning a bathroom renovation, we provide upfront pricing 
                  and professional service you can trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 md:py-16 bg-brand-gray">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl md:text-4xl uppercase text-brand-black mb-8">
              Our Services in {location.city}
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, index) => {
                // Map service names to slugs (simplified mapping)
                const serviceSlug = service.toLowerCase()
                  .replace(/[^a-z0-9]+/g, '-')
                  .replace(/^-|-$/g, '')
                
                return (
                  <Link
                    key={index}
                    href={`/services/${serviceSlug}`}
                    className="group flex items-center gap-4 rounded-none border-2 border-brand-black bg-white p-4 transition-all hover:bg-brand-blue hover:border-brand-blue"
                  >
                    <CheckCircle className="h-6 w-6 text-brand-gold shrink-0" />
                    <span className="font-semibold text-brand-black group-hover:text-white">
                      {service}
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Benefits/Differentiators */}
        {location.differentiators && location.differentiators.length > 0 && (
          <section className="py-12 md:py-16 bg-brand-gray">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="font-heading text-3xl md:text-4xl uppercase text-brand-black mb-8">
                Why Choose Us in {location.city}
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {location.differentiators.map((diff, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-brand-gold shrink-0 mt-1" />
                    <p className="text-brand-black/80">{diff}</p>
                  </div>
                ))}
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-brand-gold shrink-0 mt-1" />
                  <p className="text-brand-black/80">Upfront, transparent pricing</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-brand-gold shrink-0 mt-1" />
                  <p className="text-brand-black/80">Same-day service available</p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-brand-gold shrink-0 mt-1" />
                  <p className="text-brand-black/80">Satisfaction guaranteed</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQs */}
        {location.faqs && location.faqs.length > 0 && (
          <section className="py-12 md:py-16 bg-white">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <h2 className="font-heading text-3xl md:text-4xl uppercase text-brand-black mb-8">
                FAQs for {location.city} Homeowners
              </h2>
              <FAQList items={location.faqs.map(faq => ({
                question: faq.q,
                answer: faq.a
              }))} />
            </div>
          </section>
        )}

        {/* Testimonials */}
        {location.testimonials && location.testimonials.length > 0 && (
          <section className="py-12 md:py-16 bg-brand-gray">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="font-heading text-3xl md:text-4xl uppercase text-brand-black mb-8">
                What {location.city} Residents Say
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {location.testimonials.map((testimonial, index) => (
                  <div key={index} className="rounded-none border-2 border-brand-black bg-white p-6">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-brand-gold text-brand-gold" />
                      ))}
                    </div>
                    <p className="text-brand-black/80 italic">"{testimonial.text}"</p>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-brand-blue flex items-center justify-center text-white font-semibold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-brand-black">{testimonial.name}</p>
                        {testimonial.area && (
                          <p className="text-sm text-brand-black/60">{testimonial.area}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Service Areas & ZIP Codes */}
        <section className="py-12 md:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Neighborhoods */}
              {location.neighborhoods && location.neighborhoods.length > 0 && (
                <div>
                  <h3 className="font-heading text-2xl uppercase text-brand-black mb-6">
                    Neighborhoods We Serve
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {location.neighborhoods.map((neighborhood, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-brand-gold" />
                        <span className="text-brand-black/80">{neighborhood}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ZIP Codes */}
              {location.zips && location.zips.length > 0 && (
                <div>
                  <h3 className="font-heading text-2xl uppercase text-brand-black mb-6">
                    ZIP Codes Covered
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {location.zips.map((zip, index) => (
                      <span
                        key={index}
                        className="inline-block rounded-none border-2 border-brand-black bg-brand-gray px-3 py-1 text-brand-black"
                      >
                        {zip}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Nearby Cities */}
        {nearbyLocations.length > 0 && (
          <section className="py-12 md:py-16 bg-brand-gray">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="font-heading text-3xl md:text-4xl uppercase text-brand-black mb-8">
                Nearby Service Areas
              </h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {nearbyLocations.map((nearby) => (
                  <Link
                    key={nearby.slug}
                    href={`/locations/${nearby.slug}`}
                    className="group rounded-none border-2 border-brand-black bg-white p-4 transition-all hover:bg-brand-blue hover:border-brand-blue"
                  >
                    <h3 className="font-heading text-lg uppercase text-brand-black group-hover:text-white">
                      {nearby.city}
                    </h3>
                    <p className="mt-1 text-sm text-brand-black/60 group-hover:text-white/80">
                      {nearby.county || 'Palm Beach County'}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="py-16 md:py-20 bg-brand-black">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-heading text-3xl md:text-5xl uppercase text-white">
              Need a Plumber in {location.city}?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Available 24/7 for emergencies. Licensed, insured, and ready to help.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                as="a"
                href="tel:5615712995"
                variant="primary"
                size="lg"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now: (561) 571-2995
              </Button>
              <Button
                as="a"
                href="/contact"
                variant="secondary"
                size="lg"
              >
                Schedule Service Online
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
