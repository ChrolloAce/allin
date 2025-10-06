'use client'

import React from 'react'

interface GoldUnderlineProps {
  children: React.ReactNode
  className?: string
}

export function GoldUnderline({ children, className = '' }: GoldUnderlineProps) {
  return (
    <span className={`relative ${className}`}>
      {children}
      <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-brand-gold/80"></span>
    </span>
  )
}
