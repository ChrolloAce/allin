import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getServiceBySlug, services } from '@/content/services'
import { CTAButton } from '@/components/ui/CTAButton'
import { CheckCircle, Phone, Clock, Shield, Award, MapPin, ChevronRight, Star } from 'lucide-react'
import { ServiceIcon } from '@/components/ui/ServiceIcon'
import ServiceFAQ from '@/components/sections/ServiceFAQ'
import { getServiceFAQs } from '@/content/service-faqs'
import Button from '@/components/ui/Button'

interface ServicePageProps {
  params: {
    service: string
  }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    service: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.service)
  
  if (!service) {
    return {
      title: 'Service Not Found | All In Plumbing Solutions',
    }
  }
  
  return {
    title: `${service.name} Services in The Palm Beaches | Professional ${service.name} | All In Plumbing`,
    description: `Expert ${service.name.toLowerCase()} services in The Palm Beaches. ${service.summary} Call (561) 571-2995 for free estimate.`,
    keywords: `${service.name.toLowerCase()}, ${service.name.toLowerCase()} Palm Beaches, ${service.name.toLowerCase()} services, plumbing Palm Beaches, ${service.name.toLowerCase()} near me`,
    openGraph: {
      title: `${service.name} | All In Plumbing Solutions`,
      description: service.summary,
      type: 'website',
      images: [service.heroImage],
    },
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.service)
  
  if (!service) {
    notFound()
  }

  const faqs = getServiceFAQs(service.slug)
  
  // Service-specific content
  const problemSolution = {
    problem: service.problem || `Without professional ${service.name.toLowerCase()}, you risk water damage, health hazards, and costly repairs down the line.`,
    solution: service.solution || `Our expert team uses state-of-the-art equipment and proven techniques to deliver lasting results that protect your property.`
  }

  const process = service.process || [
    { step: 1, title: 'Initial Inspection', description: 'Thorough assessment of the issue' },
    { step: 2, title: 'Preparation', description: 'Protect surrounding areas and prepare equipment' },
    { step: 3, title: 'Service Execution', description: 'Professional service using industry-best practices' },
    { step: 4, title: 'Quality Check', description: 'Final inspection and customer walkthrough' },
  ]

  const benefits = service.benefits || [
    { icon: 'shield', title: 'Protect Your Investment', description: 'Prevent costly damage and extend system life' },
    { icon: 'clock', title: 'Save Time & Money', description: 'Efficient service that prevents future problems' },
    { icon: 'award', title: 'Peace of Mind', description: 'Licensed, insured professionals you can trust' },
    { icon: 'star', title: 'Guaranteed Results', description: '100% satisfaction guarantee on all work' },
  ]

  const serviceAreas = [
    'West Palm Beach', 'Palm Beach Gardens', 'Jupiter', 'Boca Raton', 'Delray Beach',
    'Wellington', 'Lake Worth', 'Boynton Beach', 'Royal Palm Beach', 'Greenacres'
  ]

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative bg-brand-blue bg-noise py-20 md:py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 13, 15, 0.7), rgba(11, 13, 15, 0.7)), url(${service.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="heading-xl uppercase mb-6">
              Professional {service.name} in The Palm Beaches
            </h1>
            <p className="text-xl mb-8 text-white/90">
              {service.summary}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <CTAButton href="/contact" size="lg">
                Get Free Estimate
              </CTAButton>
              <CTAButton href="tel:5615712995" variant="secondary" size="lg">
                <Phone className="inline-block mr-2" size={20} />
                Call (561) 571-2995
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Block */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="heading-lg uppercase mb-6 text-brand-black">
                Why {service.name} Matters
              </h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-red-600">The Problem:</h3>
                <p className="text-lg text-brand-black/80">
                  {problemSolution.problem}
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-brand-blue">Our Solution:</h3>
                <p className="text-lg text-brand-black/80">
                  {problemSolution.solution}
                </p>
              </div>
              
              <Button href="/contact" size="lg">
                Schedule Service Today
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={service.heroImage} 
                alt={`Professional ${service.name} service in The Palm Beaches`}
                className="rounded-none shadow-xl border-4 border-brand-black"
              />
              <div className="absolute -bottom-4 -right-4 bg-brand-gold p-4 border-2 border-brand-black">
                <p className="font-bold text-brand-black">24/7 Emergency</p>
                <p className="text-sm">Service Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Step-by-Step Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="heading-lg uppercase text-center mb-12 text-brand-black">
            Our Process
          </h2>
          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div key={step.step} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center border-2 border-brand-black">
                    <span className="font-bold text-brand-black">{step.step}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-brand-black/70">{step.description}</p>
                  {index < process.length - 1 && (
                    <div className="w-0.5 h-8 bg-brand-gold/30 ml-6 mt-4"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-brand-blue bg-noise">
        <div className="container mx-auto px-4">
          <h2 className="heading-lg uppercase text-center mb-4 text-white">
            Why Invest in {service.name}?
          </h2>
          <p className="text-center text-white/80 mb-12 max-w-3xl mx-auto">
            Professional {service.name.toLowerCase()} services protect your property and save you money in the long run.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-6 rounded-none shadow-lg border-2 border-brand-black">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mb-4">
                  {benefit.icon === 'shield' && <Shield className="text-brand-black" size={24} />}
                  {benefit.icon === 'clock' && <Clock className="text-brand-black" size={24} />}
                  {benefit.icon === 'award' && <Award className="text-brand-black" size={24} />}
                  {benefit.icon === 'star' && <Star className="text-brand-black" size={24} />}
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-brand-black/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Proof Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-lg uppercase text-center mb-12 text-brand-black">
              Trusted by Palm Beaches Homeowners
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-gold mb-2">500+</div>
                <p className="text-lg">{service.name} Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-gold mb-2">4.9★</div>
                <p className="text-lg">Average Customer Rating</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-gold mb-2">24/7</div>
                <p className="text-lg">Emergency Service Available</p>
              </div>
            </div>

            {/* Sample Testimonial */}
            <div className="bg-brand-off p-8 border-l-4 border-brand-gold">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-brand-gold text-brand-gold" size={20} />
                ))}
              </div>
              <p className="text-lg italic mb-4">
                "All In Plumbing provided excellent {service.name.toLowerCase()} service. 
                Professional, on-time, and the results exceeded our expectations. 
                Highly recommend for anyone in The Palm Beaches!"
              </p>
              <p className="font-bold">- Maria G., Palm Beach Gardens</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-brand-off">
        <div className="container mx-auto px-4">
          <h2 className="heading-lg uppercase text-center mb-12 text-brand-black">
            {service.name} FAQs
          </h2>
          <ServiceFAQ faqs={faqs} serviceName={service.name} />
        </div>
      </section>

      {/* Service Area Block */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MapPin className="mx-auto mb-4 text-brand-blue" size={48} />
            <h2 className="heading-lg uppercase mb-6 text-brand-black">
              Serving All of Palm Beach County
            </h2>
            <p className="text-lg mb-8 text-brand-black/80">
              We provide professional {service.name.toLowerCase()} services throughout The Palm Beaches area.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area) => (
                <span key={area} className="px-4 py-2 bg-brand-blue/10 border border-brand-blue text-brand-black">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-brand-black py-16 border-t-4 border-brand-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-lg uppercase mb-4 text-white">
            Get Your Free {service.name} Estimate Today
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Professional service, competitive pricing, 100% satisfaction guaranteed
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/contact" size="lg" variant="primary">
              Get Free Estimate
            </Button>
            <Button href="tel:5615712995" size="lg" variant="secondary">
              <Phone className="inline-block mr-2" size={20} />
              (561) 571-2995
            </Button>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.name,
            description: service.summary,
            provider: {
              '@type': 'Plumber',
              name: 'All In Plumbing Solutions',
              telephone: '561-571-2995',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'The Palm Beaches',
                addressRegion: 'FL',
              }
            },
            areaServed: {
              '@type': 'City',
              name: 'The Palm Beaches',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: service.name + ' Services',
              itemListElement: benefits.map(b => ({
                '@type': 'Offer',
                name: b.title,
                description: b.description,
              }))
            }
          })
        }}
      />
    </>
  )
}