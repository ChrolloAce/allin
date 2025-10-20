'use client'

import React from 'react'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react'
import { CTAButton } from '../ui/CTAButton'

export class Footer extends React.Component {
  private quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Contact', href: '/contact' }
  ]
  
  private services = [
    { label: 'All Services', href: '/services' },
    { label: '24/7 Emergency', href: '/24-7-emergency' },
    { label: 'Water Heaters', href: '/water-heaters' },
    { label: 'Leak Detection', href: '/leak-detection' },
    { label: 'Maintenance Plans', href: '/maintenance-programs' },
    { label: 'Water Quality', href: '/water-quality' }
  ]
  
  render() {
    return (
      <footer className="bg-brand-black text-white">
        {/* CTA Banner */}
        <div className="bg-brand-blue text-brand-black py-12 border-b-4 border-brand-gold">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight">
                Get Your Free, Speedy Fast Quote:
              </h2>
              <div className="flex gap-4">
                <CTAButton href="/contact" variant="secondary">
                  Free Estimate
                </CTAButton>
                <CTAButton href="tel:6155811581" variant="primary">
                  Call Now
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="font-heading text-xl uppercase mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {this.quickLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-white/70 hover:text-brand-blue transition">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="font-heading text-xl uppercase mb-4">Services</h3>
              <ul className="space-y-2">
                {this.services.map((service) => (
                  <li key={service.href}>
                    <a href={service.href} className="text-white/70 hover:text-brand-blue transition">
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="font-heading text-xl uppercase mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Phone size={18} className="text-brand-blue mt-1" />
                  <div className="flex flex-col">
                    <a href="tel:5615712995" className="text-white/70 hover:text-brand-blue">
                      (561) 571-2995
                    </a>
                    <a href="tel:9546573429" className="text-white/70 hover:text-brand-blue">
                      (954) 657-3429
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={18} className="text-brand-blue mt-1" />
                  <a href="mailto:info@allinplumbingsolutions.com" className="text-white/70 hover:text-brand-blue">
                    info@allinplumbingsolutions.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={18} className="text-brand-blue mt-1" />
                  <span className="text-white/70">
                    The Palm Beaches, FL
                  </span>
                </li>
              </ul>
            </div>
            
            {/* Hours */}
            <div>
              <h3 className="font-heading text-xl uppercase mb-4">Hours</h3>
              <div className="flex items-start gap-2">
                <Clock size={18} className="text-brand-blue mt-1" />
                <div className="text-white/70">
                  <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                  <p>Saturday: 8:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex items-center justify-between">
              <p className="text-white/50 text-sm">
                © 2024 All In Plumbing Solutions. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-white/50 hover:text-brand-blue transition">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-white/50 hover:text-brand-blue transition">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-white/50 hover:text-brand-blue transition">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
