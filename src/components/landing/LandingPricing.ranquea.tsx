import { Check } from 'lucide-react'

type PlanType = 'starter' | 'pro'

const STARTER_FEATURES = [
  'Crear 3 ligas',
  'Hasta 100 fotos por liga',
  'Votación abierta',
  'Rankings básicos',
  'Soporte por email',
] as const

const PRO_FEATURES = [
  'Ligas ilimitadas',
  'Hasta 5000 fotos por liga',
  'Votación privada o pública',
  'Rankings avanzados + analytics',
  'Badges personalizables',
  'Soporte prioritario',
  'API pública incluida',
] as const

export function LandingPricing() {
  return (
    <section id="precios" className="py-24 border-t border-border-subtle">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold tracking-[0.24em] uppercase mb-3" style={{ color: 'var(--color-accent)' }}>
            Precios
          </p>
          <h2 className="text-text-primary text-[36px] sm:text-[44px] font-extrabold leading-[1.05] tracking-[-0.02em] mb-3">
            Elige tu plan.
          </h2>
          <p className="text-text-muted text-[15px]">
            14 días de prueba gratuita. Sin tarjeta de crédito. Cancela cuando quieras.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Starter */}
          <div className="bg-surface-1 border border-border-subtle rounded-2xl p-7 flex flex-col">
            <p className="text-text-muted text-[12px] font-bold uppercase tracking-widest mb-4">Starter</p>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-text-primary text-[44px] font-extrabold leading-none tabular-nums">9,90€</span>
              <span className="text-text-faint text-[13px]">/mes</span>
            </div>
            <p className="text-[12px] font-semibold mb-6" style={{ color: 'var(--color-accent)' }}>
              14 días gratis
            </p>
            <ul className="text-text-muted text-[13px] leading-loose mb-7 flex-1 flex flex-col gap-1.5">
              {STARTER_FEATURES.map(f => (
                <li key={f} className="flex items-start gap-2">
                  <Check size={14} aria-hidden="true" className="mt-1 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button
              className="w-full py-3 rounded-xl font-bold text-[13px] border border-border text-text-secondary bg-surface-2 disabled:opacity-60 hover:border-[var(--color-accent-border)] hover:text-text-primary transition-colors"
            >
              Empezar gratis
            </button>
          </div>

          {/* Pro */}
          <div
            className="rounded-2xl p-7 flex flex-col relative border-2"
            style={{ borderColor: 'var(--color-accent-border)', background: 'var(--color-accent-faint)' }}
          >
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-extrabold tracking-widest"
              style={{ background: 'var(--color-accent)', color: 'var(--color-on-accent)' }}
            >
              RECOMENDADO
            </div>
            <p className="text-[12px] font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--color-accent)' }}>
              Pro
            </p>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-text-primary text-[44px] font-extrabold leading-none tabular-nums">29,90€</span>
              <span className="text-text-faint text-[13px]">/mes</span>
            </div>
            <p className="text-[12px] font-semibold mb-6" style={{ color: 'var(--color-accent)' }}>
              14 días gratis
            </p>
            <ul className="text-text-secondary text-[13px] leading-loose mb-7 flex-1 flex flex-col gap-1.5">
              {PRO_FEATURES.map(f => (
                <li key={f} className="flex items-start gap-2">
                  <Check size={14} aria-hidden="true" className="mt-1 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button
              className="w-full py-3 rounded-xl font-bold text-[14px] disabled:opacity-60 transition-transform hover:-translate-y-0.5"
              style={{ background: 'var(--color-accent)', color: 'var(--color-on-accent)' }}
            >
              Empezar gratis →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
