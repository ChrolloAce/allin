import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Get Free Plumbing Estimate West Palm Beach FL',
  description: 'Contact All In Plumbing for free estimates in West Palm Beach, Boca Raton & Palm Beach County FL. 24/7 emergency plumber available. Call (561) 571-2995 or request service online. Licensed & insured local plumbers.',
  keywords: 'contact plumber West Palm Beach, plumber phone number, emergency plumber contact, free plumbing estimate, plumber near me Palm Beach County',
  openGraph: {
    title: 'All In Plumbing | Contact Us for Free Estimate',
    description: 'Get a free plumbing estimate in Palm Beach County. 24/7 emergency service available. Call (561) 571-2995',
    type: 'website',
    url: 'https://allinplumbingsolutions.com/contact',
  },
  alternates: {
    canonical: 'https://allinplumbingsolutions.com/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
