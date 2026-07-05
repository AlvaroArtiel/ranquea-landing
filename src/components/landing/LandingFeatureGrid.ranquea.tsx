import {
  Trophy, TrendingUp, Award, Shield, Layers, BarChart3, Share2, Code,
} from 'lucide-react'

const FEATURES = [
  {
    Icon: Trophy,
    title: 'Ligas temáticas',
    desc: 'Crea ligas privadas o públicas con reglas personalizadas',
    color: 'var(--color-accent)',
    bg: 'var(--color-accent-faint)',
  },
  {
    Icon: TrendingUp,
    title: 'Rankings en vivo',
    desc: 'Leaderboard actualizado en tiempo real mientras votan',
    color: 'var(--color-accent)',
    bg: 'var(--color-accent-faint)',
  },
  {
    Icon: Award,
    title: 'Badges y logros',
    desc: 'Gana badges por victorias, votos y participación',
    color: 'var(--color-warning)',
    bg: 'var(--color-warning-faint)',
  },
  {
    Icon: Shield,
    title: 'Voto limpio',
    desc: 'Cada votación cuenta una sola vez, no hay bots',
    color: 'var(--color-leaf)',
    bg: 'var(--color-leaf-faint)',
  },
  {
    Icon: Layers,
    title: 'Categorías de fotos',
    desc: 'Categoriza por tema, formato, técnica',
    color: 'var(--color-accent)',
    bg: 'var(--color-accent-faint)',
  },
  {
    Icon: BarChart3,
    title: 'Resultados justos',
    desc: 'Estadísticas completas: votos, %, comentarios',
    color: 'var(--color-warning)',
    bg: 'var(--color-warning-faint)',
  },
  {
    Icon: Share2,
    title: 'Share social',
    desc: 'Comparte tu perfil y ligas en redes',
    color: 'var(--color-accent)',
    bg: 'var(--color-accent-faint)',
  },
  {
    Icon: Code,
    title: 'API pública',
    desc: 'Integra Ranquea en tu web o app',
    color: 'var(--color-leaf)',
    bg: 'var(--color-leaf-faint)',
  },
] as const

export function LandingFeatureGrid() {
  return (
    <section id="funciones" className="py-24 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <p
            className="text-[11px] font-bold tracking-[0.28em] uppercase mb-4"
            style={{ color: 'var(--color-accent)' }}
          >
            Todas las herramientas
          </p>
          <h2 className="text-text-primary text-[36px] sm:text-[44px] font-extrabold leading-[1.05] tracking-[-0.02em]">
            Una plataforma.<br />
            <span style={{ color: 'var(--color-accent)' }}>Ocho superpoderes.</span>
          </h2>
          <p className="text-text-muted text-[15px] leading-relaxed mt-5 max-w-xl mx-auto">
            Todo lo que necesitas para crear, gestionar y ganar en ligas fotográficas. Sin límites, sin complicaciones.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map(({ Icon, title, desc, color, bg }) => (
            <div
              key={title}
              className="rounded-2xl border border-border-subtle bg-surface-1 p-5 flex flex-col gap-3 hover:border-[var(--color-accent-border)] transition-colors"
            >
              <span
                className="inline-flex w-9 h-9 items-center justify-center rounded-xl flex-shrink-0"
                style={{ background: bg, color }}
              >
                <Icon size={18} aria-hidden="true" />
              </span>
              <div>
                <p className="text-text-primary text-[13px] font-bold mb-1">{title}</p>
                <p className="text-text-muted text-[12px] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
