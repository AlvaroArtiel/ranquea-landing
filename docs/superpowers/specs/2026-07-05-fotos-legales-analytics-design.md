# Spec — Fotos en mockups, branding Ceustack, legales + cookies, y analítica (ranquea.com)

Fecha: 2026-07-05 · Estado: aprobado en brainstorming

## Contexto

Landing estática (Vite + React + Tailwind) desplegada en Hostinger (`public_html`). Los mockups
simulan fotos con degradados CSS definidos en `src/components/landing/mockups/photos.ts` (única
fuente, 6 entradas), consumidos por los componentes de `mockups/`. No hay analítica, ni banner de
cookies, ni páginas legales. Referencia funcional: ceustack.com (mismo titular).

## 1. Fotos reales en los mockups

- 6 fotos de **Unsplash** (licencia Unsplash, sin atribución obligatoria), temática costera/paisaje
  acorde a los títulos existentes (Amenazas, Marea baja, Acantilado, Hierro & sal, La luz que se
  va, Sed en flor).
- Optimizadas a **WebP, 640 px de ancho, ~20-40 KB**, guardadas en `public/photos/p1.webp` … `p6.webp`.
- `photos.ts`: cada entrada mantiene `id/title/author/initials` y su degradado `css`, y añade
  `src: '/photos/pN.webp'`. El degradado queda como **placeholder de carga** (fondo bajo la imagen).
- Los componentes de `mockups/` que pintan `background: css` pasan a renderizar la foto
  (`<img loading="lazy">` o `background-image`) sobre el degradado.
- Criterio de éxito: todos los mockups muestran fotos reales; sin peticiones a dominios externos
  en producción; sin saltos de layout durante la carga.

## 2. Producto de Ceustack

- En `LandingFooter`: línea "Ranquea es un producto de **Ceustack**" con enlace a
  `https://ceustack.com`, junto a los enlaces legales. Sin cambios en nav ni secciones.

## 3. Cookies y páginas legales

Mismo modelo que ceustack.com:

- **Páginas estáticas** en `public/` (Vite las copia a `dist/` tal cual): `aviso-legal.html`,
  `politica-de-privacidad.html`, `politica-de-cookies.html`. Contenido adaptado de las de
  ceustack — titular Álvaro Artiel Marruecos (NIF 01648720B), dominio ranquea.com, contacto
  desarrollo@ceustack.com. Estilo visual coherente con la landing de Ranquea (CSS inline propio,
  sin depender del bundle de la SPA). Con `noindex` NO — sí indexables, con canonical propio.
- **Banner de cookies**:
  - SPA: componente React `CookieBanner.tsx` (Aceptar / Rechazar), persistencia en
    `localStorage('cc-consent')` (misma clave que ceustack). Al aceptar:
    `gtag('consent','update',{analytics_storage:'granted'})`.
  - Páginas legales estáticas: mismo banner en vanilla JS (patrón ceustack).
  - `politica-de-cookies.html` incluye botón para retirar el consentimiento
    (borra `cc-consent`).
- Footer de la SPA enlaza a las tres páginas.

## 4. GTM / GA4 / Search Console

- `index.html` de la SPA (y páginas legales): snippet **GTM con Consent Mode v2**, default
  `analytics_storage: denied`, patrón idéntico a ceustack. ID de contenedor centralizado y
  visible; hasta que exista el contenedor real queda `GTM-XXXXXXX` (el snippet no rompe nada si
  el ID no existe).
- Altas manuales (usuario, con desarrollo@ceustack.com) — checklist:
  1. tagmanager.google.com → nuevo contenedor "ranquea.com" (Web) → apuntar el `GTM-…`.
  2. analytics.google.com → nueva propiedad GA4 "Ranquea" → crear flujo web ranquea.com →
     copiar el `G-…`.
  3. En GTM: tag "Google Analytics: configuración GA4" con el `G-…`, trigger All Pages → Publicar.
  4. search.google.com/search-console → añadir propiedad de dominio `ranquea.com` →
     verificación por **DNS TXT** (el registro lo puede añadir Claude vía MCP de Hostinger DNS).
  5. Enviar `https://ranquea.com/sitemap.xml` si se añade sitemap (fuera de alcance de este spec).
- Tras recibir el `GTM-…` real: sustituir el placeholder, rebuild y redeploy.

## Fuera de alcance

- Sitemap.xml, formulario de contacto, git init del repo, y el deploy a Hostinger (flujo ya
  preparado: zip → public_html vía MCP de Hostinger).

## Verificación

- `npm run build` limpio; abrir `dist` con preview local: fotos visibles, banner funciona
  (aceptar/rechazar persiste tras recarga), enlaces legales navegan, footer menciona Ceustack.
- Única petición externa: googletagmanager.com (el script carga siempre; sin consentimiento no
  escribe cookies de analítica — Consent Mode).
- Lighthouse: sin regresión relevante de Performance (fotos lazy + WebP pequeñas).
