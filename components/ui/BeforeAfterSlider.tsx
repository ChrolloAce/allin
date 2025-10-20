'use client'

import { useState } from 'react'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  altText: string
}

export default function BeforeAfterSlider({ beforeImage, afterImage, altText }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX
    const position = ((x - rect.left) / rect.width) * 100
    setSliderPosition(Math.min(Math.max(position, 0), 100))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div 
        className="relative overflow-hidden border-4 border-brand-black shadow-xl cursor-ew-resize select-none"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleMove}
      >
        {/* After Image (full width) */}
        <img 
          src={afterImage} 
          alt={`${altText} - After`}
          className="w-full h-auto block"
        />
        
        {/* Before Image (clipped) */}
        <div 
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img 
            src={beforeImage} 
            alt={`${altText} - Before`}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Slider Line */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-brand-gold shadow-lg"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Slider Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-brand-gold border-2 border-brand-black rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-brand-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </div>
        
        {/* Labels */}
        <div className="absolute top-4 left-4 bg-brand-black text-white px-3 py-1 font-bold uppercase">
          Before
        </div>
        <div className="absolute top-4 right-4 bg-brand-gold text-brand-black px-3 py-1 font-bold uppercase">
          After
        </div>
      </div>
      
      <p className="text-center mt-4 text-sm text-brand-black/60">
        Drag the slider to compare before and after
      </p>
    </div>
  )
}
