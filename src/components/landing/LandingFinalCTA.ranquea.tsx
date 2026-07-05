import { Mail, Phone, MessageCircle } from 'lucide-react'

export function LandingFinalCTA() {
  return (
    <section className="py-24 border-t border-border-subtle">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <h2 className="text-text-primary text-[36px] sm:text-[44px] font-extrabold leading-[1.05] tracking-[-0.02em] mb-6">
          Crea tu primera <br />
          <span style={{ color: 'var(--color-accent)' }}>liga ahora</span>
        </h2>
        <p className="text-text-muted text-[15px] leading-relaxed max-w-xl mx-auto mb-10">
          14 días gratis. Sin tarjeta de crédito. Sin compromiso. Únete a cientos de fotógrafos que ya compiten en Ranquea.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+34XXX-XXX-XXX"
            className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[14px] border transition-colors"
            style={{
              borderColor: 'var(--color-accent-border)',
              color: 'var(--color-accent)',
            }}
          >
            <Phone size={18} aria-hidden="true" />
            Llamar
          </a>
          <a
            href="https://wa.me/34XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[14px] border transition-colors"
            style={{
              borderColor: 'var(--color-accent-border)',
              color: 'var(--color-accent)',
            }}
          >
            <MessageCircle size={18} aria-hidden="true" />
            WhatsApp
          </a>
          <a
            href="mailto:info@ranquea.com"
            className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-[14px] transition-transform hover:-translate-y-0.5"
            style={{
              background: 'var(--color-accent)',
              color: 'var(--color-on-accent)',
            }}
          >
            <Mail size={18} aria-hidden="true" />
            Email
          </a>
        </div>

        <p className="text-text-faint text-[12px] mt-8">
          Disponible 24/7 · Respuesta en menos de 1 hora
        </p>
      </div>
    </section>
  )
}
