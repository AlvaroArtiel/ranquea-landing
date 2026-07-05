import { useEffect, useRef, useState } from 'react'
import { Star } from 'lucide-react'
import { PHOTOS } from './photos'

const JURY = [
  { initials: 'AB', name: 'Jurado 1', score: 91, color: '#5B3FFF' },
  { initials: 'CD', name: 'Jurado 2', score: 88, color: '#3D7BFF' },
  { initials: 'EF', name: 'Jurado 3', score: 94, color: '#16A34A' },
]
const AVG = JURY.reduce((s, j) => s + j.score, 0) / JURY.length

export function MockupJury() {
  const [revealed, setRevealed] = useState(0)
  const [avg, setAvg] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setRevealed(JURY.length); setAvg(AVG); return }
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) { setRevealed(JURY.length); setAvg(AVG); return }

    const obs = new IntersectionObserver((e) => {
      if (e[0].isIntersecting) {
        JURY.forEach((_, i) => setTimeout(() => setRevealed(i + 1), 500 + i * 600))
        const start = 500 + JURY.length * 600
        setTimeout(() => {
          let cur = 0
          const tick = () => {
            cur += AVG / 28
            if (cur >= AVG) { setAvg(AVG); return }
            setAvg(cur)
            requestAnimationFrame(tick)
          }
          tick()
        }, start)
        obs.disconnect()
      }
    }, { threshold: 0.4 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const photo = PHOTOS[0]

  return (
    <div ref={ref} className="w-[320px] rounded-2xl border border-[var(--border-subtle)] bg-white overflow-hidden" style={{ boxShadow: '0 24px 60px -22px rgba(91,63,255,0.3)' }}>
      <div className="aspect-[16/10] relative flex items-end" style={{ background: photo.css }}>
        <div className="w-full p-3 bg-gradient-to-t from-black/55 to-transparent">
          <p className="text-white text-[13px] font-bold leading-tight">{photo.title}</p>
          <p className="text-white/80 text-[11px]">por {photo.author}</p>
        </div>
      </div>

      <div className="p-4">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-faint)] mb-3">Votación del jurado</p>
        <div className="space-y-2 mb-4">
          {JURY.map((j, i) => {
            const shown = i < revealed
            return (
              <div key={j.name} className="flex items-center gap-3 transition-opacity duration-500" style={{ opacity: shown ? 1 : 0.25 }}>
                <span className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0" style={{ background: j.color }}>{j.initials}</span>
                <span className="text-[13px] text-[var(--text-secondary)] flex-1">{j.name}</span>
                <span className="inline-flex items-center gap-1 text-[14px] font-extrabold tabular-nums" style={{ color: shown ? 'var(--ink)' : 'var(--text-faint)' }}>
                  <Star size={13} style={{ color: 'var(--gold)' }} fill="var(--gold)" />
                  {shown ? j.score : '—'}
                </span>
              </div>
            )
          })}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-[var(--border-subtle)]">
          <span className="text-[12px] font-semibold text-[var(--text-muted)]">Puntuación media</span>
          <span className="text-[22px] font-extrabold tabular-nums" style={{ color: 'var(--brand)' }}>
            {avg.toFixed(2)}<span className="text-[12px] text-[var(--text-faint)] font-medium">/100</span>
          </span>
        </div>
      </div>
    </div>
  )
}
