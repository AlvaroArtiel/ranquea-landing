# Alta de ranquea.com en Google (con desarrollo@ceustack.com)

1. **GTM**: tagmanager.google.com → Crear contenedor «ranquea.com» (Web) → copiar el ID `GTM-…`.
2. **Importar el contenedor**: en GTM, Administración → Importar contenedor →
   subir `docs/gtm-container-ranquea.json` → workspace Default → opción «Combinar».
   Esto crea la etiqueta Google Tag (GA4) con activador All Pages y la variable
   constante «GA4 Measurement ID».
3. **Sustituir el placeholder**: pasar el `GTM-…` a Claude (o buscar `GTM-XXXXXXX` en
   `index.html`, `public/aviso-legal.html`, `public/politica-de-privacidad.html`,
   `public/politica-de-cookies.html`), rebuild y redeploy.
4. **GA4**: ✅ hecho (2026-07-05) — propiedad creada, ID de medición `G-BVXLVTT7GF`,
   ya incrustado en `docs/gtm-container-ranquea.json` (la variable «GA4 Measurement ID»).
5. **Medir con GA4**: tras importar el contenedor (paso 2), solo queda Enviar/Publicar en GTM.
   NO pegar el snippet gtag.js que muestra GA4 al crear la propiedad: la medición va vía GTM
   y pegarlo duplicaría hits y saltaría el Consent Mode.
6. **Search Console**: ✅ hecho (2026-07-05).
7. **Comprobar**: con GTM publicado y cookies aceptadas en ranquea.com, ver en GA4 → Informes
   en tiempo real que aparece la visita.
