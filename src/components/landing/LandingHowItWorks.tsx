import { Settings2, Camera, Trophy } from 'lucide-react'

const STEPS = [
  { n: '01', Icon: Settings2, title: 'Crea tu liga', desc: 'Elige nombre, reglas, jornadas y jurado. En minutos, sin código.' },
  { n: '02', Icon: Camera, title: 'Suben sus fotos', desc: 'Participantes suben desde el móvil con un QR o link. Sin instalar nada.' },
  { n: '03', Icon: Trophy, title: 'Vota y rankea', desc: 'El jurado puntúa, Ranquea promedia y el ranking se actualiza en directo.' },
]

export function LandingHowItWorks() {
  return (
    <section id="como-funciona" className="py-24 border-t border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16 reveal">
          <p className="text-[12px] font-bold tracking-[0.18em] uppercase mb-4" style={{ color: 'var(--brand)' }}>
            Cómo funciona
          </p>
          <h2 className="text-[var(--ink)] text-[34px] sm:text-[44px] font-extrabold leading-[1.05] tracking-[-0.02em]">
            De la idea a la final<br />
            en <span style={{ color: 'var(--brand)' }}>tres pasos.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {STEPS.map(({ n, Icon, title, desc }, i) => (
            <div key={n} className="reveal relative" style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="rounded-2xl border border-[var(--border-subtle)] bg-white p-7 h-full" style={{ boxShadow: '0 1px 2px rgba(10,10,26,0.04)' }}>
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex w-12 h-12 items-center justify-center rounded-xl" style={{ background: 'var(--brand-100)', color: 'var(--brand)' }}>
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span className="text-[34px] font-extrabold leading-none" style={{ color: 'var(--brand-100)' }}>{n}</span>
                </div>
                <h3 className="text-[var(--ink)] text-[18px] font-bold mb-2">{title}</h3>
                <p className="text-[var(--text-muted)] text-[14px] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
