const DEMO_REAL = 'https://miradasceuta.ranquea.com/ranking/general'

export function LandingFinalCTA() {
  return (
    <section className="py-24 border-t border-[var(--border-subtle)]">
      <div className="max-w-5xl mx-auto px-5">
        <div className="hero-gradient rounded-3xl px-8 py-16 sm:py-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-white text-[36px] sm:text-[52px] font-extrabold leading-[1.05] tracking-[-0.025em] mb-5">
              ¿Listo para crear tu liga?
            </h2>
            <p className="text-white/90 text-[17px] sm:text-[19px] leading-relaxed mb-9 max-w-xl mx-auto">
              Cuéntanos cómo es tu comunidad y te preparamos un plan a tu medida. Sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:info@ranquea.com?subject=Quiero%20una%20demo%20de%20Ranquea"
                className="px-7 py-3.5 rounded-xl font-bold text-[15px] bg-white text-[var(--brand-700)] transition-transform hover:-translate-y-0.5"
              >
                Solicita tu demo
              </a>
              <a
                href={DEMO_REAL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl font-semibold text-[15px] text-white border border-white/40 hover:bg-white/10 transition-colors"
              >
                Ver demo real →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
