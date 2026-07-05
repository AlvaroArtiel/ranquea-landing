import { useEffect, useRef, useState } from 'react'
import { Trophy, Bell, Star, Crown } from 'lucide-react'
import { PHOTOS } from './photos'

type Row = { id: string; initials: string; name: string; pts: number; color: string }

const BASE: Row[] = [
  { id: 'a', initials: 'A7', name: 'Participante #07', pts: 638, color: '#5B3FFF' },
  { id: 'b', initials: 'B2', name: 'Participante #12', pts: 634, color: '#3D7BFF' },
  { id: 'c', initials: 'C3', name: 'Participante #03', pts: 630, color: '#E24B4A' },
  { id: 'd', initials: 'D1', name: 'Participante #21', pts: 615, color: '#16A34A' },
  { id: 'e', initials: 'E5', name: 'Participante #15', pts: 597, color: '#FFB400' },
]

type Toast = { id: number; kind: 'photo' | 'vote' | 'badge'; text: string; sub: string }

const SCRIPT: Omit<Toast, 'id'>[] = [
  { kind: 'photo', text: 'Nueva foto subida', sub: '"Amenazas" · Participante #07' },
  { kind: 'vote', text: 'El jurado ha votado', sub: 'Media actualizada: 91/100' },
  { kind: 'badge', text: '¡Logro desbloqueado!', sub: 'Primer lugar de la jornada' },
]

function reduceMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function MockupHeroDashboard() {
  const [rows, setRows] = useState<Row[]>(BASE)
  const [toasts, setToasts] = useState<Toast[]>([])
  const [bump, setBump] = useState<string | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const tid = useRef(0)

  useEffect(() => {
    if (reduceMotion()) {
      setToasts([{ id: 1, ...SCRIPT[2] }])
      return
    }
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return

    const timers: number[] = []
    let step = 0

    const cycle = () => {
      const s = SCRIPT[step % SCRIPT.length]
      const id = ++tid.current
      setToasts((t) => [...t, { id, ...s }].slice(-2))
      timers.push(window.setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3200))

      if (s.kind === 'vote') {
        // sube el #2 al #1 (intercambio) y resalta
        setRows((prev) => {
          const next = [...prev]
          if (next[1].pts < next[0].pts) {
            next[1] = { ...next[1], pts: next[0].pts + 5 }
          }
          next.sort((a, b) => b.pts - a.pts)
          return next
        })
        setBump('b')
        timers.push(window.setTimeout(() => setBump(null), 1400))
      }
      if (s.kind === 'badge') {
        timers.push(window.setTimeout(() => setRows(BASE), 1800))
      }
      step++
    }

    const obs = new IntersectionObserver((e) => {
      if (e[0].isIntersecting) {
        cycle()
        const iv = window.setInterval(cycle, 3400)
        timers.push(iv)
        obs.disconnect()
      }
    }, { threshold: 0.3 })
    obs.observe(el)

    return () => { timers.forEach(clearTimeout); timers.forEach(clearInterval); obs.disconnect() }
  }, [])

  const max = Math.max(...rows.map((r) => r.pts))
  const winner = PHOTOS[0]

  return (
    <div ref={ref} className="relative">
      {/* Tarjeta principal: dashboard */}
      <div className="rounded-2xl border border-[var(--border-subtle)] bg-white overflow-hidden" style={{ boxShadow: '0 40px 90px -30px rgba(91,63,255,0.4)' }}>
        {/* barra de ventana */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[var(--border-subtle)] bg-[var(--surface-soft)]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          <span className="ml-3 text-[11px] text-[var(--text-faint)] font-medium">miradasceuta.ranquea.com</span>
        </div>

        <div className="p-4 sm:p-5">
          {/* cabecera ranking */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex w-8 h-8 items-center justify-center rounded-lg" style={{ background: 'var(--brand-100)', color: 'var(--brand)' }}>
                <Trophy size={16} aria-hidden="true" />
              </span>
              <div>
                <p className="text-[13px] font-bold text-[var(--ink)] leading-tight">Ranking general</p>
                <p className="text-[11px] text-[var(--text-faint)] leading-tight">28 participantes · 8 jornadas</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2 py-1 rounded-full" style={{ background: 'var(--leaf-soft)', color: 'var(--leaf)' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--leaf)' }} />
              En directo
            </span>
          </div>

          {/* filas */}
          <div className="space-y-2">
            {rows.map((r, i) => (
              <div
                key={r.id}
                className="flex items-center gap-3 p-2.5 rounded-xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  background: i === 0 ? 'var(--brand-faint)' : 'var(--surface-soft)',
                  outline: bump === r.id ? '2px solid var(--brand)' : '2px solid transparent',
                }}
              >
                <span className="w-5 text-center font-extrabold text-[14px]" style={{ color: i === 0 ? 'var(--brand)' : 'var(--text-faint)' }}>{i + 1}</span>
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0" style={{ background: r.color }}>{r.initials}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-semibold text-[var(--ink)] truncate">{r.name}</p>
                  <div className="h-1.5 rounded-full mt-1 bg-[var(--surface-2)] overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-700" style={{ width: `${(r.pts / max) * 100}%`, background: i === 0 ? 'var(--brand)' : 'var(--text-faint)' }} />
                  </div>
                </div>
                <span className="text-[13px] font-extrabold text-[var(--ink)] tabular-nums">{r.pts}<span className="text-[10px] font-medium text-[var(--text-faint)] ml-0.5">pts</span></span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Foto ganadora flotante (esquina sup. izq.) */}
      <div className="hidden sm:block absolute -top-5 -left-6 w-36 rounded-xl overflow-hidden border-2 bg-white" style={{ borderColor: 'var(--gold)', boxShadow: '0 16px 40px -12px rgba(255,180,0,0.55)', animation: reduceMotion() ? undefined : 'photo-reveal 0.6s ease' }}>
        <div className="aspect-[4/3] relative flex items-end" style={{ background: winner.css }}>
          <span className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'var(--gold)' }}>
            <Crown size={12} className="text-white" />
          </span>
        </div>
        <div className="px-2 py-1.5 flex items-center justify-between">
          <span className="text-[10px] font-bold text-[var(--ink)] truncate">{winner.title}</span>
          <span className="inline-flex items-center gap-0.5 text-[10px] font-extrabold" style={{ color: 'var(--gold)' }}>
            <Star size={9} fill="currentColor" />91
          </span>
        </div>
      </div>

      {/* Toasts / notificaciones */}
      <div className="absolute -bottom-4 -right-3 sm:-right-6 flex flex-col gap-2 w-[230px] pointer-events-none" aria-hidden="true">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="flex items-center gap-2.5 rounded-xl bg-white border border-[var(--border-subtle)] px-3 py-2.5"
            style={{ boxShadow: '0 12px 30px -10px rgba(10,10,26,0.2)', animation: reduceMotion() ? undefined : 'fade-slide-up 0.4s ease' }}
          >
            <span
              className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background: t.kind === 'badge' ? 'var(--gold-soft)' : 'var(--brand-100)',
                color: t.kind === 'badge' ? 'var(--gold)' : 'var(--brand)',
              }}
            >
              {t.kind === 'photo' ? <Bell size={14} /> : t.kind === 'vote' ? <Star size={14} fill="currentColor" /> : <Trophy size={14} />}
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-[var(--ink)] leading-tight truncate">{t.text}</p>
              <p className="text-[10px] text-[var(--text-muted)] leading-tight truncate">{t.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
