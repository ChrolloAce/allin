import { Metadata } from 'next'
import ThankYouClient from './ThankYouClient'

export const metadata: Metadata = {
  title: 'Thank You - Request Received',
  description: 'Thank you for contacting All In Plumbing. Your request has been received and we will call you shortly. For emergencies, call (561) 571-2995',
  robots: { 
    index: false,
    follow: false 
  }
}

export default function ThankYouPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>
}) {
  return <ThankYouClient searchParams={searchParams} />
}