import { useEffect, useRef, useState } from 'react'
import { Check, ImagePlus } from 'lucide-react'
import { PHOTOS } from './photos'

type Phase = 'idle' | 'uploading' | 'done'

export function MockupUpload() {
  const [idx, setIdx] = useState(0)
  const [phase, setPhase] = useState<Phase>('idle')
  const [progress, setProgress] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const active = useRef(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setPhase('done')
      setProgress(100)
      return
    }
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) {
      setPhase('done')
      setProgress(100)
      return
    }
    const obs = new IntersectionObserver((e) => {
      active.current = e[0].isIntersecting
    }, { threshold: 0.4 })
    obs.observe(el)

    let raf = 0
    let t = 0
    const loop = () => {
      if (active.current) {
        t += 16
        if (phase === 'idle' && t > 400) { setPhase('uploading'); t = 0 }
        else if (phase === 'uploading') {
          setProgress((p) => {
            const np = Math.min(100, p + 2.2)
            if (np >= 100) { setPhase('done'); t = 0 }
            return np
          })
        } else if (phase === 'done' && t > 2200) {
          setIdx((i) => (i + 1) % PHOTOS.length)
          setPhase('idle'); setProgress(0); t = 0
        }
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => { cancelAnimationFrame(raf); obs.disconnect() }
  }, [phase])

  const photo = PHOTOS[idx]

  return (
    <div ref={ref} className="w-[260px] rounded-[32px] border-[6px] border-[var(--ink)] bg-[var(--ink)] p-1.5" style={{ boxShadow: '0 30px 70px -25px rgba(91,63,255,0.4)' }}>
      <div className="rounded-[26px] bg-white overflow-hidden">
        <div className="px-4 pt-3 pb-2 flex items-center justify-between">
          <span className="text-[12px] font-bold text-[var(--ink)]">Subir foto</span>
          <span className="text-[10px] text-[var(--text-faint)]">Jornada 8</span>
        </div>

        <div className="px-4">
          <div
            className="w-full aspect-[4/5] rounded-xl overflow-hidden relative flex items-end"
            style={{ background: photo.css, animation: phase === 'idle' ? 'photo-reveal 0.5s ease' : undefined }}
          >
            {phase === 'done' && (
              <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center" style={{ animation: 'badge-pop 0.4s ease' }}>
                <Check size={15} style={{ color: 'var(--leaf)' }} />
              </div>
            )}
            <div className="w-full p-3 bg-gradient-to-t from-black/55 to-transparent">
              <p className="text-white text-[12px] font-bold leading-tight">{photo.title}</p>
              <p className="text-white/80 text-[10px]">por {photo.author}</p>
            </div>
          </div>
        </div>

        <div className="px-4 py-4">
          {phase === 'uploading' ? (
            <>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-medium text-[var(--text-muted)]">Subiendo…</span>
                <span className="text-[11px] font-bold" style={{ color: 'var(--brand)' }}>{Math.round(progress)}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-[var(--surface-2)] overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${progress}%`, background: 'var(--brand)' }} />
              </div>
            </>
          ) : phase === 'done' ? (
            <div className="flex items-center justify-center gap-2 py-1.5 rounded-lg text-[12px] font-semibold" style={{ background: 'var(--leaf-soft)', color: 'var(--leaf)' }}>
              <Check size={14} /> Subida · en revisión
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2 py-1.5 rounded-lg text-[12px] font-semibold text-white" style={{ background: 'var(--brand)' }}>
              <ImagePlus size={14} /> Seleccionar foto
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
