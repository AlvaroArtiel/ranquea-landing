import { useEffect, useRef, useState } from 'react'
import { Check, Star, Upload, Gavel, Trophy } from 'lucide-react'
import { PHOTOS } from './photos'

/* Proceso completo encadenado y animado:
   1) Subir foto  ->  2) Jurado puntúa (media en vivo)  ->  3) Se actualiza el ranking
   El panel reserva una altura mínima (la de la etapa más alta) para no empujar la
   página al cambiar de etapa. Sin overflow-hidden: si algo crece, se ve, no se corta. */

type Stage = 'upload' | 'jury' | 'ranking'
const STAGES: { key: Stage; Icon: typeof Upload; label: string }[] = [
  { key: 'upload', Icon: Upload, label: 'Subir foto' },
  { key: 'jury', Icon: Gavel, label: 'Jurado vota' },
  { key: 'ranking', Icon: Trophy, label: 'Ranking' },
]

const JURY = [88, 94, 91]
const AVG = JURY.reduce((a, b) => a + b, 0) / JURY.length

type Row = { id: string; initials: string; pts: number; color: string; isNew?: boolean }
const RANK_BEFORE: Row[] = [
  { id: 'a', initials: 'A7', pts: 642, color: '#5B3FFF' },
  { id: 'b', initials: 'B2', pts: 634, color: '#3D7BFF' },
  { id: 'c', initials: 'C3', pts: 630, color: '#E24B4A' },
]
const NEW_ROW: Row = { id: 'me', initials: 'TÚ', pts: 637, color: '#16A34A', isNew: true }

function reduceMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function MockupFullProcess() {
  const [stage, setStage] = useState<Stage>('upload')
  const [progress, setProgress] = useState(0)
  const [votes, setVotes] = useState(0)
  const [avg, setAvg] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const photo = PHOTOS[3]

  useEffect(() => {
    if (reduceMotion()) {
      setStage('ranking'); setProgress(100); setVotes(JURY.length); setAvg(AVG)
      return
    }
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) {
      setStage('ranking'); setProgress(100); setVotes(JURY.length); setAvg(AVG)
      return
    }

    const timers: number[] = []
    const run = () => {
      setStage('upload'); setProgress(0); setVotes(0); setAvg(0)

      let p = 0
      const up = window.setInterval(() => {
        p += 4
        setProgress(Math.min(100, p))
        if (p >= 100) {
          clearInterval(up)
          timers.push(window.setTimeout(() => setStage('jury'), 700))
        }
      }, 40)
      timers.push(up)

      JURY.forEach((_, i) => {
        timers.push(window.setTimeout(() => setVotes(i + 1), 3200 + i * 700))
      })
      timers.push(window.setTimeout(() => {
        let cur = 0
        const tick = () => {
          cur += AVG / 24
          if (cur >= AVG) { setAvg(AVG); return }
          setAvg(cur); requestAnimationFrame(tick)
        }
        tick()
      }, 3200 + JURY.length * 700))

      timers.push(window.setTimeout(() => setStage('ranking'), 5800))
      timers.push(window.setTimeout(run, 9500))
    }

    const obs = new IntersectionObserver((e) => {
      if (e[0].isIntersecting) { run(); obs.disconnect() }
    }, { threshold: 0.35 })
    obs.observe(el)
    return () => { timers.forEach(clearTimeout); timers.forEach(clearInterval); obs.disconnect() }
  }, [])

  const ranking = [...RANK_BEFORE, NEW_ROW].sort((a, b) => b.pts - a.pts)
  const maxPts = Math.max(...ranking.map((r) => r.pts))
  const stageIdx = STAGES.findIndex((s) => s.key === stage)

  return (
    <div ref={ref} className="w-full max-w-[400px] rounded-2xl border border-[var(--border-subtle)] bg-white overflow-hidden" style={{ boxShadow: '0 30px 70px -25px rgba(91,63,255,0.38)' }}>
      <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-[var(--border-subtle)]">
        {STAGES.map((s, i) => {
          const active = i <= stageIdx
          return (
            <div key={s.key} className="flex items-center gap-1.5">
              <span className="w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-500" style={{ background: active ? 'var(--brand)' : 'var(--surface-2)', color: active ? '#fff' : 'var(--text-faint)' }}>
                <s.Icon size={14} />
              </span>
              <span className="text-[11px] font-semibold hidden sm:inline" style={{ color: active ? 'var(--ink)' : 'var(--text-faint)' }}>{s.label}</span>
              {i < STAGES.length - 1 && <span className="w-4 sm:w-6 h-px mx-1" style={{ background: i < stageIdx ? 'var(--brand)' : 'var(--border-subtle)' }} />}
            </div>
          )
        })}
      </div>

      <div className="px-5 pt-4">
        <div className="aspect-[16/10] rounded-xl overflow-hidden relative flex items-end" style={{ background: photo.css }}>
          {stage !== 'upload' && (
            <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center" style={{ animation: 'badge-pop 0.4s ease' }}>
              <Check size={15} style={{ color: 'var(--leaf)' }} />
            </div>
          )}
          <div className="w-full p-3 bg-gradient-to-t from-black/55 to-transparent">
            <p className="text-white text-[12px] font-bold leading-tight">{photo.title}</p>
            <p className="text-white/80 text-[10px]">por Tú</p>
          </div>
        </div>
      </div>

      <div className="px-5 py-4 min-h-[224px]">
        {stage === 'upload' && (
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[12px] font-medium text-[var(--text-muted)]">Subiendo tu foto…</span>
              <span className="text-[12px] font-bold" style={{ color: 'var(--brand)' }}>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 rounded-full bg-[var(--surface-2)] overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${progress}%`, background: 'var(--brand)' }} />
            </div>
            <p className="text-[11px] text-[var(--text-faint)] mt-3">Desde el móvil, sin instalar nada.</p>
          </div>
        )}

        {stage === 'jury' && (
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-faint)] mb-2.5">El jurado puntúa</p>
            <div className="flex items-center justify-between mb-3">
              <div className="flex -space-x-1.5">
                {['#5B3FFF', '#3D7BFF', '#16A34A'].map((c, i) => (
                  <span key={c} className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white transition-opacity duration-300" style={{ background: c, opacity: i < votes ? 1 : 0.3 }}>
                    {i < votes ? JURY[i] : '·'}
                  </span>
                ))}
              </div>
              <div className="text-right">
                <p className="text-[10px] text-[var(--text-muted)] leading-none mb-0.5">Media en vivo</p>
                <p className="text-[20px] font-extrabold leading-none tabular-nums" style={{ color: 'var(--brand)' }}>
                  {avg.toFixed(1)}<span className="text-[11px] text-[var(--text-faint)] font-medium">/100</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-[var(--text-muted)]">
              <Star size={12} style={{ color: 'var(--gold)' }} fill="var(--gold)" />
              {votes}/{JURY.length} miembros han votado
            </div>
          </div>
        )}

        {stage === 'ranking' && (
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-faint)]">Ranking actualizado</span>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-1.5 py-0.5 rounded-full" style={{ background: 'var(--leaf-soft)', color: 'var(--leaf)' }}>
                <span className="w-1 h-1 rounded-full animate-pulse" style={{ background: 'var(--leaf)' }} />En vivo
              </span>
            </div>
            <div className="space-y-1.5">
              {ranking.map((r, i) => (
                <div key={r.id} className="flex items-center gap-2.5 p-1.5 rounded-lg transition-all duration-700" style={{ background: r.isNew ? 'var(--leaf-soft)' : 'transparent', outline: r.isNew ? '1.5px solid var(--leaf)' : 'none' }}>
                  <span className="w-4 text-center text-[12px] font-extrabold" style={{ color: i === 0 ? 'var(--brand)' : 'var(--text-faint)' }}>{i + 1}</span>
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0" style={{ background: r.color }}>{r.initials}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-[var(--surface-2)] overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-700" style={{ width: `${(r.pts / maxPts) * 100}%`, background: r.isNew ? 'var(--leaf)' : i === 0 ? 'var(--brand)' : 'var(--text-faint)' }} />
                  </div>
                  <span className="text-[11px] font-extrabold tabular-nums text-[var(--ink)]">{r.pts}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
