import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'All In Plumbing Solutions',
    short_name: 'All In Plumbing',
    description: 'Professional plumbing services in The Palm Beaches. 24/7 emergency service, licensed & insured. CFC 1430367',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0066CC',
    icons: [
      {
        src: '/images/logo-final.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/logo-final.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
