import { Briefcase, Users, Award, BookOpen } from 'lucide-react'

const USE_CASES = [
  {
    Icon: Briefcase,
    title: 'Fotógrafos profesionales',
    desc: 'Compila tu portafolio, gana credibilidad y atrae clientes mostrando tus victorias en ligas competitivas.',
  },
  {
    Icon: Users,
    title: 'Comunidades temáticas',
    desc: 'Crea ligas de naturaleza, street, retrato o lo que quieras. Conecta con fotógrafos del mundo con tus intereses.',
  },
  {
    Icon: Award,
    title: 'Torneos corporativos',
    desc: 'Organiza competiciones en tu empresa, evento o conferencia fotográfica. Genera engagement real.',
  },
  {
    Icon: BookOpen,
    title: 'Educación fotográfica',
    desc: 'Academias y cursos usan Ranquea para que sus alumnos practiquen, compitan y aprendan de otros.',
  },
]

export function LandingUseCases() {
  return (
    <section id="casos-uso" className="py-24 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <p
            className="text-[11px] font-bold tracking-[0.28em] uppercase mb-4"
            style={{ color: 'var(--color-accent)' }}
          >
            Casos de uso
          </p>
          <h2 className="text-text-primary text-[36px] sm:text-[44px] font-extrabold leading-[1.05] tracking-[-0.02em]">
            Para todo tipo de fotógrafos
          </h2>
          <p className="text-text-muted text-[15px] leading-relaxed mt-5 max-w-xl mx-auto">
            Desde profesionales hasta principiantes, todos encuentran valor en Ranquea.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {USE_CASES.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-border-subtle bg-surface-1 p-8 flex flex-col gap-4 hover:border-[var(--color-accent-border)] transition-colors"
            >
              <span
                className="inline-flex w-12 h-12 items-center justify-center rounded-xl flex-shrink-0"
                style={{ background: 'var(--color-accent-faint)', color: 'var(--color-accent)' }}
              >
                <Icon size={24} aria-hidden="true" />
              </span>
              <div>
                <p className="text-text-primary text-[16px] font-bold mb-2">{title}</p>
                <p className="text-text-muted text-[13px] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
