const TESTIMONIALS = [
  {
    quote: 'Pasé de tener 5 clientes a 30 en 3 meses. Mis victorias en Ranquea me dan el portfolio que necesitaba para competir con estudio.',
    name: 'Elena T.',
    role: 'Fotógrafa de bodas',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop',
  },
  {
    quote: 'Nuestra comunidad de fotógrafos de naturaleza crece cada día. Ranquea nos dio el lugar para competir sin egos, solo fotos.',
    name: 'Marcos V.',
    role: 'Organizador de torneos',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop',
  },
  {
    quote: 'Mis alumnos aprenden más en una liga de Ranquea que en 5 clases. Ver feedback en tiempo real es invaluable.',
    name: 'Rosa M.',
    role: 'Profesora de fotografía',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop',
  },
] as const

export function LandingTestimonials() {
  return (
    <section className="py-24 border-t border-border-subtle bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold tracking-[0.24em] uppercase mb-3" style={{ color: 'var(--color-accent)' }}>
            Lo que dicen
          </p>
          <h2 className="text-text-primary text-[28px] sm:text-[36px] font-extrabold leading-[1.1] tracking-[-0.02em]">
            Fotógrafos que confían en Ranquea.
          </h2>
        </div>

        <ul className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {TESTIMONIALS.map(t => (
            <li
              key={t.name}
              className="bg-surface-1 border border-border-subtle rounded-2xl p-6 flex flex-col"
            >
              <p className="text-text-secondary text-[14px] leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border-subtle">
                <img
                  src={t.avatar}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-11 h-11 rounded-full object-cover flex-shrink-0 bg-surface-2"
                />
                <div className="min-w-0">
                  <p className="text-text-primary text-[13px] font-semibold truncate">{t.name}</p>
                  <p className="text-text-faint text-[11px] truncate">{t.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
