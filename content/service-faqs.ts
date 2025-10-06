interface ServiceFAQ {
  question: string
  answer: string
}

const serviceFAQs: Record<string, ServiceFAQ[]> = {
  '24-7-emergency': [
    {
      question: 'What qualifies as a plumbing emergency?',
      answer: 'Plumbing emergencies include burst pipes, severe leaks, complete drain blockages, sewage backups, no water supply, and gas leaks. If the issue poses immediate risk to your property or health, it\'s an emergency.'
    },
    {
      question: 'How quickly can you respond to emergency calls in Miami?',
      answer: 'We guarantee response within 60 minutes for emergency calls in Miami and surrounding areas. Our emergency plumbers are stationed throughout Miami-Dade County for rapid response 24/7.'
    },
    {
      question: 'Do emergency services cost more?',
      answer: 'Emergency services do have higher rates due to immediate response requirements and after-hours availability. However, we provide upfront pricing before any work begins, with no hidden fees.'
    },
    {
      question: 'What should I do while waiting for emergency plumber?',
      answer: 'Turn off the main water supply if there\'s flooding, move valuables away from water, and clear the area for our technicians. Never attempt complex repairs yourself as this could worsen the damage.'
    },
    {
      question: 'Are emergency plumbing services covered by insurance?',
      answer: 'Many homeowner\'s insurance policies cover sudden plumbing failures. We can provide detailed documentation for your insurance claim and work directly with adjusters when needed.'
    }
  ],
  'iron-removal': [
    {
      question: 'How do I know if I have iron in my water?',
      answer: 'Common signs include orange/brown staining on fixtures, metallic taste, discolored laundry, and reddish-brown particles in water. We offer free water testing to determine exact iron levels in your Miami home.'
    },
    {
      question: 'What types of iron removal systems do you install?',
      answer: 'We install whole-house iron filters, water softeners with iron removal, oxidation systems, and greensand filters. The best system depends on your iron levels and water chemistry.'
    },
    {
      question: 'How often do iron removal systems need maintenance?',
      answer: 'Most systems require filter changes every 6-12 months and annual professional maintenance. We offer maintenance plans to keep your system running efficiently.'
    },
    {
      question: 'Will iron removal improve water pressure?',
      answer: 'Yes! Iron buildup clogs pipes and fixtures, reducing water pressure. Our iron removal systems can restore full water pressure and prevent future buildup.'
    },
    {
      question: 'How long does iron removal system installation take?',
      answer: 'Standard installations take 4-6 hours. We handle all plumbing connections, system programming, and testing to ensure proper operation before leaving your home.'
    }
  ],
  'water-heaters': [
    {
      question: 'How long do water heaters typically last in Miami?',
      answer: 'Tank water heaters last 8-12 years, while tankless units can last 20+ years with proper maintenance. Miami\'s hard water can reduce lifespan, making annual flushing essential.'
    },
    {
      question: 'Should I choose tank or tankless water heater?',
      answer: 'Tankless heaters provide endless hot water and save space but cost more upfront. Tank heaters are more affordable initially but have higher operating costs. We\'ll help you choose based on your needs and budget.'
    },
    {
      question: 'What size water heater do I need?',
      answer: 'For tanks: 30-40 gallons for 1-2 people, 40-50 for 2-3 people, 50-80 for 3-4 people. Tankless sizing depends on flow rate needs. We provide free sizing consultations.'
    },
    {
      question: 'What are signs my water heater needs replacement?',
      answer: 'Warning signs include: age over 10 years, rusty water, rumbling noises, water around the base, insufficient hot water, and frequent repairs needed.'
    },
    {
      question: 'Do you offer water heater maintenance plans?',
      answer: 'Yes! Our annual maintenance includes flushing, anode rod inspection, temperature/pressure valve testing, and efficiency checks to extend your water heater\'s life.'
    }
  ],
  'bathroom-plumbing': [
    {
      question: 'Can you handle complete bathroom renovations?',
      answer: 'Yes! We handle all plumbing aspects of bathroom renovations including fixture installation, pipe rerouting, shower/tub installation, and ensuring code compliance.'
    },
    {
      question: 'How much does it cost to replace a toilet in Miami?',
      answer: 'Basic toilet replacement starts at $200-400 plus the fixture cost. Price varies based on toilet type, necessary repairs, and any modifications needed.'
    },
    {
      question: 'Why does my bathroom smell like sewer?',
      answer: 'Sewer smells usually indicate dry P-traps, blocked vents, or damaged wax rings. We diagnose and fix the source to eliminate odors permanently.'
    },
    {
      question: 'How do I prevent bathroom mold from plumbing issues?',
      answer: 'Fix leaks immediately, ensure proper ventilation, maintain caulking/grout, and address any moisture issues. We offer leak detection to catch problems early.'
    },
    {
      question: 'Can you convert my tub to a walk-in shower?',
      answer: 'Yes! Tub-to-shower conversions are popular in Miami. We handle all plumbing modifications, ensuring proper drainage and waterproofing.'
    }
  ],
  'leak-detection': [
    {
      question: 'How do you detect hidden leaks without damaging walls?',
      answer: 'We use non-invasive technology including thermal imaging cameras, acoustic listening devices, and moisture meters to pinpoint leaks without unnecessary demolition.'
    },
    {
      question: 'What are signs of a hidden water leak?',
      answer: 'Watch for: unexplained high water bills, musty odors, wall/ceiling stains, warm floor spots, running water sounds when everything\'s off, and reduced water pressure.'
    },
    {
      question: 'How accurate is electronic leak detection?',
      answer: 'Our advanced equipment is 95%+ accurate in locating leaks. We can pinpoint leaks within inches, minimizing repair areas and costs.'
    },
    {
      question: 'Do you detect slab leaks in Miami homes?',
      answer: 'Yes! Slab leaks are common in Miami. We specialize in under-slab leak detection and offer both traditional repair and epoxy pipe lining solutions.'
    },
    {
      question: 'How much water can a small leak waste?',
      answer: 'A small leak can waste 3,000+ gallons yearly. A running toilet can waste up to 200 gallons daily. Early detection saves water and money.'
    }
  ],
  'gas-lines': [
    {
      question: 'Are you licensed for gas line work in Miami?',
      answer: 'Yes! Our plumbers are fully licensed and certified for gas line installation, repair, and testing in Miami-Dade County. We pull all necessary permits.'
    },
    {
      question: 'What are signs of a gas leak?',
      answer: 'Warning signs include: rotten egg smell, hissing sounds, dead vegetation near gas lines, physical symptoms (headache, dizziness), and unusually high gas bills.'
    },
    {
      question: 'Can you convert appliances from electric to gas?',
      answer: 'Yes! We handle complete conversions including running new gas lines, installing shut-off valves, and ensuring proper ventilation for safe operation.'
    },
    {
      question: 'How often should gas lines be inspected?',
      answer: 'Annual professional inspections are recommended. We check for leaks, corrosion, proper pressure, and code compliance to ensure safety.'
    },
    {
      question: 'Do you install outdoor gas lines for grills and fire pits?',
      answer: 'Yes! We install gas lines for outdoor kitchens, grills, fire pits, and pool heaters. All installations meet code requirements with proper shut-offs.'
    }
  ],
  'commercial-residential': [
    {
      question: 'What commercial properties do you service?',
      answer: 'We service offices, retail stores, restaurants, hotels, apartments, condos, HOAs, medical facilities, and industrial properties throughout Miami-Dade County.'
    },
    {
      question: 'Do you offer commercial maintenance contracts?',
      answer: 'Yes! Our commercial maintenance plans include scheduled inspections, priority service, discounted rates, and detailed reporting for property managers.'
    },
    {
      question: 'Can you work after business hours?',
      answer: 'Absolutely! We schedule commercial work during off-hours to minimize business disruption. Emergency services are available 24/7.'
    },
    {
      question: 'Are you insured for large commercial projects?',
      answer: 'Yes, we carry comprehensive liability insurance and are bonded for large commercial projects. We provide certificates of insurance upon request.'
    },
    {
      question: 'Do you handle HOA and condo association work?',
      answer: 'Yes! We work with many HOAs and condo associations in Miami, handling both common area plumbing and coordination of unit repairs.'
    }
  ],
  'lead-detection': [
    {
      question: 'How do I know if my pipes contain lead?',
      answer: 'Homes built before 1986 may have lead pipes or solder. We provide professional testing using EPA-approved methods to determine lead levels in your water.'
    },
    {
      question: 'Is lead in water dangerous?',
      answer: 'Yes, lead exposure is especially harmful to children and pregnant women, causing developmental issues and health problems. No amount of lead is considered safe.'
    },
    {
      question: 'How do you test for lead in water?',
      answer: 'We collect first-draw samples after water sits in pipes for 6+ hours, testing at certified laboratories. Results typically available within 48 hours.'
    },
    {
      question: 'What are my options if lead is detected?',
      answer: 'Options include: complete pipe replacement, epoxy pipe lining, point-of-use filters, or whole-house filtration systems. We\'ll recommend the best solution for your situation.'
    },
    {
      question: 'Does Miami have lead pipe issues?',
      answer: 'While less common than northern cities, some older Miami neighborhoods have lead service lines. We help identify and replace these pipes.'
    }
  ],
  'backflow-prevention': [
    {
      question: 'What is backflow and why is it dangerous?',
      answer: 'Backflow occurs when contaminated water flows backward into clean water supply. This can introduce harmful chemicals, bacteria, and other contaminants into drinking water.'
    },
    {
      question: 'Is backflow testing required in Miami?',
      answer: 'Yes! Miami-Dade County requires annual backflow preventer testing for commercial properties and many residential systems. We\'re certified to perform required testing.'
    },
    {
      question: 'What types of backflow preventers do you install?',
      answer: 'We install pressure vacuum breakers, reduced pressure zone devices, double check valves, and atmospheric vacuum breakers based on your needs and code requirements.'
    },
    {
      question: 'How long does backflow testing take?',
      answer: 'Standard testing takes 30-60 minutes per device. We handle all paperwork and submit results to the water department as required.'
    },
    {
      question: 'What happens if my backflow preventer fails testing?',
      answer: 'We can usually repair failed devices same-day. Common repairs include replacing seals, springs, and check valves. Full replacement is rarely needed.'
    }
  ],
  'maintenance-programs': [
    {
      question: 'What\'s included in your maintenance program?',
      answer: 'Our program includes annual inspections, water heater flushing, drain cleaning, leak checks, water pressure testing, and priority emergency service with discounted rates.'
    },
    {
      question: 'How much can I save with a maintenance plan?',
      answer: 'Members save 15% on all repairs, receive priority scheduling, and prevent costly emergencies. Most members save $300-500 annually through preventive maintenance.'
    },
    {
      question: 'Can I customize my maintenance plan?',
      answer: 'Yes! We offer residential and commercial plans with add-ons for specific equipment like water heaters, water softeners, and sump pumps.'
    },
    {
      question: 'How often do you perform maintenance visits?',
      answer: 'Standard plans include annual visits, but we offer semi-annual and quarterly options for commercial properties or homes with specific needs.'
    },
    {
      question: 'Is there a contract commitment?',
      answer: 'Our maintenance agreements are annual but can be cancelled anytime with 30 days notice. No long-term contracts required.'
    }
  ],
  'annual-flush': [
    {
      question: 'Why is annual water heater flushing important?',
      answer: 'Flushing removes sediment buildup that reduces efficiency, causes noise, and shortens heater life. In Miami\'s hard water, annual flushing is essential.'
    },
    {
      question: 'What systems need annual flushing?',
      answer: 'Water heaters, tankless units, water softeners, and whole-house filters all benefit from annual flushing to maintain efficiency and extend lifespan.'
    },
    {
      question: 'How long does water heater flushing take?',
      answer: 'Standard tank flushing takes 60-90 minutes. Tankless units require descaling and take 2-3 hours. We handle everything including water disposal.'
    },
    {
      question: 'Can I flush my water heater myself?',
      answer: 'While possible, professional flushing includes inspection of anode rod, pressure relief valve, and other components that DIY flushing misses.'
    },
    {
      question: 'What happens if I never flush my water heater?',
      answer: 'Sediment buildup causes inefficiency, higher bills, rumbling noises, inconsistent hot water, and premature failure. Regular flushing can double your heater\'s lifespan.'
    }
  ],
  'water-quality': [
    {
      question: 'What water quality issues are common in Miami?',
      answer: 'Miami water often has high chlorine, hardness, and occasionally taste/odor issues. We test for all parameters and recommend appropriate treatment solutions.'
    },
    {
      question: 'What types of water treatment do you offer?',
      answer: 'We install whole-house filters, water softeners, reverse osmosis systems, UV purifiers, and specialized filters for specific contaminants.'
    },
    {
      question: 'How do I know what water treatment I need?',
      answer: 'Start with our free water testing. We analyze hardness, chlorine, pH, iron, and other parameters to recommend the right system for your needs.'
    },
    {
      question: 'Do water softeners remove chlorine?',
      answer: 'No, softeners remove hardness minerals. For chlorine removal, you need carbon filtration. We often install combination systems for complete treatment.'
    },
    {
      question: 'How often do water filters need replacement?',
      answer: 'Sediment filters: 3-6 months, carbon filters: 6-12 months, RO membranes: 2-3 years. We offer maintenance plans to handle all replacements.'
    }
  ],
  'distributor': [
    {
      question: 'Do you supply plumbing materials to contractors?',
      answer: 'Yes! We offer wholesale pricing on fixtures, pipes, water heaters, and supplies to licensed contractors throughout Miami-Dade County.'
    },
    {
      question: 'Can I purchase plumbing supplies directly?',
      answer: 'We primarily serve contractors, but homeowners can purchase through our professional installation services. We source high-quality materials at competitive prices.'
    },
    {
      question: 'Do you offer delivery services?',
      answer: 'Yes, we provide same-day delivery for in-stock items and next-day for special orders throughout Miami-Dade County.'
    },
    {
      question: 'What brands do you carry?',
      answer: 'We stock major brands including Kohler, Moen, Delta, American Standard, Rheem, AO Smith, and more. Special orders available for any brand.'
    },
    {
      question: 'Do you offer contractor accounts?',
      answer: 'Yes! Contractor accounts receive wholesale pricing, NET 30 terms, priority delivery, and dedicated account management.'
    }
  ],
  'pipelining': [
    {
      question: 'What is trenchless pipelining?',
      answer: 'Pipelining repairs pipes from the inside using epoxy resin, creating a new pipe within the old one without digging up your property.'
    },
    {
      question: 'How long does pipelining last?',
      answer: 'Epoxy pipelining typically lasts 50+ years and comes with substantial warranties. It\'s often more durable than original pipes.'
    },
    {
      question: 'Is pipelining cheaper than traditional replacement?',
      answer: 'Usually yes! While material costs are similar, you save thousands on excavation, landscaping, and restoration costs.'
    },
    {
      question: 'What types of pipes can be lined?',
      answer: 'We can line cast iron, clay, PVC, copper, and concrete pipes from 2-12 inches diameter. Not all pipes are candidates - we\'ll inspect first.'
    },
    {
      question: 'How long does the pipelining process take?',
      answer: 'Most residential projects complete in 1-2 days. The epoxy cures within hours, and you can use plumbing the same day in most cases.'
    }
  ]
}

export function getServiceFAQs(serviceSlug: string): ServiceFAQ[] {
  return serviceFAQs[serviceSlug] || [
    {
      question: 'How quickly can you schedule service?',
      answer: 'We offer same-day and next-day service for most non-emergency calls in Miami. Emergency services are available 24/7 with response times under 60 minutes.'
    },
    {
      question: 'Are you licensed and insured?',
      answer: 'Yes! All our plumbers are fully licensed in Florida, and we carry comprehensive liability insurance and workers compensation coverage.'
    },
    {
      question: 'Do you offer free estimates?',
      answer: 'Yes, we provide free estimates for all non-emergency services. We\'ll diagnose the issue and provide upfront pricing before any work begins.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, check, all major credit cards, and offer financing options for larger projects through approved credit.'
    },
    {
      question: 'Do you guarantee your work?',
      answer: 'Absolutely! We offer a 100% satisfaction guarantee and warranty all our work. Specific warranty terms vary by service type.'
    }
  ]
}
