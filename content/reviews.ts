export type Review = {
  id: string
  name: string
  avatar?: string
  rating: number // 1-5
  text: string
  service: 'Emergency' | 'Drain Cleaning' | 'Water Heater' | 'Leak Detection' | 'Bathroom' | 'Commercial'
  date: string // ISO
  source?: 'Google' | 'Yelp' | 'Facebook'
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Maria Rodriguez',
    avatar: '/images/avatar-1.jpg',
    rating: 5,
    text: 'All In Plumbing saved the day! Our water heater burst at 2 AM and they were here within 45 minutes. The technician was professional, explained everything clearly, and had us back with hot water by morning. Can\'t recommend them enough!',
    service: 'Water Heater',
    date: '2024-01-15',
    source: 'Google'
  },
  {
    id: '2',
    name: 'James Chen',
    avatar: '/images/avatar-2.jpg',
    rating: 5,
    text: 'Best plumbing service in Miami! They fixed our bathroom leak that three other plumbers couldn\'t figure out. Fair pricing, excellent work, and they cleaned up everything before leaving.',
    service: 'Bathroom',
    date: '2024-01-20',
    source: 'Yelp'
  },
  {
    id: '3',
    name: 'Sarah Thompson',
    avatar: '/images/avatar-3.jpg',
    rating: 5,
    text: 'Used them for our restaurant\'s plumbing maintenance. They work around our schedule, never disrupt service, and keep everything running smoothly. True professionals who understand commercial needs.',
    service: 'Commercial',
    date: '2024-01-25',
    source: 'Google'
  },
  {
    id: '4',
    name: 'Roberto Martinez',
    avatar: '/images/avatar-4.jpg',
    rating: 5,
    text: 'Emergency service at its finest! Pipe burst during a family gathering. They arrived in 30 minutes, stopped the flooding, and fixed everything perfectly. Saved our home from major damage!',
    service: 'Emergency',
    date: '2024-02-01',
    source: 'Facebook'
  },
  {
    id: '5',
    name: 'Emily Watson',
    avatar: '/images/avatar-5.jpg',
    rating: 5,
    text: 'They found a hidden leak that was causing our water bill to skyrocket. Used advanced equipment to locate it without tearing up walls. Professional, honest, and saved us thousands!',
    service: 'Leak Detection',
    date: '2024-02-05',
    source: 'Google'
  },
  {
    id: '6',
    name: 'Michael Davis',
    avatar: '/images/avatar-6.jpg',
    rating: 5,
    text: 'Drain cleaning service was exceptional. They didn\'t just clear the clog - they inspected the entire system with a camera and prevented future problems. Worth every penny!',
    service: 'Drain Cleaning',
    date: '2024-02-10',
    source: 'Yelp'
  },
  {
    id: '7',
    name: 'Ana Gomez',
    avatar: '/images/avatar-7.jpg',
    rating: 5,
    text: 'Remodeled two bathrooms with All In Plumbing. They were on time, on budget, and the quality is outstanding. Their attention to detail and craftsmanship is unmatched in Miami.',
    service: 'Bathroom',
    date: '2024-02-15',
    source: 'Google'
  },
  {
    id: '8',
    name: 'David Park',
    avatar: '/images/avatar-8.jpg',
    rating: 5,
    text: 'As a property manager, I rely on All In Plumbing for all our buildings. They\'re responsive, reliable, and their 24/7 service has saved us countless times. Highly recommended!',
    service: 'Commercial',
    date: '2024-02-20',
    source: 'Facebook'
  }
]

export function getAverageRating(): number {
  const total = reviews.reduce((sum, review) => sum + review.rating, 0)
  return Math.round((total / reviews.length) * 10) / 10
}
