import { MockupGallery } from './mockups/MockupGallery'
import { MockupAchievements } from './mockups/MockupAchievements'

export function LandingGallerySection() {
  return (
    <section className="py-24 border-t border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="reveal mb-8">
              <p className="text-[12px] font-bold tracking-[0.18em] uppercase mb-4" style={{ color: 'var(--brand)' }}>
                Galería pública
              </p>
              <h3 className="text-[var(--ink)] text-[32px] sm:text-[42px] font-extrabold leading-[1.05] tracking-[-0.02em] mb-4">
                Cada jornada tiene<br />
                su <span style={{ color: 'var(--brand)' }}>ganador.</span>
              </h3>
              <p className="text-[var(--text-secondary)] text-[16px] leading-relaxed">
                Los resultados finales se publican en una galería pública con podio, puntuaciones
                y ganador del mes. Embébela en tu web o compártela con un link.
              </p>
            </div>
            <MockupGallery />
          </div>

          <div>
            <div className="reveal mb-8">
              <p className="text-[12px] font-bold tracking-[0.18em] uppercase mb-4" style={{ color: 'var(--brand)' }}>
                Gamificación
              </p>
              <h3 className="text-[var(--ink)] text-[32px] sm:text-[42px] font-extrabold leading-[1.05] tracking-[-0.02em] mb-4">
                Logros que<br />
                <span style={{ color: 'var(--brand)' }}>enganchan.</span>
              </h3>
              <p className="text-[var(--text-secondary)] text-[16px] leading-relaxed">
                Badges, trofeos y una vitrina de logros por participante. La evolución mensual
                mantiene a todos pendientes de su próxima foto.
              </p>
            </div>
            <MockupAchievements />
          </div>
        </div>
      </div>
    </section>
  )
}
