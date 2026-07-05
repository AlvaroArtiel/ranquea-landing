import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '/#funciones', label: 'Funciones' },
  { href: '/#casos-uso', label: 'Casos de uso' },
  { href: '/#precios', label: 'Precios' },
] as const

export function LandingNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const ctaClass =
    'px-3.5 py-1.5 rounded-lg text-[12px] font-semibold transition-colors'
  const ctaStyle = { background: 'var(--color-accent)', color: 'var(--color-on-accent)' } as const

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
        scrolled
          ? 'bg-[#0F0F0F]/80 backdrop-blur-xl border-b border-border-subtle'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
        <a href="/" aria-label="Ranquea">
          <span className="text-[18px] font-bold" style={{ color: 'var(--color-accent)' }}>
            Ranquea
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-text-muted text-[13px] hover:text-text-primary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#login"
            className="hidden sm:inline-block text-text-muted text-[12px] px-3 py-1.5 hover:text-text-primary transition-colors"
          >
            Iniciar sesión
          </a>
          <a href="#crear" className={ctaClass} style={ctaStyle}>
            Crear liga gratis
          </a>
        </div>
      </nav>
    </header>
  )
}
