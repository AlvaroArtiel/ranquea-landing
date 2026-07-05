import { MockupFullProcess } from './mockups/MockupFullProcess'

const DEMO_REAL = 'https://miradasceuta.ranquea.com/ranking/general'

const POINTS = [
  'Suben la foto desde el móvil, sin instalar nada',
  'El jurado puntúa cada foto sobre 100',
  'La media se calcula y el ranking se actualiza solo',
  'Todo en tiempo real, sin hojas de cálculo',
]

export function LandingFeatureGallery() {
  return (
    <section id="participacion" className="py-24 border-t border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <p className="text-[12px] font-bold tracking-[0.18em] uppercase mb-4" style={{ color: 'var(--brand)' }}>
              El proceso, de principio a fin
            </p>
            <h3 className="text-[var(--ink)] text-[32px] sm:text-[42px] font-extrabold leading-[1.05] tracking-[-0.02em] mb-6">
              De la foto al ranking<br />
              <span style={{ color: 'var(--brand)' }}>en segundos.</span>
            </h3>
            <p className="text-[var(--text-secondary)] text-[16px] leading-relaxed mb-8">
              Un participante sube su foto, el jurado la puntúa y el ranking se reordena al
              instante. Ranquea se encarga de todo el cálculo por ti.
            </p>
            <ul className="space-y-3 mb-8">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span style={{ color: 'var(--brand)' }} className="mt-0.5 font-bold">✓</span>
                  <span className="text-[var(--text-secondary)] text-[15px]">{p}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:desarrollo@ceustack.com?subject=Quiero%20una%20demo%20de%20Ranquea"
                className="inline-block px-5 py-2.5 rounded-lg font-semibold text-[14px] transition-transform hover:-translate-y-0.5 text-center"
                style={{ background: 'var(--brand)', color: 'var(--on-brand)' }}
              >
                Solicita tu demo
              </a>
              <a
                href={DEMO_REAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2.5 rounded-lg font-semibold text-[14px] border border-[var(--border)] text-[var(--ink)] hover:border-[var(--brand)] hover:text-[var(--brand)] transition-colors text-center"
              >
                Ver demo real →
              </a>
            </div>
          </div>

          <div className="reveal flex justify-center">
            <MockupFullProcess />
          </div>
        </div>
      </div>
    </section>
  )
}
