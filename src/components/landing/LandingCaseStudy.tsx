import { Crown, Users, CalendarDays, Flag } from 'lucide-react'
import { MockupTrend } from './mockups/MockupTrend'
import { PHOTOS } from './mockups/photos'

const FACTS = [
  { Icon: Users, value: '28', label: 'Participantes' },
  { Icon: CalendarDays, value: '8/8', label: 'Jornadas' },
  { Icon: Flag, value: '48', label: 'Votos / mes' },
]

export function LandingCaseStudy() {
  const winner = PHOTOS[0]
  return (
    <section className="py-24 bg-[var(--surface-soft)] border-t border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14 reveal">
          <p className="text-[12px] font-bold tracking-[0.18em] uppercase mb-4" style={{ color: 'var(--brand)' }}>
            Caso de éxito
          </p>
          <h2 className="text-[var(--ink)] text-[34px] sm:text-[44px] font-extrabold leading-[1.05] tracking-[-0.02em]">
            Liga Miradas: una temporada<br />
            completa en <span style={{ color: 'var(--brand)' }}>Ranquea.</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-[16px] leading-relaxed mt-5 max-w-2xl mx-auto">
            Una liga real de fotografía gestionó toda su temporada 2025-2026 con Ranquea:
            8 jornadas, jurado puntuando sobre 100 y rankings en directo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch reveal">
          {/* Ganador del mes */}
          <div className="rounded-2xl overflow-hidden border border-[var(--gold)] bg-white" style={{ boxShadow: '0 20px 50px -20px rgba(255,180,0,0.45)' }}>
            <div className="aspect-[16/9] relative flex items-end" style={{ background: winner.css }}>
              <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold text-white" style={{ background: 'var(--gold)' }}>
                <Crown size={13} /> Ganador del mes · Mayo 2026
              </span>
              <div className="w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-[20px] font-extrabold leading-tight">{winner.title}</p>
                <p className="text-white/85 text-[13px]">por {winner.author} · 91/100</p>
              </div>
            </div>
            <div className="grid grid-cols-3 divide-x divide-[var(--border-subtle)]">
              {FACTS.map(({ Icon, value, label }) => (
                <div key={label} className="p-4 text-center">
                  <Icon size={16} className="mx-auto mb-1.5" style={{ color: 'var(--brand)' }} aria-hidden="true" />
                  <p className="text-[20px] font-extrabold text-[var(--ink)] leading-none">{value}</p>
                  <p className="text-[11px] text-[var(--text-muted)] mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Evolución mensual */}
          <MockupTrend />
        </div>
      </div>
    </section>
  )
}
