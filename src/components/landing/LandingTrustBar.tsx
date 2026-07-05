const LEAGUES = [
  'Liga Miradas Ceuta',
  'Foto Club Cantabria',
  'Reto Urbano Madrid',
  'Liga Escolar de Fotografía',
  'Concurso Costa Norte',
  'Asociación Visual Levante',
]

export function LandingTrustBar() {
  return (
    <section className="py-10 border-y border-[var(--border-subtle)] bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5">
        <p className="text-center text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--text-faint)] mb-7">
          Grupos y comunidades que ya compiten con Ranquea
        </p>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-4 items-center"
        >
          {LEAGUES.map((name) => (
            <span
              key={name}
              className="text-center text-[14px] font-semibold text-[var(--text-secondary)] leading-snug"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
