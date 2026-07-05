import { Accordion, type AccordionItem } from '@/components/Accordion'

const FAQS: readonly AccordionItem[] = [
  {
    q: '¿Cuánto cuesta crear una liga?',
    a: 'Las ligas son gratis durante el trial de 14 días. Después, depende de tu plan. Con Starter puedes tener 3 ligas simultáneas. Con Pro, ligas ilimitadas.',
  },
  {
    q: '¿Necesito número de CIF o DNI para vender ligas?',
    a: 'No. Los fotógrafos compiten gratis. Las ligas públicas son gratuitas. Si quieres monetizar privadamente, es tu responsabilidad gestionar impuestos según tu país.',
  },
  {
    q: '¿Hay límite de fotos que puedo subir?',
    a: 'En Starter, 100 fotos por liga. En Pro, 5000 fotos por liga. Cada foto puede ocupar hasta 50 MB.',
  },
  {
    q: '¿Cómo funciona la votación?',
    a: 'Cada usuario vota una sola vez por foto, no se pueden repetir votos. El algoritmo es transparente: la foto con más votos gana. Sin bots, sin manipulación.',
  },
  {
    q: '¿Puedo exportar mis datos?',
    a: 'Sí. Desde tu panel puedes descargar un CSV con todas tus fotos, votos, y estadísticas cuando quieras.',
  },
  {
    q: '¿Qué pasa si cancelo mi suscripción?',
    a: 'Tu liga permanece visible por 30 días. Después se archiva. Puedes descargar todos tus datos antes de la cancelación definitiva.',
  },
  {
    q: '¿Puedo integrar Ranquea en mi web o app?',
    a: 'Sí, con nuestra API pública (incluida en Pro). Puedes embeber ligas, rankings y votos en tu sitio.',
  },
  {
    q: '¿Hay soporte si tengo un problema?',
    a: 'Claro. Starter tiene soporte por email. Pro tiene soporte prioritario por email y chat. Respondemos dentro de 24 horas.',
  },
  {
    q: '¿Es seguro subir mis fotos originales?',
    a: 'Tus fotos están protegidas con encriptación HTTPS. Tienes control total sobre quién puede verlas (pública o privada). Nunca vendemos tus datos.',
  },
] as const

export function LandingFAQ() {
  return (
    <section id="faq" className="py-24 border-t border-border-subtle">
      <div className="max-w-3xl mx-auto px-5">
        <div className="text-center mb-10">
          <p className="text-[11px] font-bold tracking-[0.24em] uppercase mb-3" style={{ color: 'var(--color-accent)' }}>
            Preguntas frecuentes
          </p>
          <h2 className="text-text-primary text-[28px] sm:text-[36px] font-extrabold leading-[1.1] tracking-[-0.02em]">
            Lo que más nos preguntan.
          </h2>
        </div>

        <Accordion items={FAQS} />
      </div>
    </section>
  )
}
