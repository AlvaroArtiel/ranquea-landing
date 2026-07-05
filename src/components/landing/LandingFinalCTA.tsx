const DEMO_REAL = 'https://miradasceuta.ranquea.com/ranking/general'

const INPUT_CLASSES =
  'w-full px-4 py-3 rounded-xl bg-white/15 border border-white/30 text-white placeholder-white/60 text-[15px] outline-none focus:border-white/70 transition-colors'

export function LandingFinalCTA() {
  return (
    <section id="contacto" className="py-24 border-t border-[var(--border-subtle)]">
      <div className="max-w-5xl mx-auto px-5">
        <div className="hero-gradient rounded-3xl px-8 py-16 sm:py-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-white text-[36px] sm:text-[52px] font-extrabold leading-[1.05] tracking-[-0.025em] mb-5">
              ¿Listo para crear tu liga?
            </h2>
            <p className="text-white/90 text-[17px] sm:text-[19px] leading-relaxed mb-9 max-w-xl mx-auto">
              Cuéntanos cómo es tu comunidad y te preparamos un plan a tu medida. Sin compromiso.
            </p>
            <form
              action="https://formsubmit.co/desarrollo@ceustack.com"
              method="POST"
              className="max-w-lg mx-auto text-left flex flex-col gap-3 mb-8"
            >
              <input type="hidden" name="_subject" value="Nuevo mensaje desde ranquea.com" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://ranquea.com/gracias.html" />
              <input
                type="hidden"
                name="_autoresponse"
                value="¡Gracias por escribirnos! Hemos recibido tu mensaje sobre Ranquea y te responderemos en menos de 48 horas. También puedes responder a este mismo correo. — El equipo de Ranquea, un producto de Ceustack · ranquea.com"
              />
              <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <div className="grid sm:grid-cols-2 gap-3">
                <input name="nombre" type="text" autoComplete="name" placeholder="Tu nombre" required className={INPUT_CLASSES} aria-label="Nombre" />
                <input name="email" type="email" autoComplete="email" placeholder="tu@email.com" required className={INPUT_CLASSES} aria-label="Email" />
              </div>
              <textarea
                name="mensaje"
                rows={4}
                placeholder="Cuéntanos cómo es tu comunidad y qué te gustaría montar."
                required
                className={INPUT_CLASSES}
                aria-label="Mensaje"
              />
              <label className="flex items-start gap-2 text-white/85 text-[13px] leading-snug">
                <input type="checkbox" name="privacidad" value="Acepta la política de privacidad" required className="mt-0.5" />
                <span>
                  He leído y acepto la{' '}
                  <a href="/politica-de-privacidad.html" className="underline hover:text-white">política de privacidad</a>
                </span>
              </label>
              <button
                type="submit"
                className="px-7 py-3.5 rounded-xl font-bold text-[15px] bg-white text-[var(--brand-700)] transition-transform hover:-translate-y-0.5"
              >
                Solicita tu demo
              </button>
            </form>
            <a
              href={DEMO_REAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3.5 rounded-xl font-semibold text-[15px] text-white border border-white/40 hover:bg-white/10 transition-colors"
            >
              Ver demo real →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
