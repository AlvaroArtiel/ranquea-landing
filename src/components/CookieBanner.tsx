import { useState } from 'react'

declare global {
  interface Window { gtag?: (...args: unknown[]) => void }
}

function readConsent(): string | null {
  try { return localStorage.getItem('cc-consent') } catch { return null }
}

export function CookieBanner() {
  const [decided, setDecided] = useState(() => readConsent() !== null)

  if (decided) return null

  const decide = (granted: boolean) => {
    try { localStorage.setItem('cc-consent', granted ? 'granted' : 'denied') } catch { /* almacenamiento bloqueado */ }
    if (granted) window.gtag?.('consent', 'update', { analytics_storage: 'granted' })
    setDecided(true)
  }

  return (
    <div role="dialog" aria-label="Aviso de cookies" className="fixed bottom-4 left-4 right-4 sm:left-auto sm:max-w-sm z-50 rounded-2xl border border-[var(--border-subtle)] bg-white p-5 shadow-xl">
      <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed mb-4">
        Usamos cookies de analítica (Google Analytics) para entender cómo se usa la web. Solo se activan si aceptas.{' '}
        <a href="/politica-de-cookies.html" className="underline hover:text-[var(--brand)]">Más info</a>
      </p>
      <div className="flex gap-2">
        <button onClick={() => decide(true)} className="flex-1 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--brand)', color: 'var(--on-brand)' }}>Aceptar</button>
        <button onClick={() => decide(false)} className="flex-1 px-4 py-2 rounded-lg text-[13px] font-semibold border border-[var(--border-subtle)] text-[var(--text-secondary)]">Rechazar</button>
      </div>
    </div>
  )
}
