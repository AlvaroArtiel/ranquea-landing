const TESTIMONIALS = [
  {
    quote: 'Aumentamos la participación un 300% en nuestro reto fotográfico. Los rankings engancharon a todo el mundo.',
    author: 'María G.',
    role: 'Directora de Turismo',
    color: '#5B3FFF',
  },
  {
    quote: 'Justo lo que necesitábamos para dinamizar el equipo. Fácil, rápido, y los empleados lo adoraron.',
    author: 'Carlos L.',
    role: 'HR Manager',
    color: '#3D7BFF',
  },
  {
    quote: 'Nuestros alumnos sacaron fotos increíbles. Ranquea hizo la competición justa y emocionante.',
    author: 'Juan M.',
    role: 'Escuela de Fotografía',
    color: '#16A34A',
  },
]

export function LandingTestimonials() {
  return (
    <section className="py-24 bg-[var(--surface-soft)] border-t border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14 reveal">
          <h2 className="text-[var(--ink)] text-[34px] sm:text-[44px] font-extrabold leading-[1.05] tracking-[-0.02em]">
            Quien lo usa, lo recomienda
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
          {TESTIMONIALS.map(({ quote, author, role, color }) => (
            <div key={author} className="rounded-2xl border border-[var(--border-subtle)] bg-white p-6 flex flex-col">
              <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed mb-5 flex-1">"{quote}"</p>
              <div className="flex items-center gap-3">
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-bold text-white"
                  style={{ background: color }}
                >
                  {author.charAt(0)}
                </span>
                <div>
                  <p className="text-[var(--ink)] text-[13px] font-bold">{author}</p>
                  <p className="text-[var(--text-faint)] text-[12px]">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
