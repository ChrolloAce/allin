import type { Metadata } from 'next'
import './globals.css'
import { TopBar } from '@/components/layout/TopBar'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'All In Plumbing Solutions | 24/7 Emergency Plumbing Services The Palm Beaches',
  description: '24/7 emergency plumbing services in The Palm Beaches. Licensed master plumbers for drain cleaning, water heater repair, leak detection, and more. Call (561) 571-2995',
  keywords: 'plumber, The Palm Beaches, emergency plumbing, drain cleaning, water heater, leak detection, 24/7 plumbing, Florida',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'All In Plumbing Solutions | The Palm Beaches',
    description: '24/7 emergency plumbing services in The Palm Beaches. Licensed master plumbers ready to help!',
    type: 'website',
    locale: 'en_US',
    url: 'https://allinplumbingsolutions.com',
    siteName: 'All In Plumbing Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All In Plumbing Solutions | The Palm Beaches',
    description: '24/7 emergency plumbing services in The Palm Beaches. Licensed master plumbers ready to help!',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="overflow-x-hidden">
        <TopBar />
        <Navbar />
        <main className="min-h-screen pt-16 md:pt-[7.5rem]">
          {children}
        </main>
        <Footer />
        
        {/* Schema.org LocalBusiness markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Plumber',
              name: 'All In Plumbing Solutions',
              description: '24/7 emergency plumbing services in The Palm Beaches and surrounding areas',
              telephone: '561-571-2995',
              alternateTelephone: '954-657-3429',
              email: 'info@allinplumbingsolutions.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'The Palm Beaches',
                addressRegion: 'FL',
                addressCountry: 'US'
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '07:00',
                  closes: '18:00'
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '08:00',
                  closes: '16:00'
                }
              ],
              priceRange: '$$',
              image: 'https://allinplumbingsolutions.com/logo.png',
              url: 'https://allinplumbingsolutions.com'
            })
          }}
        />
      </body>
    </html>
  )
}
