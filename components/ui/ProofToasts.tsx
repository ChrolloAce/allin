'use client'

import { useEffect, useRef, useState } from 'react'

type Toast = { 
  id: number
  name: string
  hours: number
  startedAt: number
  duration: number
}

const NAMES = [
  'Andy from Coral Gables',
  'Jenna from Brickell', 
  'Tommy from South Beach',
  'Maya from Coconut Grove',
  'Carlos from Kendall',
  'Sarah from Aventura',
  'Mike from Downtown Miami',
  'Lisa from Miami Beach',
  'David from Doral',
  'Rachel from Wynwood'
]

export function ProofToasts() {
  const [toasts, setToasts] = useState<Toast[]>([])
  const idRef = useRef(0)

  // Show a new toast every 20s
  useEffect(() => {
    const push = () => {
      const id = ++idRef.current
      setToasts((t) => [
        ...t,
        {
          id,
          name: NAMES[Math.floor(Math.random() * NAMES.length)],
          hours: Math.floor(1 + Math.random() * 23),
          startedAt: Date.now(),
          duration: 7000, // 7s lifetime
        },
      ])
    }
    
    // Initial toast after 5s
    const initialTimeout = setTimeout(push, 5000)
    
    // Then every 20s
    const iv = setInterval(push, 20000)
    
    return () => {
      clearTimeout(initialTimeout)
      clearInterval(iv)
    }
  }, [])

  // Auto remove when elapsed
  useEffect(() => {
    const iv = setInterval(() => {
      setToasts((list) =>
        list.filter((t) => Date.now() - t.startedAt < t.duration)
      )
    }, 200)
    return () => clearInterval(iv)
  }, [])

  function close(id: number) {
    setToasts((list) => list.filter((t) => t.id !== id))
  }

  return (
    <div className="fixed left-4 bottom-4 z-[60] space-y-3">
      {toasts.map((t) => {
        const elapsed = Date.now() - t.startedAt
        const pct = Math.min(100, (elapsed / t.duration) * 100)

        return (
          <div
            key={t.id}
            className="w-[320px] bg-white border-2 border-brand-black shadow-card rounded-none animate-slideIn"
          >
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 flex items-center justify-center">
                  <img src="/images/proof-logo.png" alt="All In Plumbing" className="h-10 w-10 object-contain" />
                </div>
                <div className="flex-1 text-sm leading-5 text-brand-black">
                  <strong className="text-base">Emergency Service Booked</strong>
                  <div className="text-black/60 mt-1">
                    {t.name} • {t.hours} hour{t.hours > 1 ? 's' : ''} ago
                  </div>
                </div>
                <button
                  onClick={() => close(t.id)}
                  className="ml-auto -mt-1 text-2xl leading-none text-black/40 hover:text-black px-1 transition"
                  aria-label="Close"
                  title="Close"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Progress bar */}
            <div className="h-1 bg-black/10">
              <div
                className="h-1 bg-brand-gold transition-all"
                style={{ 
                  width: `${pct}%`, 
                  transition: 'width .18s linear' 
                }}
              />
            </div>
          </div>
        )
      })}
      
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}