import { useEffect, useState, useRef } from 'react'
import { Crown, Medal } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface Ranker {
  position: number
  name: string
  score: number
  badge?: string
}

const INITIAL_RANKING: Ranker[] = [
  { position: 1, name: 'María S.', score: 2845, badge: 'Gold' },
  { position: 2, name: 'Juan G.', score: 2312, badge: 'Silver' },
  { position: 3, name: 'Ana L.', score: 2087, badge: 'Bronze' },
  { position: 4, name: 'Carlos M.', score: 1956 },
  { position: 5, name: 'Sofia P.', score: 1823 },
]

export function LandingFeatureRankings() {
  const [ref, inView] = useInView<HTMLDivElement>(0.2)
  const reducedMotion = useReducedMotion()
  const [hasAnimated, setHasAnimated] = useState(false)
  const [ranking, setRanking] = useState(INITIAL_RANKING)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (inView && !reducedMotion) setHasAnimated(true)
  }, [inView, reducedMotion])

  const shouldAnimate = hasAnimated && !reducedMotion

  // Simula cambios en el ranking
  useEffect(() => {
    if (!shouldAnimate) return

    const updateRanking = () => {
      setRanking(prev => {
        const newRanking = [...prev]
        const randomIdx = Math.floor(Math.random() * newRanking.length)
        newRanking[randomIdx] = {
          ...newRanking[randomIdx],
          score: newRanking[randomIdx].score + Math.floor(Math.random() * 50) + 10,
        }
        // Re-sort
        return newRanking.sort((a, b) => b.score - a.score).map((r, idx) => ({
          ...r,
          position: idx + 1,
        }))
      })
      timeoutRef.current = setTimeout(updateRanking, 2500)
    }
    timeoutRef.current = setTimeout(updateRanking, 2500)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [shouldAnimate])

  const getMedalColor = (position: number) => {
    if (position === 1) return '#FFD700' // Gold
    if (position === 2) return '#C0C0C0' // Silver
    if (position === 3) return '#CD7F32' // Bronze
    return 'var(--text-muted)'
  }

  return (
    <section className="py-24 border-t border-border-subtle bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Description */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div>
              <p
                className="text-[11px] font-bold tracking-[0.28em] uppercase mb-4"
                style={{ color: 'var(--color-accent)' }}
              >
                Rankings dinámicos
              </p>
              <h2 className="text-text-primary text-[32px] sm:text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em]">
                Ve la competición en vivo
              </h2>
            </div>
            <p className="text-text-muted text-[15px] leading-relaxed">
              El leaderboard se actualiza cada segundo. Sube en rankings, gana badges exclusivos y demuestra que eres el mejor fotógrafo.
            </p>

            <ul className="space-y-3">
              {[
                'Rankings actualizados en tiempo real',
                'Badges por logros desbloqueados',
                'Historial de tu desempeño',
                'Comparativa con otros fotógrafos',
              ].map(feature => (
                <li key={feature} className="flex items-start gap-3 text-text-muted text-[13px]">
                  <Medal size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Leaderboard */}
          <div ref={ref} className="order-1 lg:order-2">
            <div className="rounded-2xl border border-border-subtle bg-surface-1 overflow-hidden">
              {/* Header */}
              <div className="px-6 py-4 border-b border-border-subtle bg-surface-2">
                <p className="text-text-primary font-semibold text-[14px]">Top Fotógrafos</p>
              </div>

              {/* Rankings */}
              <div className="divide-y divide-border-subtle">
                {ranking.map(ranker => (
                  <div
                    key={ranker.name}
                    className="px-6 py-4 flex items-center justify-between hover:bg-surface-2 transition-colors"
                    style={{
                      animation: shouldAnimate ? 'ranquea-ranking-update 500ms ease-out' : undefined,
                    }}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-8 flex items-center justify-center">
                        {ranker.position <= 3 ? (
                          <Crown size={20} style={{ color: getMedalColor(ranker.position) }} aria-hidden="true" />
                        ) : (
                          <span className="text-text-muted font-bold text-[14px]">#{ranker.position}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-text-primary font-semibold text-[13px]">{ranker.name}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-text-primary font-bold text-[14px]">{ranker.score}</p>
                      {ranker.badge && (
                        <p
                          className="text-[10px] font-semibold mt-0.5"
                          style={{
                            color: getMedalColor(ranker.position),
                            animation: shouldAnimate ? 'ranquea-badge-pop 400ms ease-out' : undefined,
                          }}
                        >
                          {ranker.badge}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
