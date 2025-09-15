import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service Areas Palm Beach County | All In Plumbing',
  description: 'Serving all Palm Beach County FL. West Palm Beach, Boca Raton, Delray Beach & more. 24/7 emergency plumber. Licensed CFC 1430367. Call (561) 571-2995',
  keywords: 'plumber service areas, Palm Beach County plumber, West Palm Beach plumber, Boca Raton plumber, Delray Beach plumber, Jupiter plumber, plumber near me FL',
  openGraph: {
    title: 'All In Plumbing | Service Areas Throughout Palm Beach County',
    description: 'We serve all cities in Palm Beach County with 24/7 emergency plumbing. Find your local area for same-day service.',
    type: 'website',
    url: 'https://allinplumbingsolutions.com/locations',
  },
  alternates: {
    canonical: 'https://allinplumbingsolutions.com/locations',
  },
}

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
