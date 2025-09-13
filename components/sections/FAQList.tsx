'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

interface FAQListProps {
  items: FAQ[]
  className?: string
}

export function FAQList({ items, className = '' }: FAQListProps) {
  return (
    <div className={`max-w-3xl mx-auto ${className}`}>
      {items.map((faq, index) => (
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
  )
}
