export interface Service {
  slug: string
  name: string
  icon: string
  image: string
  heroImage: string
  summary: string
  bullets: string[]
  ctaLabel: string
  gallery?: string[]
  problem?: string
  solution?: string
  process?: Array<{
    step: number
    title: string
    description: string
  }>
  benefits?: Array<{
    icon: string
    title: string
    description: string
  }>
  beforeImage?: string
  afterImage?: string
}

export const services: Service[] = [
  {
    slug: 'drain-cleaning',
    name: 'Drain Cleaning',
    icon: 'droplet',
    image: '/images/1-min.png',
    heroImage: '/images/1.png',
    summary: 'Professional drain cleaning services to clear clogs and keep your plumbing flowing smoothly.',
    bullets: [
      'Advanced hydro-jetting technology',
      'Video camera inspection',
      'Remove stubborn clogs and blockages',
      'Prevent future drainage issues'
    ],
    ctaLabel: 'Schedule Drain Service'
  },
  {
    slug: '24-7-emergency',
    name: '24/7 Emergency Service',
    icon: 'clock',
    image: '/images/6.png',
    heroImage: '/images/6.png',
    summary: 'Round-the-clock emergency plumbing services when you need us most. Our expert team is always ready to respond.',
    bullets: [
      'Available 24 hours a day, 7 days a week',
      'Rapid response times in Palm Beaches area',
      'Expert diagnosis and immediate repairs',
      'Fully equipped service vehicles'
    ],
    ctaLabel: 'Call Emergency Hotline'
  },
  {
    slug: 'water-heaters',
    name: 'Water Heaters',
    icon: 'flame',
    image: '/images/4.png',
    heroImage: '/images/4.png',
    summary: 'Expert water heater installation, repair, and maintenance for reliable hot water supply.',
    bullets: [
      'Tank and tankless water heaters',
      'Energy-efficient upgrades',
      'Same-day repairs',
      'Annual maintenance programs'
    ],
    ctaLabel: 'Schedule Service'
  },
  {
    slug: 'bathroom-renovations',
    name: 'Bathroom Renovations',
    icon: 'bath',
    image: '/images/Untitled design (11).png',
    heroImage: '/images/Untitled design (11).png',
    summary: 'Complete bathroom renovation services from design to installation.',
    bullets: [
      'Custom bathroom design',
      'Fixture installation and upgrades',
      'Complete plumbing overhauls',
      'Modern bathroom transformations'
    ],
    ctaLabel: 'Transform Your Bathroom'
  },
  {
    slug: 'leak-detection',
    name: 'Leak Detection',
    icon: 'search',
    image: '/images/3.png',
    heroImage: '/images/3.png',
    summary: 'Advanced leak detection technology to find and fix hidden leaks before they cause damage.',
    bullets: [
      'Non-invasive detection methods',
      'Thermal imaging technology',
      'Slab leak specialists',
      'Prevent water damage'
    ],
    ctaLabel: 'Find Hidden Leaks'
  },
  {
    slug: 'gas-lines',
    name: 'Gas Lines',
    icon: 'flame2',
    image: '/images/2-min.png',
    heroImage: '/images/2.png',
    summary: 'Safe and reliable gas line installation, repair, and inspection services.',
    bullets: [
      'Licensed gas line specialists',
      'Leak detection and repair',
      'New gas line installation',
      'Safety inspections and testing'
    ],
    ctaLabel: 'Ensure Gas Safety'
  },
  {
    slug: 'commercial-residential',
    name: 'Commercial / Residential',
    icon: 'building',
    image: '/images/2.png',
    heroImage: '/images/2.png',
    summary: 'Comprehensive plumbing solutions for both commercial properties and residential homes.',
    bullets: [
      'Commercial building maintenance',
      'Residential plumbing services',
      'New construction plumbing',
      'Property management support'
    ],
    ctaLabel: 'Get a Quote'
  },
  {
    slug: 'backflow-prevention',
    name: 'Backflow Prevention',
    icon: 'rotate',
    image: '/images/4-min.png',
    heroImage: '/images/4.png',
    summary: 'Protect your water supply with professional backflow prevention installation and testing.',
    bullets: [
      'Certified backflow testing',
      'Annual inspection programs',
      'Device installation and repair',
      'Code compliance certification'
    ],
    ctaLabel: 'Protect Your Water'
  },
  {
    slug: 'maintenance-programs',
    name: 'Maintenance Programs',
    icon: 'calendar',
    image: '/images/Untitled design (1).png',
    heroImage: '/images/Untitled design (1).png',
    summary: 'Preventive maintenance programs to keep your plumbing system running smoothly year-round.',
    bullets: [
      'Annual inspection plans',
      'Priority emergency service',
      'Discounted repairs',
      'Extended warranty coverage'
    ],
    ctaLabel: 'Join Maintenance Plan'
  },
  {
    slug: 'annual-flush',
    name: 'Annual Flush (Filtration)',
    icon: 'refresh',
    image: '/images/5-min.png',
    heroImage: '/images/5.png',
    summary: 'Annual system flush and filtration services to maintain optimal water quality and system performance.',
    bullets: [
      'Water heater flushing',
      'Pipe cleaning and descaling',
      'Filter replacement',
      'System optimization'
    ],
    ctaLabel: 'Schedule Annual Service'
  },
  {
    slug: 'water-quality',
    name: 'Water Quality',
    icon: 'droplet2',
    image: '/images/7-min.png',
    heroImage: '/images/7.png',
    summary: 'Comprehensive water quality testing and treatment solutions for cleaner, safer water.',
    bullets: [
      'Water testing and analysis',
      'Filtration system installation',
      'Water softener services',
      'Purification solutions'
    ],
    ctaLabel: 'Improve Water Quality'
  },
  {
    slug: 'distributor',
    name: 'Distributor Services',
    icon: 'truck',
    image: '/images/Generated Image September 05, 2025 - 2_30PM.jpeg',
    heroImage: '/images/Generated Image September 05, 2025 - 2_30PM.jpeg',
    summary: 'Professional distribution and supply chain services for plumbing contractors and businesses.',
    bullets: [
      'Wholesale plumbing supplies',
      'Fast delivery services',
      'Contractor partnerships',
      'Bulk order discounts'
    ],
    ctaLabel: 'Partner With Us'
  },
  {
    slug: 'pipelining',
    name: 'Pipelining',
    icon: 'wrench',
    image: '/images/6-min.png',
    heroImage: '/images/6.png',
    summary: 'Trenchless pipe repair and replacement using advanced pipelining technology.',
    bullets: [
      'No-dig pipe repair',
      'Epoxy pipe lining',
      'Minimal property disruption',
      'Long-lasting solutions'
    ],
    ctaLabel: 'Learn About Pipelining'
  },
  {
    slug: 'repiping',
    name: 'Repiping Services',
    icon: 'wrench',
    image: '/images/repiping.png',
    heroImage: '/images/repiping.png',
    summary: 'Complete repiping services for homes and businesses with outdated or damaged plumbing systems.',
    bullets: [
      'Whole-house repiping',
      'Modern pipe materials',
      'Minimal disruption to your property',
      'Improved water pressure and quality'
    ],
    ctaLabel: 'Get Repiping Quote'
  }
]

// Helper function to get a service by slug
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug)
}
