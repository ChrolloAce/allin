'use client'

import React from 'react'
import { Shield, Award, Users } from 'lucide-react'

interface BulletPoint {
  icon: React.ReactNode
  title: string
  description: string
}

export class WhyChooseUs extends React.Component {
  private bulletPoints: BulletPoint[] = [
    {
      icon: <Shield className="h-10 w-10 text-brand-blue" />,
      title: 'Licensed Master Plumbers',
      description: 'Our team consists of licensed master plumbers with years of experience. Fully insured and bonded for your protection and peace of mind.'
    },
    {
      icon: <Award className="h-10 w-10 text-brand-blue" />,
      title: '24/7 Emergency Service',
      description: 'Plumbing disasters don\'t wait for business hours. We\'re available 24/7 with rapid response times to handle any emergency.'
    },
    {
      icon: <Users className="h-10 w-10 text-brand-blue" />,
      title: 'Upfront Transparent Pricing',
      description: 'No surprises or hidden fees. We provide clear, upfront pricing before any work begins, so you know exactly what to expect.'
    }
  ]
  
  render() {
    return (
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-5xl md:text-7xl uppercase tracking-tight text-center mb-12">
            Why Choose Us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div>
              <img 
                src="/images/two-plumbers.png" 
                alt="All In Plumbing Solutions professional team"
                className="rounded-xl2 shadow-card w-full object-cover"
              />
            </div>
            
            {/* Right - Bullet Points */}
            <div>
              <ul className="space-y-8">
                {this.bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    {point.icon}
                    <div>
                      <h4 className="font-heading text-2xl uppercase mb-2 text-brand-black">
                        <span className="underline decoration-brand-gold decoration-2 underline-offset-4">
                          {point.title}
                        </span>
                      </h4>
                      <p className="text-black/70 text-[17px] leading-7">
                        {point.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
