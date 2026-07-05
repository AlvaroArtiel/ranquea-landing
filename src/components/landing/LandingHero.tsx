import { MockupHeroDashboard } from './mockups/MockupHeroDashboard'

const DEMO_REAL = 'https://miradasceuta.ranquea.com/ranking/general'

export function LandingHero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 pb-24 sm:pt-36 sm:pb-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10 pointer-events-none">
        <div className="hero-gradient absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] rounded-[50%] opacity-[0.16] blur-3xl" />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none opacity-[0.5]"
        style={{
          backgroundImage: 'radial-gradient(var(--surface-2) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 40%, transparent 100%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-14 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[12px] font-semibold mb-6" style={{ background: 'var(--brand-100)', color: 'var(--brand-700)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--brand)' }} />
              Ligas fotográficas gamificadas
            </span>
            <h1 className="text-[var(--ink)] text-[42px] sm:text-[58px] lg:text-[64px] font-extrabold leading-[1.02] tracking-[-0.03em] mb-6">
              Convierte la fotografía<br />
              en una <span style={{ color: 'var(--brand)' }}>competición</span> que engancha.
            </h1>
            <p className="text-[var(--text-secondary)] text-[17px] sm:text-[19px] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-9">
              Crea ligas con retos, jornadas y votación de jurado. Rankings en directo,
              galerías públicas y logros. Sin código, sin instalar nada.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-5">
              <a
                href="mailto:desarrollo@ceustack.com?subject=Quiero%20una%20demo%20de%20Ranquea"
                className="px-7 py-3.5 rounded-xl font-bold text-[15px] transition-transform hover:-translate-y-0.5"
                style={{ background: 'var(--brand)', color: 'var(--on-brand)' }}
              >
                Solicita tu demo
              </a>
              <a
                href={DEMO_REAL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl font-semibold text-[15px] text-[var(--text-primary)] border border-[var(--border)] hover:border-[var(--brand)] hover:text-[var(--brand)] transition-colors text-center"
              >
                Ver demo real →
              </a>
            </div>
            <p className="text-[var(--text-faint)] text-[13px]">
              Te preparamos un plan a tu medida · Sin compromiso
            </p>
          </div>

          <div className="reveal">
            <MockupHeroDashboard />
          </div>
        </div>
      </div>
    </section>
  )
}
