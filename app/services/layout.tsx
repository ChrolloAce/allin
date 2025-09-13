import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plumbing Services West Palm Beach, Boca Raton & Palm Beach County FL',
  description: 'Complete plumbing services in West Palm Beach, Boca Raton, Delray Beach & all Palm Beach County FL. Drain cleaning, water heaters, leak detection, emergency repairs, backflow testing & more. Licensed plumbers, 24/7 service. Call (561) 571-2995',
  keywords: 'plumbing services West Palm Beach, plumber Boca Raton, drain cleaning Palm Beach County, water heater repair, leak detection FL, emergency plumber, commercial plumbing, residential plumber',
  openGraph: {
    title: 'All In Plumbing | Full Service Plumber Palm Beach County FL',
    description: 'Complete plumbing services for residential & commercial. 24/7 emergency, drain cleaning, water heaters & more. Licensed & insured. Call (561) 571-2995',
    type: 'website',
    url: 'https://allinplumbingsolutions.com/services',
  },
  alternates: {
    canonical: 'https://allinplumbingsolutions.com/services',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
