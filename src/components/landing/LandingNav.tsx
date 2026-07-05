import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#funciones', label: 'Funciones' },
  { href: '#casos', label: 'Casos de uso' },
] as const

const DEMO_REAL = 'https://miradasceuta.ranquea.com/ranking/general'

export function LandingNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-[var(--border-subtle)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#top" aria-label="Ranquea" className="font-bold text-[19px] tracking-tight text-[var(--ink)]">
          Ranquea<span style={{ color: 'var(--brand)' }}>.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-[var(--text-secondary)] text-[14px] font-medium hover:text-[var(--ink)] transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={DEMO_REAL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block text-[var(--text-secondary)] text-[14px] font-medium hover:text-[var(--ink)] transition-colors"
          >
            Ver caso real
          </a>
          <a
            href="mailto:desarrollo@ceustack.com?subject=Quiero%20una%20demo%20de%20Ranquea"
            className="px-4 py-2 rounded-lg text-[13px] font-semibold transition-transform hover:-translate-y-0.5"
            style={{ background: 'var(--brand)', color: 'var(--on-brand)' }}
          >
            Solicita tu demo
          </a>
        </div>
      </nav>
    </header>
  )
}
