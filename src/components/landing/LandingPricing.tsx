import { Check } from 'lucide-react'

const DEMO_REAL = 'https://miradasceuta.ranquea.com/ranking/general'

const INCLUDED = [
  'Ligas y jornadas ilimitadas a tu medida',
  'Jurado, votación y rankings en directo',
  'Galerías públicas con tu marca y logo',
  'Moderación, logros y analítica',
  'Acompañamiento en el lanzamiento',
]

export function LandingPricing() {
  return (
    <section id="planes" className="py-24 border-t border-[var(--border-subtle)]">
      <div className="max-w-4xl mx-auto px-5">
        <div className="rounded-3xl border border-[var(--border-subtle)] bg-white overflow-hidden reveal" style={{ boxShadow: '0 30px 70px -30px rgba(91,63,255,0.3)' }}>
          <div className="grid md:grid-cols-2">
            {/* Izquierda: pitch */}
            <div className="p-8 sm:p-10">
              <p className="text-[12px] font-bold tracking-[0.18em] uppercase mb-3" style={{ color: 'var(--brand)' }}>
                Planes a medida
              </p>
              <h2 className="text-[var(--ink)] text-[30px] sm:text-[36px] font-extrabold leading-[1.08] tracking-[-0.02em] mb-4">
                Te preparamos un plan<br />
                <span style={{ color: 'var(--brand)' }}>para tu liga.</span>
              </h2>
              <p className="text-[var(--text-secondary)] text-[16px] leading-relaxed mb-7">
                Cada liga es distinta. Cuéntanos cómo es la tuya y te armamos una propuesta
                a tu medida, sin compromiso.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:desarrollo@ceustack.com?subject=Quiero%20un%20plan%20para%20mi%20liga"
                  className="inline-block px-6 py-3 rounded-xl font-bold text-[15px] transition-transform hover:-translate-y-0.5 text-center"
                  style={{ background: 'var(--brand)', color: 'var(--on-brand)' }}
                >
                  Solicita tu demo
                </a>
                <a
                  href={DEMO_REAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-xl font-semibold text-[15px] border border-[var(--border)] text-[var(--ink)] hover:border-[var(--brand)] hover:text-[var(--brand)] transition-colors text-center"
                >
                  Ver demo real →
                </a>
              </div>
            </div>

            {/* Derecha: qué incluye */}
            <div className="p-8 sm:p-10 bg-[var(--surface-soft)] border-t md:border-t-0 md:border-l border-[var(--border-subtle)]">
              <p className="text-[var(--text-faint)] text-[11px] uppercase tracking-[0.16em] font-semibold mb-5">
                Siempre incluido
              </p>
              <ul className="flex flex-col gap-3.5">
                {INCLUDED.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'var(--brand-100)' }}>
                      <Check size={12} style={{ color: 'var(--brand)' }} />
                    </span>
                    <span className="text-[var(--text-secondary)] text-[14px] leading-snug">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
