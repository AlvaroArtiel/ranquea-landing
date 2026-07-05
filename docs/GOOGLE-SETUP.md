# Alta de ranquea.com en Google (con desarrollo@ceustack.com)

1. **GTM**: tagmanager.google.com → Crear contenedor «ranquea.com» (Web) → copiar el ID `GTM-…`.
2. **Sustituir el placeholder**: pasar el `GTM-…` a Claude (o buscar `GTM-XXXXXXX` en
   `index.html`, `public/aviso-legal.html`, `public/politica-de-privacidad.html`,
   `public/politica-de-cookies.html`), rebuild y redeploy.
3. **GA4**: analytics.google.com → Crear propiedad «Ranquea» → flujo web `https://ranquea.com` → copiar `G-…`.
4. **Tag en GTM**: etiqueta «Google Analytics: GA4 Configuration» con el `G-…`, activador All Pages → Enviar/Publicar.
5. **Search Console**: search.google.com/search-console → propiedad de dominio `ranquea.com` →
   verificación DNS TXT (Claude puede añadir el registro vía MCP de Hostinger DNS — pásale el valor TXT).
6. **Comprobar**: con GTM publicado y cookies aceptadas en ranquea.com, ver en GA4 → Informes
   en tiempo real que aparece la visita.
