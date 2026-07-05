import { Zap, Users, Camera, Trophy, BarChart3, Award, Lock, Share2 } from 'lucide-react'

const FEATURES = [
  { Icon: Zap, title: 'Crear en minutos', desc: 'Plantillas prediseñadas. Configura nombre, reglas, jornadas y listo.' },
  { Icon: Users, title: 'Invita participantes', desc: 'QR personalizado, short link o invitación directa. Sin app, sin registro.' },
  { Icon: Camera, title: 'Sube y vota en directo', desc: 'Participantes suben fotos desde móvil. El jurado vota en tiempo real.' },
  { Icon: Trophy, title: 'Rankings dinámicos', desc: 'Los puntos se actualizan automáticamente. Cada uno ve su posición.' },
  { Icon: BarChart3, title: 'Analítica visual', desc: 'Quién participa, cuándo y cuántas fotos. Gráficos en tiempo real.' },
  { Icon: Award, title: 'Badges y premios', desc: 'Define tus reglas de gamificación. Crea premios personalizados.' },
  { Icon: Lock, title: 'Moderación inteligente', desc: 'Revisa fotos antes de que aparezcan. Filtros automáticos opcionales.' },
  { Icon: Share2, title: 'Galerías públicas', desc: 'Galería embebible en tu web. Descarga resultados y certificados.' },
] as const

export function LandingFeatureGrid() {
  return (
    <section id="funciones" className="py-24 bg-[var(--surface-soft)] border-t border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14 reveal">
          <p className="text-[12px] font-bold tracking-[0.18em] uppercase mb-4" style={{ color: 'var(--brand)' }}>
            Capacidades
          </p>
          <h2 className="text-[var(--ink)] text-[34px] sm:text-[44px] font-extrabold leading-[1.05] tracking-[-0.02em]">
            Todo lo que necesitas<br />
            para <span style={{ color: 'var(--brand)' }}>ligas épicas.</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-[16px] leading-relaxed mt-5 max-w-xl mx-auto">
            Retos, jornadas, galerías, votación, rankings, badges, premios y analítica. Sin límites.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 reveal">
          {FEATURES.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-[var(--border-subtle)] bg-white p-5 flex flex-col gap-3 transition-all hover:-translate-y-1 hover:border-[var(--brand-border)]"
              style={{ boxShadow: '0 1px 2px rgba(10,10,26,0.04)' }}
            >
              <span
                className="inline-flex w-10 h-10 items-center justify-center rounded-xl flex-shrink-0"
                style={{ background: 'var(--brand-100)', color: 'var(--brand)' }}
              >
                <Icon size={19} aria-hidden="true" />
              </span>
              <div>
                <p className="text-[var(--ink)] text-[14px] font-bold mb-1">{title}</p>
                <p className="text-[var(--text-muted)] text-[13px] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
