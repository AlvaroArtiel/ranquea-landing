import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  { q: '¿Qué es una liga fotográfica gamificada?', a: 'Una competición estructurada de fotos con retos, votación, rankings y premios. Pensada para comunidades, empresas, educación o marcas.' },
  { q: '¿Necesito saber de fotografía para usar Ranquea?', a: 'No. Ranquea es para cualquiera. Participa gente con móvil, cámara o lo que tenga. El sistema es muy sencillo.' },
  { q: '¿Puedo controlar quién participa?', a: 'Sí. Ligas públicas o privadas, con QR, link o invitación directa por email.' },
  { q: '¿Se pueden votar las fotos? ¿Cómo?', a: 'Sí. El jurado vota (personas que designas) o los participantes se votan entre sí. Configurable al 100%.' },
  { q: '¿Las fotos se pueden moderar antes de aparecer?', a: 'Sí. Puedes revisar manualmente o activar filtros automáticos. Tú controlas qué aparece.' },
  { q: '¿Dónde se almacenan las fotos?', a: 'En servidores seguros y respaldados. Cumplimos el RGPD. Tus datos, tu control.' },
  { q: '¿Puedo exportar resultados?', a: 'Sí. Descarga fotos, rankings y certificados. También puedes embeberlo en tu web.' },
  { q: '¿Hay límite de participantes?', a: 'No. Tantos como quieras, desde 10 hasta más de 100.000.' },
  { q: '¿Puedo cambiar el color y el logo de mi liga?', a: '100% personalizable. Tu marca, tu identidad, tu historia.' },
  { q: '¿Qué pasa cuando termina la liga?', a: 'La galería queda visible (pública o privada según configures). Descarga todos los resultados. ¿Otra ronda? Crea una nueva.' },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <div className="border-b border-[var(--border-subtle)]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full py-4 flex items-start justify-between gap-4 hover:text-[var(--brand)] transition-colors text-left"
      >
        <p className="text-[var(--ink)] text-[15px] font-semibold flex-1">{q}</p>
        <ChevronDown size={18} aria-hidden="true" className="flex-shrink-0 transition-transform mt-0.5" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', color: 'var(--brand)' }} />
      </button>
      {open && <p id={panelId} className="pb-4 text-[var(--text-muted)] text-[14px] leading-relaxed">{a}</p>}
    </div>
  )
}

export function LandingFAQ() {
  return (
    <section id="faq" className="py-24 bg-[var(--surface-soft)] border-t border-[var(--border-subtle)]">
      <div className="max-w-3xl mx-auto px-5">
        <div className="text-center mb-12 reveal">
          <h2 className="text-[var(--ink)] text-[34px] sm:text-[44px] font-extrabold leading-[1.05] tracking-[-0.02em]">
            Preguntas frecuentes
          </h2>
        </div>
        <div className="reveal">
          {FAQS.map(({ q, a }) => (
            <FAQItem key={q} q={q} a={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
