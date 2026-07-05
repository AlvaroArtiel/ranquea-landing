const DEMO_REAL = 'https://miradasceuta.ranquea.com/ranking/general'

const COLUMNS = [
  { title: 'Producto', links: [
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Funciones', href: '#funciones' },
    { label: 'Casos de uso', href: '#casos' },
    { label: 'Planes a medida', href: '#planes' },
  ] },
  { title: 'Recursos', links: [
    { label: 'FAQ', href: '#faq' },
    { label: 'Ver demo real', href: DEMO_REAL },
    { label: 'Soporte', href: 'mailto:desarrollo@ceustack.com' },
  ] },
  { title: 'Legal', links: [
    { label: 'Aviso legal', href: '/aviso-legal.html' },
    { label: 'Privacidad', href: '/politica-de-privacidad.html' },
    { label: 'Cookies', href: '/politica-de-cookies.html' },
  ] },
  { title: 'Contacto', links: [
    { label: 'Solicita tu demo', href: 'mailto:desarrollo@ceustack.com?subject=Quiero%20una%20demo%20de%20Ranquea' },
    { label: 'desarrollo@ceustack.com', href: 'mailto:desarrollo@ceustack.com' },
  ] },
]

export function LandingFooter() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-white py-14">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <p className="font-bold text-[18px] tracking-tight text-[var(--ink)] mb-2">
              Ranquea<span style={{ color: 'var(--brand)' }}>.</span>
            </p>
            <p className="text-[var(--text-muted)] text-[13px] leading-relaxed">
              Ligas fotográficas gamificadas.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-[var(--text-faint)] text-[10px] uppercase tracking-[0.18em] font-semibold mb-4">{col.title}</p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[var(--text-secondary)] text-[13px] hover:text-[var(--brand)] transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[var(--border-subtle)] pt-7 text-center">
          <p className="text-[var(--text-faint)] text-[12px]">
            © 2026 Ranquea · Hecho con cariño en Ceuta, España · Ranquea es un producto de{' '}
            <a href="https://ceustack.com" rel="noopener" className="font-semibold text-[var(--text-secondary)] hover:text-[var(--brand)] transition-colors">Ceustack</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
