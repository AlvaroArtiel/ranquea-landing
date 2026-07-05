import { Star, Crown } from 'lucide-react'
import { PHOTOS } from './photos'

/* Resultados finales con podio dorado para el 1º, datos del caso real anonimizados */
const RESULTS = [
  { ...PHOTOS[0], pos: 1, score: 91.0 },
  { ...PHOTOS[1], pos: 2, score: 89.33 },
  { ...PHOTOS[2], pos: 3, score: 88.33 },
  { ...PHOTOS[3], pos: 4, score: 83.0 },
  { ...PHOTOS[4], pos: 5, score: 80.0 },
  { ...PHOTOS[5], pos: 6, score: 79.67 },
]

export function MockupGallery() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {RESULTS.map((r, i) => {
        const winner = r.pos === 1
        return (
          <div
            key={r.id}
            className="reveal rounded-xl overflow-hidden relative border"
            style={{
              borderColor: winner ? 'var(--gold)' : 'var(--border-subtle)',
              boxShadow: winner ? '0 12px 30px -12px rgba(255,180,0,0.5)' : '0 1px 2px rgba(10,10,26,0.05)',
              transitionDelay: `${i * 60}ms`,
            }}
          >
            <div className="aspect-[4/3] relative flex items-end" style={{ background: r.css }}>
              <span className="absolute top-2 left-2 text-white text-[12px] font-extrabold drop-shadow">{r.pos}º</span>
              {winner && (
                <span className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'var(--gold)' }}>
                  <Crown size={13} className="text-white" />
                </span>
              )}
              <div className="w-full px-2 py-1.5 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-[11px] font-bold leading-tight truncate">{r.title}</p>
              </div>
            </div>
            <div className="flex items-center justify-between px-2 py-1.5 bg-white">
              <span className="text-[10px] text-[var(--text-muted)] truncate">{r.author}</span>
              <span className="inline-flex items-center gap-0.5 text-[11px] font-extrabold" style={{ color: winner ? 'var(--gold)' : 'var(--leaf)' }}>
                <Star size={10} fill="currentColor" />{r.score.toFixed(0)}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
