import React from 'react'
import { Metadata } from 'next'
import { CTAButton } from '@/components/ui/CTAButton'
import { CheckCircle, Users, TrendingUp, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Join Our Team | Brown\'s Pressure Washing | Nashville',
  description: 'Join the Brown\'s Pressure Washing team. We\'re looking for dedicated professionals who take pride in their work. Apply today!',
}

export default function ApplyPage() {
  const benefits = [
    'Competitive pay with performance bonuses',
    'Flexible scheduling options',
    'Professional training and certification',
    'Company vehicle and equipment provided',
    'Growth opportunities within the company',
    'Health benefits for full-time employees'
  ]
  
  const requirements = [
    'Valid driver\'s license and clean driving record',
    'Ability to work outdoors in various weather conditions',
    'Strong attention to detail and quality',
    'Excellent customer service skills',
    'Ability to lift up to 50 lbs',
    'Reliable and punctual'
  ]
  
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="heading-xl text-center mb-8">
          Join the Brown&apos;s Team
        </h1>
        
        <p className="text-xl text-center text-black/70 mb-12">
          We&apos;re always looking for hardworking, dedicated professionals to join our growing team. 
          If you take pride in your work and want to be part of Nashville&apos;s premier pressure washing company, 
          we want to hear from you!
        </p>
        
        {/* Why Work With Us */}
        <div className="bg-brand-gray rounded-xl2 p-8 mb-12">
          <h2 className="heading-md mb-8 text-center">
            Why Work With Us?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-3">
              <Users className="text-brand-blue mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Great Team Environment</h3>
                <p className="text-black/70">
                  Work with experienced professionals who support each other and take pride in delivering quality service.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <TrendingUp className="text-brand-blue mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Growth Opportunities</h3>
                <p className="text-black/70">
                  We promote from within and provide training to help you advance your career.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Shield className="text-brand-blue mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Job Security</h3>
                <p className="text-black/70">
                  Join an established, growing company with a strong reputation in the Nashville area.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="text-brand-blue mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Quality Focus</h3>
                <p className="text-black/70">
                  We never cut corners and always do the job right, which means you can take pride in your work.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Benefits & Requirements */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl2 shadow-card p-8">
            <h3 className="heading-md mb-6">Benefits</h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="text-brand-blue mt-1 flex-shrink-0" size={18} />
                  <span className="text-black/80">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-xl2 shadow-card p-8">
            <h3 className="heading-md mb-6">Requirements</h3>
            <ul className="space-y-3">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="text-brand-blue mt-1 flex-shrink-0" size={18} />
                  <span className="text-black/80">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Application CTA */}
        <div className="text-center bg-brand-blue/10 rounded-xl2 p-12">
          <h2 className="heading-lg mb-6">
            Ready to Apply?
          </h2>
          <p className="text-xl text-black/70 mb-8">
            Send your resume and a brief introduction to our hiring team. We review all applications 
            and will contact qualified candidates within 48 hours.
          </p>
          <div className="flex gap-4 justify-center">
            <CTAButton href="mailto:info@allinplumbingsolutions.com" size="lg">
              Send Your Application
            </CTAButton>
                          <CTAButton href="tel:5615712995" variant="secondary" size="lg">
                Call to Learn More
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  )
}
