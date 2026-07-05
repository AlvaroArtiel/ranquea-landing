import { useEffect, useRef, useState } from 'react'

/* Evolución mensual del campeón (datos reales anonimizados): pos + pts por mes */
const MONTHS = [
  { m: 'Oct', pos: 1, pts: 86.33 },
  { m: 'Nov', pos: 9, pts: 75.33 },
  { m: 'Dic', pos: 1, pts: 81.0 },
  { m: 'Ene', pos: 12, pts: 73.0 },
  { m: 'Feb', pos: 2, pts: 83.67 },
  { m: 'Mar', pos: 5, pts: 75.0 },
  { m: 'Abr', pos: 8, pts: 76.67 },
  { m: 'May', pos: 1, pts: 91.0 },
]
const MAX = 100

function barColor(pos: number) {
  if (pos === 1) return '#16A34A'
  if (pos <= 3) return '#5B3FFF'
  if (pos <= 8) return '#84CC16'
  return '#FFB400'
}

export function MockupTrend() {
  const [on, setOn] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const el = ref.current
    if (reduce || !el || !('IntersectionObserver' in window)) { setOn(true); return }
    const obs = new IntersectionObserver((e) => { if (e[0].isIntersecting) { setOn(true); obs.disconnect() } }, { threshold: 0.4 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="rounded-2xl border border-[var(--border-subtle)] bg-white p-5" style={{ boxShadow: '0 1px 2px rgba(10,10,26,0.04)' }}>
      <p className="text-[12px] font-bold text-[var(--ink)] mb-1">Evolución mensual</p>
      <p className="text-[11px] text-[var(--text-faint)] mb-5">Posición y puntuación por mes</p>
      <div className="flex items-end justify-between gap-2 h-40">
        {MONTHS.map((mo, i) => (
          <div key={mo.m} className="flex-1 flex flex-col items-center justify-end h-full">
            <span className="text-[10px] font-bold text-[var(--ink)] mb-1">{mo.pos}º</span>
            <div className="w-full rounded-t-md relative overflow-hidden" style={{ height: '100%', display: 'flex', alignItems: 'flex-end' }}>
              <div
                className="w-full rounded-t-md transition-all duration-700 ease-out"
                style={{ height: on ? `${(mo.pts / MAX) * 100}%` : '0%', background: barColor(mo.pos), transitionDelay: `${i * 70}ms` }}
              />
            </div>
            <span className="text-[10px] text-[var(--text-muted)] mt-1.5">{mo.m}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
