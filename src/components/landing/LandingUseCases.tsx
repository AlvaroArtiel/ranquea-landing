import { Camera, Users2, MapPin, Briefcase, BookOpen, Sparkles } from 'lucide-react'

/* Protagonismo: grupos y asociaciones fotográficas. En segundo plano, el resto. */
const PRIMARY = [
  { Icon: Camera, title: 'Grupos y clubes de fotografía', desc: 'Organiza tu liga anual con jornadas, jurado y rankings. La forma moderna de mantener viva la comunidad.' },
  { Icon: Users2, title: 'Asociaciones fotográficas', desc: 'Concursos recurrentes, votación transparente y galerías públicas con tu marca. Sin papeleo ni hojas de cálculo.' },
]

const SECONDARY = [
  { Icon: MapPin, title: 'Turismo & Ciudades', desc: 'Ligas por barrios, monumentos y perspectivas.' },
  { Icon: Briefcase, title: 'Empresas & RR.HH', desc: 'Retos de equipo que suben el engagement.' },
  { Icon: BookOpen, title: 'Educación', desc: 'Talleres y competiciones entre aulas.' },
  { Icon: Sparkles, title: 'Marcas & Marketing', desc: 'Crowdsourcing de fotos que viraliza.' },
]

export function LandingUseCases() {
  return (
    <section id="casos" className="py-24 border-t border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14 reveal">
          <p className="text-[12px] font-bold tracking-[0.18em] uppercase mb-4" style={{ color: 'var(--brand)' }}>
            Construido para
          </p>
          <h2 className="text-[var(--ink)] text-[34px] sm:text-[44px] font-extrabold leading-[1.05] tracking-[-0.02em]">
            Hecho para quien vive<br />
            la <span style={{ color: 'var(--brand)' }}>fotografía.</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-[16px] leading-relaxed mt-5 max-w-xl mx-auto">
            Pensado primero para grupos y asociaciones fotográficas. Y válido para cualquier
            reto o competición.
          </p>
        </div>

        {/* Protagonistas */}
        <div className="grid md:grid-cols-2 gap-5 mb-5 reveal">
          {PRIMARY.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border-2 bg-white p-7 transition-all hover:-translate-y-1"
              style={{ borderColor: 'var(--brand-border)', boxShadow: '0 12px 30px -16px rgba(91,63,255,0.25)' }}
            >
              <span className="inline-flex w-12 h-12 items-center justify-center rounded-xl mb-4" style={{ background: 'var(--brand)', color: '#fff' }}>
                <Icon size={22} aria-hidden="true" />
              </span>
              <h3 className="text-[var(--ink)] text-[19px] font-bold mb-2">{title}</h3>
              <p className="text-[var(--text-muted)] text-[14px] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Secundarios */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 reveal">
          {SECONDARY.map(({ Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-soft)] p-5 transition-all hover:-translate-y-1 hover:border-[var(--brand-border)]">
              <span className="inline-flex w-9 h-9 items-center justify-center rounded-lg mb-3" style={{ background: 'var(--brand-100)', color: 'var(--brand)' }}>
                <Icon size={17} aria-hidden="true" />
              </span>
              <h3 className="text-[var(--ink)] text-[13px] font-bold mb-1">{title}</h3>
              <p className="text-[var(--text-muted)] text-[12px] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
