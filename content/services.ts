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
    icon: 'droplets',
    image: '/images/drain-cleaning-new.png',
    heroImage: '/images/drain-cleaning-new.png',
    gallery: ['/images/drain-cleaning-new.png', '/images/leak-detection.png'],
    summary: 'Professional drain cleaning service to eliminate clogs and prevent backups.',
    bullets: [
      'Advanced hydro-jetting technology',
      'Video camera inspection',
      'Preventative maintenance',
      'Same-day service available'
    ],
    ctaLabel: 'Schedule Drain Service'
  },
  {
    slug: '24-7-emergency',
    name: '24/7 Emergency Service',
    icon: 'clock',
    image: '/images/emergency.png',
    heroImage: '/images/emergency.png',
    summary: 'Round-the-clock emergency plumbing services when you need us most. Our expert team is always ready to respond.',
    bullets: [
      'Available 24 hours a day, 7 days a week',
      'Rapid response times in Miami area',
      'Expert diagnosis and immediate repairs',
      'Fully equipped service vehicles'
    ],
    ctaLabel: 'Call Emergency Hotline'
  },
  {
    slug: 'iron-removal',
    name: 'Iron Removal',
    icon: 'droplet',
    image: '/images/iron-removal.png',
    heroImage: '/images/iron-removal.png',
    summary: 'Professional iron removal systems to improve your water quality and protect your plumbing.',
    bullets: [
      'Advanced filtration systems',
      'Removes iron, rust, and sediment',
      'Protects appliances and fixtures',
      'Improves water taste and clarity'
    ],
    ctaLabel: 'Get Clean Water'
  },
  {
    slug: 'water-heaters',
    name: 'Water Heaters',
    icon: 'flame',
    image: '/images/water-heater.png',
    heroImage: '/images/water-heater.png',
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
    slug: 'bathroom-plumbing',
    name: 'Bathroom Plumbing',
    icon: 'bath',
    image: '/images/bathroom.png',
    heroImage: '/images/bathroom.png',
    summary: 'Complete bathroom plumbing services from repairs to full renovations.',
    bullets: [
      'Toilet, sink, and shower repairs',
      'Fixture installation and upgrades',
      'Bathroom remodeling',
      'Clog removal and drain cleaning'
    ],
    ctaLabel: 'Transform Your Bathroom'
  },
  {
    slug: 'leak-detection',
    name: 'Leak Detection',
    icon: 'search',
    image: '/images/leak-detection.png',
    heroImage: '/images/leak-detection.png',
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
    image: '/images/gas-lines.png',
    heroImage: '/images/gas-lines.png',
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
    image: '/images/commercial.png',
    heroImage: '/images/commercial.png',
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
    slug: 'lead-detection',
    name: 'Lead Detection',
    icon: 'shield',
    image: '/images/lead-detection.png',
    heroImage: '/images/lead-detection.png',
    summary: 'Professional lead testing and remediation to ensure your water is safe for your family.',
    bullets: [
      'EPA-certified testing methods',
      'Lead pipe identification',
      'Water quality analysis',
      'Complete lead remediation'
    ],
    ctaLabel: 'Test Your Water'
  },
  {
    slug: 'backflow-prevention',
    name: 'Backflow Prevention',
    icon: 'rotate',
    image: '/images/backflow-prevention.png',
    heroImage: '/images/backflow-prevention.png',
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
    image: '/images/maintenance-programs.png',
    heroImage: '/images/maintenance-programs.png',
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
    image: '/images/annual-flush.png',
    heroImage: '/images/annual-flush.png',
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
    image: '/images/water-quality.png',
    heroImage: '/images/water-quality.png',
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
    image: '/images/van.jpeg',
    heroImage: '/images/van.jpeg',
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
    image: '/images/pipelining.png',
    heroImage: '/images/pipelining.png',
    summary: 'Trenchless pipe repair and replacement using advanced pipelining technology.',
    bullets: [
      'No-dig pipe repair',
      'Epoxy pipe lining',
      'Minimal property disruption',
      'Long-lasting solutions'
    ],
    ctaLabel: 'Learn About Pipelining'
  }
]

// Helper function to get a service by slug
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug)
}