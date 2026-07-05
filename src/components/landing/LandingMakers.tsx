export function LandingMakers() {
  return (
    <section id="ceustack" className="py-20 border-t border-[var(--border-subtle)]">
      <div className="max-w-3xl mx-auto px-5">
        <div className="reveal rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-soft)] p-8 sm:p-10 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[12px] font-semibold mb-5" style={{ background: 'var(--brand-100)', color: 'var(--brand-700)' }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--brand)' }} />
            Hecho por Ceustack
          </span>
          <h2 className="text-[var(--ink)] text-[26px] sm:text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] mb-4">
            Dos jóvenes ceutíes<br />
            <span style={{ color: 'var(--brand)' }}>con una idea clara.</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-[16px] leading-relaxed max-w-2xl mx-auto">
            Ranquea nace en <strong className="font-semibold text-[var(--ink)]">Ceustack</strong>, un estudio
            de producto fundado por dos jóvenes de Ceuta apasionados por la fotografía y la tecnología.
            Empezamos ayudando a una liga local y nos enamoramos del reto: convertir concursos
            engorrosos de hojas de cálculo en una experiencia viva, justa y divertida. Hoy seguimos
            construyendo Ranquea con el mismo mimo del primer día, cerca de cada comunidad que confía
            en nosotros.
          </p>
        </div>
      </div>
    </section>
  )
}
