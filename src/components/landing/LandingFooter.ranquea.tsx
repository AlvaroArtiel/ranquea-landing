// SVG inline para Twitter/Instagram
function TwitterIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  )
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const COLUMNS = [
  {
    title: 'Producto',
    links: [
      { label: 'Funciones', href: '/#funciones' },
      { label: 'Precios', href: '/#precios' },
      { label: 'Casos de uso', href: '/#casos-uso' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { label: 'FAQ', href: '/#faq' },
      { label: 'Soporte', href: 'mailto:soporte@ranquea.com' },
      { label: 'Blog', href: '#blog' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Términos', href: '/terminos' },
      { label: 'Privacidad', href: '/privacidad' },
      { label: 'Cookies', href: '/cookies' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Contacto', href: 'mailto:hola@ranquea.com' },
      { label: 'Acerca de', href: '/about' },
    ],
  },
] as const

export function LandingFooter() {
  return (
    <footer className="border-t border-border-subtle bg-[#0a0a0a] py-14">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {COLUMNS.map(col => (
            <div key={col.title}>
              <p className="text-text-faint text-[10px] uppercase tracking-[0.24em] font-semibold mb-4">
                {col.title}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map(l => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-text-muted text-[13px] hover:text-text-primary transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border-subtle pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-faint text-[12px]">
            © 2026 Ranquea · Hecho con cariño para fotógrafos
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://twitter.com/ranqueapp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-9 h-9 inline-flex items-center justify-center rounded-lg text-text-faint hover:text-text-primary hover:bg-surface-2 transition-colors"
            >
              <TwitterIcon size={16} />
            </a>
            <a
              href="https://instagram.com/ranqueapp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 inline-flex items-center justify-center rounded-lg text-text-faint hover:text-text-primary hover:bg-surface-2 transition-colors"
            >
              <InstagramIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
