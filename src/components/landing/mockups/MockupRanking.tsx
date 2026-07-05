import { useEffect, useRef, useState } from 'react'
import { Trophy } from 'lucide-react'

type Row = { id: string; initials: string; name: string; pts: number; color: string }

/* Datos basados en el caso real (Liga Miradas), participantes anónimos */
const FINAL: Row[] = [
  { id: 'a', initials: 'A7', name: 'Participante #07', pts: 642.0, color: '#5B3FFF' },
  { id: 'b', initials: 'B2', name: 'Participante #12', pts: 633.99, color: '#3D7BFF' },
  { id: 'c', initials: 'C3', name: 'Participante #03', pts: 630.01, color: '#E24B4A' },
  { id: 'd', initials: 'D1', name: 'Participante #21', pts: 614.65, color: '#16A34A' },
  { id: 'e', initials: 'E5', name: 'Participante #15', pts: 597.35, color: '#FFB400' },
]

/* Estado inicial: el 3º va por delante, para luego "actualizar" en vivo */
const START: Row[] = [FINAL[2], FINAL[0], FINAL[1], FINAL[3], FINAL[4]]

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false)
  useEffect(() => {
    setReduce(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])
  return reduce
}

export function MockupRanking() {
  const reduce = usePrefersReducedMotion()
  const [rows, setRows] = useState<Row[]>(reduce ? FINAL : START)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (reduce) { setRows(FINAL); return }
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) { setRows(FINAL); return }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setRows(FINAL), 700)
          obs.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [reduce])

  const max = Math.max(...FINAL.map((r) => r.pts))

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-[var(--border-subtle)] bg-white p-5 sm:p-6"
      style={{ boxShadow: '0 24px 60px -20px rgba(91,63,255,0.28)' }}
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span className="inline-flex w-8 h-8 items-center justify-center rounded-lg" style={{ background: 'var(--brand-100)', color: 'var(--brand)' }}>
            <Trophy size={16} aria-hidden="true" />
          </span>
          <div>
            <p className="text-[13px] font-bold text-[var(--ink)] leading-tight">Ranking general</p>
            <p className="text-[11px] text-[var(--text-faint)] leading-tight">Temporada 2025-2026</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2 py-1 rounded-full" style={{ background: 'var(--leaf-soft)', color: 'var(--leaf)' }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--leaf)' }} />
          En directo
        </span>
      </div>

      <div className="space-y-2">
        {rows.map((r, i) => (
          <div
            key={r.id}
            className="flex items-center gap-3 p-2.5 rounded-xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ background: i === 0 ? 'var(--brand-faint)' : 'var(--surface-soft)' }}
          >
            <span className="w-6 text-center font-extrabold text-[14px]" style={{ color: i === 0 ? 'var(--brand)' : 'var(--text-faint)' }}>{i + 1}</span>
            <span className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0" style={{ background: r.color }}>{r.initials}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-[var(--ink)] truncate">{r.name}</p>
              <div className="h-1.5 rounded-full mt-1 bg-[var(--surface-2)] overflow-hidden">
                <div className="h-full rounded-full transition-all duration-700" style={{ width: `${(r.pts / max) * 100}%`, background: i === 0 ? 'var(--brand)' : 'var(--text-faint)' }} />
              </div>
            </div>
            <span className="text-[13px] font-extrabold text-[var(--ink)] tabular-nums">
              {r.pts.toFixed(0)}<span className="text-[10px] font-medium text-[var(--text-faint)] ml-0.5">pts</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
