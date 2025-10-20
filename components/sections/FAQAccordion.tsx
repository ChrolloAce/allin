'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

export class FAQAccordion extends React.Component {
  private faqs: FAQ[] = [
    {
      question: 'Do you offer 24/7 emergency plumbing services?',
      answer: 'Yes! We provide 24/7 emergency plumbing services. Our team is always ready to respond to urgent situations like burst pipes, major leaks, or sewage backups. We guarantee rapid response times, typically within 60 minutes.'
    },
    {
      question: 'How quickly can you respond to emergencies?',
      answer: 'We guarantee response times within 60 minutes for emergency calls. Our plumbers are strategically located throughout Nashville to ensure rapid response when you need us most.'
    },
    {
      question: 'Are your plumbers licensed and insured?',
      answer: 'Absolutely! All our plumbers are fully licensed master plumbers, bonded, and insured. We maintain all required certifications and carry comprehensive liability insurance for your protection.'
    },
    {
      question: 'What are signs I need to call a plumber?',
      answer: 'Call us if you notice: persistent dripping, slow drains, low water pressure, unusual sounds in pipes, water stains on walls/ceilings, running toilets, or sudden increases in water bills.'
    },
    {
      question: 'Do you offer free estimates?',
      answer: 'Yes! We provide free estimates for all non-emergency services. For emergency calls, we\'ll provide upfront pricing before beginning any work, so there are never any surprises.'
    },
    {
      question: 'Can you help with water heater installation?',
      answer: 'Yes! We install, repair, and maintain all types of water heaters including traditional tank, tankless, and hybrid models. We offer same-day installation for most models.'
    },
    {
      question: 'How can I prevent frozen pipes?',
      answer: 'Keep your home heated above 55°F, insulate exposed pipes, let faucets drip during extreme cold, and know where your main water shut-off valve is located. We also offer winterization services.'
    },
    {
      question: 'What should I do if I have a plumbing emergency?',
      answer: 'First, shut off the main water valve to prevent damage. Then call our 24/7 emergency hotline immediately. We\'ll guide you through temporary measures while our plumber is en route.'
    },
    {
      question: 'Do you work on commercial properties?',
      answer: 'Yes! We provide comprehensive commercial plumbing services including preventive maintenance programs, emergency repairs, and new installations for businesses throughout Nashville.'
    },
    {
      question: 'What\'s included in drain cleaning service?',
      answer: 'Our drain cleaning includes video inspection, hydro-jetting to remove all blockages, and a full system check. We\'ll also provide recommendations for preventing future clogs.'
    }
  ]
  
  render() {
    return (
      <section className="py-16 md:py-24 bg-brand-gray">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-5xl md:text-7xl uppercase tracking-tight text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto">
            {this.faqs.map((faq, index) => (
              <details key={index} className="group border-b border-black/10">
                <summary className="cursor-pointer flex justify-between items-center py-4 text-lg font-semibold hover:text-brand-blue transition">
                  {faq.question}
                  <ChevronDown className="ml-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="pb-4">
                  <p className="text-black/70 text-[17px] leading-7">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    )
  }
}
