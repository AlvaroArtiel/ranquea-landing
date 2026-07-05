import { Counter } from './mockups/Counter'

const STATS = [
  { value: 28, suffix: '', label: 'Participantes por liga' },
  { value: 8, suffix: '', label: 'Jornadas por temporada' },
  { value: 48, suffix: '', label: 'Votos del jurado al mes' },
  { value: 100, suffix: '%', label: 'Personalizable' },
]

export function LandingStats() {
  return (
    <section className="py-20 bg-[var(--surface-soft)] border-t border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 reveal">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-[40px] sm:text-[52px] font-extrabold leading-none tracking-tight" style={{ color: 'var(--brand)' }}>
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="text-[var(--text-muted)] text-[14px] mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
