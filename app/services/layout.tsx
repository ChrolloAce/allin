import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plumbing Services Palm Beach County FL | All In',
  description: 'Complete plumbing services Palm Beach County. Drain cleaning, water heaters, leak detection, 24/7 emergency. Licensed CFC 1430367. Call (561) 571-2995',
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
