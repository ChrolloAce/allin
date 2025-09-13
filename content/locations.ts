// content/locations.ts (PLUMBING)
export type Location = {
  slug: string;
  city: string;
  state: "FL";
  county?: string;
  zips?: string[];
  neighborhoods?: string[];
  headline?: string;
  blurb?: string;
  heroImage?: string;
  mapEmbedUrl?: string;
  services?: string[];
  differentiators?: string[];
  faqs?: Array<{ q: string; a: string }>;
  testimonials?: Array<{ name: string; area?: string; text: string }>;
};

export const PLUMBING_SERVICES = [
  "Emergency Plumbing (24/7)",
  "Drain Cleaning & Hydro-Jetting",
  "Sewer Camera Inspections",
  "Leak Detection & Slab Leaks",
  "Water Heater Repair/Install (Tank & Tankless)",
  "Toilet, Faucet & Fixture Repairs",
  "Whole-Home Re-pipe (Copper/PEX)",
  "Backflow Testing & Repair",
  "Garbage Disposals & Kitchen Lines",
  "Gas Lines (install/repair)"
];

export const LOCATIONS: Location[] = [
  {
    slug: "west-palm-beach-fl",
    city: "West Palm Beach",
    state: "FL",
    county: "Palm Beach County",
    zips: ["33401","33405","33407","33409","33411","33412","33413","33415","33417"],
    neighborhoods: ["El Cid","Flamingo Park","Northwood","SoSo","Downtown"],
    heroImage: "/images/locations/wpb-plumbing.jpg",
    blurb: "Same-day plumbers for leaks, drains, water heaters & more.",
    services: PLUMBING_SERVICES,
    differentiators: [
      "Fast response to high-rise & historic homes",
      "Hard-water scale solutions (heater/fixtures)",
      "Sewer camera inspections for older lines"
    ],
    faqs: [
      { q: "Do you offer 24/7 emergency service in West Palm Beach?", a: "Yes—nights, weekends, and holidays. Call for immediate dispatch." },
      { q: "Can you find slab leaks?", a: "We use acoustic & thermal leak detection to pinpoint slab leaks without tearing up the whole floor." },
      { q: "How quickly can you respond to emergencies?", a: "We guarantee 60-minute emergency response times throughout West Palm Beach and surrounding areas." },
      { q: "Do you handle commercial plumbing?", a: "Yes, we service both residential and commercial properties including restaurants, offices, and retail spaces." }
    ],
    testimonials: [
      { name: "Sarah M.", area: "Downtown WPB", text: "Fast response when our water heater burst. Professional team cleaned everything up perfectly!" },
      { name: "Mike R.", area: "Northwood", text: "They found and fixed a slab leak that two other plumbers couldn't locate. Highly recommend!" }
    ]
  },
  {
    slug: "palm-beach-fl",
    city: "Palm Beach",
    state: "FL",
    county: "Palm Beach County",
    zips: ["33480"],
    neighborhoods: ["North End","Mid-Town","South End","Estate Section"],
    heroImage: "/images/locations/palm-beach-plumbing.jpg",
    blurb: "Discreet, white-glove plumbing repairs on the island.",
    services: PLUMBING_SERVICES,
    differentiators: [
      "Luxury fixture expertise",
      "Discreet service for high-profile residences",
      "Emergency response for estate properties"
    ],
    faqs: [
      { q: "Do you work with high-end fixtures?", a: "Yes, we're experienced with luxury brands like Kohler, Toto, and European fixtures." },
      { q: "Can you handle estate plumbing systems?", a: "Absolutely. We service complex estate systems including multiple water heaters and zone controls." }
    ]
  },
  {
    slug: "palm-beach-gardens-fl",
    city: "Palm Beach Gardens",
    state: "FL",
    county: "Palm Beach County",
    zips: ["33410","33418"],
    neighborhoods: ["PGA National","Evergrene","Mirasol","Alton","BallenIsles"],
    heroImage: "/images/locations/pbg-plumbing.jpg",
    blurb: "Hydro-jetting, camera inspections & tankless installs.",
    services: PLUMBING_SERVICES,
    differentiators: [
      "HOA-approved vendor",
      "Golf community expertise",
      "Tankless water heater specialists"
    ],
    faqs: [
      { q: "Do you work with HOAs?", a: "Yes, we're approved vendors for multiple HOAs and understand community requirements." },
      { q: "Can you install tankless water heaters?", a: "We're certified installers for all major tankless brands including Rinnai and Navien." }
    ]
  },
  {
    slug: "north-palm-beach-fl",
    city: "North Palm Beach",
    state: "FL",
    county: "Palm Beach County",
    zips: ["33408"],
    neighborhoods: ["Old Port Cove","Prosperity Harbor","Lost Tree Village"],
    heroImage: "/images/locations/npb-plumbing.jpg",
    blurb: "Coastal plumbing experts—corrosion-aware repairs.",
    services: PLUMBING_SERVICES,
    differentiators: [
      "Salt-air corrosion prevention",
      "Marina & waterfront property experience",
      "Backflow prevention certified"
    ]
  },
  {
    slug: "riviera-beach-fl",
    city: "Riviera Beach",
    state: "FL",
    county: "Palm Beach County",
    zips: ["33403","33404","33407"],
    neighborhoods: ["Singer Island","Port District","Monroe Heights"],
    heroImage: "/images/locations/riviera-plumbing.jpg",
    blurb: "Emergency drain service near the port & Singer Island.",
    services: PLUMBING_SERVICES,
    differentiators: [
      "Condo & high-rise specialists",
      "24/7 emergency response",
      "Sewer line repair experts"
    ]
  },
  {
    slug: "boynton-beach-fl",
    city: "Boynton Beach",
    state: "FL",
    county: "Palm Beach County",
    zips: ["33426","33435","33436","33437"],
    neighborhoods: ["Canyon Lakes","Valencia Reserve","Indian Spring","Hunters Run"],
    heroImage: "/images/locations/boynton-plumbing.jpg",
    blurb: "From clogged drains to full re-pipes—done right.",
    services: PLUMBING_SERVICES,
    differentiators: [
      "Whole-home re-piping specialists",
      "Senior community experience",
      "Water quality solutions"
    ],
    faqs: [
      { q: "Do you offer re-piping services?", a: "Yes, we specialize in whole-home re-pipes using modern PEX or copper materials." },
      { q: "Can you help with hard water issues?", a: "We install and service water softeners and filtration systems to combat South Florida's hard water." }
    ]
  },
  {
    slug: "delray-beach-fl",
    city: "Delray Beach",
    state: "FL",
    county: "Palm Beach County",
    zips: ["33444","33445","33446","33483","33484"],
    neighborhoods: ["Pineapple Grove","Lake Ida","Tropic Isle","The Bridges"],
    heroImage: "/images/locations/delray-plumbing.jpg",
    blurb: "Historic homes & coastal condos—licensed & insured.",
    services: PLUMBING_SERVICES,
    differentiators: [
      "Historic home plumbing expertise",
      "Cast iron pipe replacement",
      "Downtown rapid response"
    ],
    faqs: [
      { q: "Can you work on historic homes?", a: "Yes, we have extensive experience with older plumbing systems and preserve historical integrity." },
      { q: "Do you replace cast iron pipes?", a: "We specialize in cast iron replacement using modern materials that last decades." }
    ]
  },
  {
    slug: "boca-raton-fl",
    city: "Boca Raton",
    state: "FL",
    county: "Palm Beach County",
    zips: ["33431","33432","33433","33434","33486","33487","33496","33498"],
    neighborhoods: ["Royal Palm Yacht","Mizner Park","Boca West","Town Center","East Boca"],
    heroImage: "/images/locations/boca-plumbing.jpg",
    blurb: "Tankless water heaters, backflow testing & luxury fixtures.",
    services: PLUMBING_SERVICES,
    differentiators: [
      "Luxury condo & estate service",
      "Backflow testing certified",
      "Smart home plumbing integration"
    ],
    testimonials: [
      { name: "David L.", area: "Royal Palm", text: "They installed a whole-house water filtration system. Excellent work and fair pricing." },
      { name: "Jennifer K.", area: "East Boca", text: "Emergency service at 2 AM for a burst pipe. Can't thank them enough!" }
    ]
  },
  {
    slug: "lantana-fl",
    city: "Lantana",
    state: "FL",
    county: "Palm Beach County",
    zips: ["33462","33465"],
    neighborhoods: ["Hypoluxo Island","Palm Beach Leisureville","Lantana Heights"],
    heroImage: "/images/locations/lantana-plumbing.jpg",
    blurb: "Quick response for leaks and sewer backups.",
    services: PLUMBING_SERVICES,
    differentiators: [
      "Mobile home park experience",
      "Sewer backup specialists",
      "Budget-friendly options"
    ]
  },
  {
    slug: "wellington-fl",
    city: "Wellington",
    state: "FL",
    county: "Palm Beach County",
    zips: ["33414","33449"],
    neighborhoods: ["Olympia","Versailles","The Landings","Binks Forest"],
    heroImage: "/images/locations/wellington-plumbing.jpg",
    blurb: "Equestrian estates to townhomes—full-service plumbing.",
    services: PLUMBING_SERVICES,
    differentiators: [
      "Equestrian property expertise",
      "Well water system knowledge",
      "Large estate maintenance"
    ]
  },
  {
    slug: "royal-palm-beach-fl",
    city: "Royal Palm Beach",
    state: "FL",
    county: "Palm Beach County",
    zips: ["33411","33421"],
    neighborhoods: ["Madison Green","Crestwood","Counterpoint Estates","La Mancha"],
    heroImage: "/images/locations/rpb-plumbing.jpg",
    blurb: "HOA-friendly scheduling & repairs you can trust.",
    services: PLUMBING_SERVICES,
    differentiators: [
      "HOA preferred vendor",
      "Family-friendly service",
      "Preventive maintenance plans"
    ]
  },
  {
    slug: "jupiter-fl",
    city: "Jupiter",
    state: "FL",
    county: "Palm Beach County",
    zips: ["33458","33469","33477","33478"],
    neighborhoods: ["Abacoa","Admirals Cove","Jupiter Island","Tequesta"],
    heroImage: "/images/locations/jupiter-plumbing.jpg",
    blurb: "Leak detection, jetting & high-end fixture installs.",
    services: PLUMBING_SERVICES,
    differentiators: [
      "Waterfront property specialists",
      "Luxury fixture installation",
      "Yacht club area coverage"
    ],
    faqs: [
      { q: "Do you service Jupiter Island?", a: "Yes, we provide full service to Jupiter Island with discreet, professional service." },
      { q: "Can you handle boat dock plumbing?", a: "We're experienced with marine and dock plumbing systems including backflow prevention." }
    ]
  },
  {
    slug: "lake-worth-fl",
    city: "Lake Worth Beach",
    state: "FL",
    county: "Palm Beach County",
    zips: ["33460","33461","33463","33467"],
    neighborhoods: ["College Park","South Palm Park","Tropical Ridge","SOSO District"],
    heroImage: "/images/locations/lake-worth-plumbing.jpg",
    blurb: "Affordable plumbing solutions for homes and businesses.",
    services: PLUMBING_SERVICES,
    differentiators: [
      "Historic district experience",
      "Multi-family property service",
      "Commercial kitchen expertise"
    ]
  },
  {
    slug: "greenacres-fl",
    city: "Greenacres",
    state: "FL",
    county: "Palm Beach County",
    zips: ["33463","33454","33467"],
    neighborhoods: ["Sherwood Forest","Pine Ridge","Coconut Cay","Nautica Isles"],
    heroImage: "/images/locations/greenacres-plumbing.jpg",
    blurb: "Reliable neighborhood plumber with fast response times.",
    services: PLUMBING_SERVICES,
    differentiators: [
      "Family-owned service approach",
      "Senior citizen discounts",
      "Preventive maintenance programs"
    ]
  },
  {
    slug: "palm-springs-fl",
    city: "Palm Springs",
    state: "FL",
    county: "Palm Beach County",
    zips: ["33461","33406"],
    neighborhoods: ["Palm Springs Village","Lake Clarke Shores area"],
    heroImage: "/images/locations/palm-springs-plumbing.jpg",
    blurb: "Community-focused plumbing with personal service.",
    services: PLUMBING_SERVICES,
    differentiators: [
      "Mobile home expertise",
      "Affordable repair options",
      "Bilingual service available"
    ]
  },
  // Broward County cities
  {
    slug: "pompano-beach-fl",
    city: "Pompano Beach",
    state: "FL",
    county: "Broward County",
    zips: ["33060","33061","33062","33063","33064","33069"],
    neighborhoods: ["Harbor Village","Cypress Harbor","Palm Aire"],
    heroImage: "/images/locations/pompano-plumbing.jpg",
    blurb: "Serving North Broward with emergency plumbing services.",
    services: PLUMBING_SERVICES,
    differentiators: [
      "Beach area corrosion prevention",
      "Condo association approved",
      "Rapid emergency response"
    ]
  },
  {
    slug: "deerfield-beach-fl",
    city: "Deerfield Beach",
    state: "FL",
    county: "Broward County",
    zips: ["33441","33442","33443"],
    neighborhoods: ["The Cove","Deer Creek","Century Village"],
    heroImage: "/images/locations/deerfield-plumbing.jpg",
    blurb: "Expert plumbers for condos and single-family homes.",
    services: PLUMBING_SERVICES,
    differentiators: [
      "55+ community specialists",
      "Condo plumbing experts",
      "Water heater replacement pros"
    ]
  },
  // County overview pages
  {
    slug: "palm-beach-county-fl",
    city: "Palm Beach County",
    state: "FL",
    heroImage: "/images/locations/pbc-plumbing.jpg",
    blurb: "County-wide emergency plumbing & maintenance plans.",
    services: PLUMBING_SERVICES,
    differentiators: [
      "Serving all of Palm Beach County",
      "Multiple trucks for faster response",
      "Commercial & residential service"
    ],
    faqs: [
      { q: "Do you service all of Palm Beach County?", a: "Yes, from Jupiter to Boca Raton, we cover the entire county with fast response times." },
      { q: "Are you licensed in Palm Beach County?", a: "Yes, we're fully licensed, bonded, and insured throughout Palm Beach County." }
    ]
  },
  {
    slug: "broward-county-fl",
    city: "Broward County",
    state: "FL",
    heroImage: "/images/locations/broward-plumbing.jpg",
    blurb: "Serving north Broward with 24/7 response.",
    services: PLUMBING_SERVICES,
    differentiators: [
      "North Broward coverage",
      "Emergency response team",
      "Commercial service available"
    ]
  }
];

// Helper function to get location by slug
export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find(loc => loc.slug === slug);
}

// Helper function to get nearby locations
export function getNearbyLocations(currentSlug: string, limit: number = 4): Location[] {
  const current = getLocationBySlug(currentSlug);
  if (!current) return [];
  
  // Filter out the current location and county pages for nearby suggestions
  return LOCATIONS
    .filter(loc => 
      loc.slug !== currentSlug && 
      !loc.city.includes('County') &&
      loc.county === current.county
    )
    .slice(0, limit);
}

// Get all location slugs for static generation
export function getAllLocationSlugs(): string[] {
  return LOCATIONS.map(loc => loc.slug);
}
