import { useEffect, useState, useRef } from 'react'
import { useInView } from '@/hooks/useInView'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface MockPhoto {
  id: number
  title: string
  votes: number
}

const MOCK_PHOTOS: MockPhoto[] = [
  { id: 1, title: 'Montaña al amanecer', votes: 324 },
  { id: 2, title: 'Ciudad nocturna', votes: 187 },
  { id: 3, title: 'Retrato en la calle', votes: 412 },
  { id: 4, title: 'Naturaleza salvaje', votes: 156 },
]

function HeroGalleryMockup() {
  const [ref, inView] = useInView<HTMLDivElement>(0.15)
  const reducedMotion = useReducedMotion()
  const [hasAnimated, setHasAnimated] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const [votes, setVotes] = useState(MOCK_PHOTOS[0].votes)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (inView && !reducedMotion) setHasAnimated(true)
  }, [inView, reducedMotion])

  const shouldAnimate = hasAnimated && !reducedMotion

  // Cycle through photos
  useEffect(() => {
    if (!shouldAnimate) return

    let votePulseCount = 0
    const pulsVotes = () => {
      votePulseCount++
      // Incrementa votos cada 800ms
      if (votePulseCount % 2 === 0) {
        setVotes(prev => prev + Math.floor(Math.random() * 4) + 1)
      }
      timeoutRef.current = setTimeout(pulsVotes, 800)
    }
    timeoutRef.current = setTimeout(pulsVotes, 800)

    // Cambia foto cada 4s
    const cyclePhoto = () => {
      setPhotoIndex(prev => (prev + 1) % MOCK_PHOTOS.length)
      setVotes(MOCK_PHOTOS[(photoIndex + 1) % MOCK_PHOTOS.length].votes)
      timeoutRef.current = setTimeout(cyclePhoto, 4000)
    }
    timeoutRef.current = setTimeout(cyclePhoto, 4000)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [shouldAnimate, photoIndex])

  const currentPhoto = MOCK_PHOTOS[photoIndex]

  return (
    <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 mt-16 sm:mt-20">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-16 h-[70%] pointer-events-none -z-10 opacity-50 blur-3xl"
        style={{ background: 'radial-gradient(ellipse at center top, var(--color-accent) 0%, transparent 65%)' }}
      />

      <div
        className="rounded-2xl border border-border-subtle bg-surface-1 overflow-hidden shadow-2xl ring-1 ring-white/5"
        style={{ transform: 'perspective(1800px) rotateX(-2deg)', transformOrigin: 'center top' }}
      >
        {/* Photo area */}
        <div className="relative w-full h-80 sm:h-96 bg-surface-2 flex items-center justify-center overflow-hidden">
          {/* Placeholder gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, var(--color-accent-faint) 0%, var(--color-accent-faint) 100%)`,
            }}
          />

          {/* Photo card */}
          <div
            className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-xl overflow-hidden border border-border-subtle shadow-lg"
            style={{
              animation: shouldAnimate ? 'ranquea-photo-reveal 600ms ease-out both' : undefined,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-text-primary font-semibold text-lg text-center px-4">{currentPhoto.title}</p>
            </div>
          </div>

          {/* Vote counter with pulse */}
          <div
            className="absolute bottom-6 right-6 bg-surface-1 border border-border-subtle rounded-xl px-4 py-3 flex items-center gap-2"
            style={{
              animation: shouldAnimate ? 'ranquea-vote-pulse 800ms ease-in-out infinite' : undefined,
            }}
          >
            <span className="text-[12px] text-text-muted">Votos:</span>
            <span className="text-[18px] font-bold" style={{ color: 'var(--color-accent)' }}>
              {votes}
            </span>
          </div>
        </div>

        {/* Stats bar */}
        <div className="px-6 py-4 border-t border-border-subtle bg-surface-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[12px] font-semibold text-text-primary">Competición en vivo</p>
              <p className="text-[11px] text-text-muted mt-0.5">
                {MOCK_PHOTOS.length} fotos · {MOCK_PHOTOS.reduce((sum, p) => sum + p.votes, 0)} votos totales
              </p>
            </div>
            <div className="flex gap-2">
              {MOCK_PHOTOS.map((p, i) => (
                <div
                  key={p.id}
                  className="w-2 h-2 rounded-full transition-colors"
                  style={{
                    background: i === photoIndex ? 'var(--color-accent)' : 'var(--border-subtle)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--surface) 90%)' }}
      />
    </div>
  )
}

export function LandingHero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-25 blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 60%)' }}
        />
        <div
          className="absolute left-[20%] top-[60%] w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #667eea 0%, transparent 70%)' }}
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="max-w-5xl mx-auto px-5 text-center">
        <p className="text-[12px] font-bold tracking-[0.32em] uppercase mb-7" style={{ color: 'var(--color-accent)' }}>
          Las ligas fotográficas del futuro
        </p>
        <h1 className="text-text-primary text-[44px] sm:text-[64px] lg:text-[76px] font-extrabold leading-[1.02] tracking-[-0.025em] mb-6">
          Compite fotografiando.<br />
          <span style={{ color: 'var(--color-accent)' }}>Vence votando.</span>
        </h1>
        <p className="text-text-muted text-[16px] sm:text-[18px] leading-relaxed max-w-2xl mx-auto mb-10">
          Sube tus mejores fotos a ligas temáticas, compite contra fotógrafos de todo el mundo y consigue badges mientras votas la mejor fotografía de cada ronda.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
          <a
            href="#crear"
            className="px-7 py-3.5 rounded-xl font-bold text-[15px] transition-transform hover:-translate-y-0.5"
            style={{ background: 'var(--color-accent)', color: 'var(--color-on-accent)' }}
          >
            Crear liga gratis
          </a>
          <a
            href="#demo"
            className="px-7 py-3.5 rounded-xl font-semibold text-[15px] text-text-secondary border border-[var(--text-faint)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors text-center"
          >
            Ver una demo →
          </a>
        </div>
        <p className="text-text-faint text-[12px]">
          Sin compromiso · Cancela cuando quieras
        </p>
      </div>

      <HeroGalleryMockup />
    </section>
  )
}
