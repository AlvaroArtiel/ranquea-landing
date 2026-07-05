import { useEffect, useState, useRef } from 'react'
import { Camera } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface FeaturePhoto {
  id: number
  title: string
  initialVotes: number
}

const FEATURE_PHOTOS: FeaturePhoto[] = [
  { id: 1, title: 'Montaña', initialVotes: 245 },
  { id: 2, title: 'Mar', initialVotes: 187 },
  { id: 3, title: 'Ciudad', initialVotes: 342 },
  { id: 4, title: 'Naturaleza', initialVotes: 198 },
]

const GRADIENT_COLORS = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
]

export function LandingFeatureGallery() {
  const [ref, inView] = useInView<HTMLDivElement>(0.2)
  const reducedMotion = useReducedMotion()
  const [hasAnimated, setHasAnimated] = useState(false)
  const [votes, setVotes] = useState<Record<number, number>>(
    FEATURE_PHOTOS.reduce((acc, p) => ({ ...acc, [p.id]: p.initialVotes }), {})
  )
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (inView && !reducedMotion) setHasAnimated(true)
  }, [inView, reducedMotion])

  const shouldAnimate = hasAnimated && !reducedMotion

  // Incrementa votos aleatoriamente
  useEffect(() => {
    if (!shouldAnimate) return

    const updateVotes = () => {
      setVotes(prev => ({
        ...prev,
        [FEATURE_PHOTOS[Math.floor(Math.random() * FEATURE_PHOTOS.length)].id]:
          prev[FEATURE_PHOTOS[Math.floor(Math.random() * FEATURE_PHOTOS.length)].id] + Math.floor(Math.random() * 2) + 1,
      }))
      timeoutRef.current = setTimeout(updateVotes, 1200)
    }
    timeoutRef.current = setTimeout(updateVotes, 1200)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [shouldAnimate])

  return (
    <section className="py-24 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Upload section */}
          <div className="flex flex-col gap-6">
            <div>
              <p
                className="text-[11px] font-bold tracking-[0.28em] uppercase mb-4"
                style={{ color: 'var(--color-accent)' }}
              >
                Sube fotos
              </p>
              <h2 className="text-text-primary text-[32px] sm:text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em]">
                Crea tu galería competitiva
              </h2>
            </div>
            <p className="text-text-muted text-[15px] leading-relaxed">
              Sube tus fotos, define el tema, y deja que la comunidad vote. Cada votación es transparente y segura.
            </p>

            {/* Upload placeholder */}
            <div className="border-2 border-dashed border-border-subtle rounded-2xl px-8 py-12 text-center cursor-pointer hover:border-[var(--color-accent-border)] transition-colors">
              <Camera size={32} className="mx-auto mb-3 text-text-muted" />
              <p className="text-text-primary font-semibold mb-1">Arrastra tus fotos aquí</p>
              <p className="text-text-muted text-[13px]">O haz click para seleccionar</p>
            </div>

            <ul className="space-y-2">
              {['Soporta JPG, PNG, WebP', 'Máx 50 MB por foto', '500 fotos por liga'].map(feature => (
                <li key={feature} className="flex items-center gap-2 text-text-muted text-[13px]">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-accent)' }} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Gallery grid */}
          <div ref={ref}>
            <div className="grid grid-cols-2 gap-3">
              {FEATURE_PHOTOS.map((photo, idx) => (
                <div
                  key={photo.id}
                  className="relative overflow-hidden rounded-xl border border-border-subtle group"
                  style={{
                    animation: shouldAnimate ? `ranquea-photo-reveal 500ms ease-out ${idx * 150}ms both` : undefined,
                  }}
                >
                  {/* Photo placeholder */}
                  <div
                    className="w-full aspect-square flex items-center justify-center text-white font-semibold"
                    style={{ background: GRADIENT_COLORS[idx] }}
                  >
                    {photo.title}
                  </div>

                  {/* Vote overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center">
                      <div
                        className="text-3xl font-bold mb-1"
                        style={{
                          color: 'white',
                          animation: shouldAnimate ? 'ranquea-vote-pulse 1s ease-in-out infinite' : undefined,
                        }}
                      >
                        {votes[photo.id]}
                      </div>
                      <p className="text-white text-[12px]">votos</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
