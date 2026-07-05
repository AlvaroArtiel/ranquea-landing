# Fotos, branding Ceustack, legales + cookies y analítica — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fotos reales en los mockups de la landing, mención "producto de Ceustack" en el footer, páginas legales + banner de cookies con Consent Mode, y snippet GTM listo para el alta en Google.

**Architecture:** Landing SPA (Vite + React 19 + Tailwind 3) sin router. Las fotos se sirven desde `public/photos/` y se inyectan vía la propiedad `css` existente de `photos.ts` (background en capas: imagen + degradado placeholder), así ningún componente cambia. Las páginas legales son HTML estático en `public/` (Vite las copia a `dist/`). Cookies: clave `localStorage('cc-consent')` compartida con el patrón ceustack; React `CookieBanner` en la SPA y vanilla JS en las páginas estáticas.

**Tech Stack:** Vite 8, React 19, TypeScript, Tailwind 3. Sin framework de tests — la verificación es `npm run build` + `npm run lint` + inspección visual con `npm run preview`.

## Global Constraints

- Titular legal: Álvaro Artiel Marruecos, NIF 01648720B, Av. San Francisco Javier, 51001 Ceuta, contacto desarrollo@ceustack.com (idéntico a ceustack.com).
- Clave de consentimiento: `cc-consent`, valores `granted` | `denied` (mismas que ceustack).
- ID de GTM placeholder hasta el alta: `GTM-XXXXXXX` — aparece SOLO en `index.html` y en las 3 páginas legales; documentar dónde sustituirlo.
- Fotos: licencia Unsplash, WebP, 640 px ancho, objetivo ≤ 40 KB cada una, en `public/photos/p1.webp` … `p6.webp`.
- Sin peticiones externas nuevas salvo googletagmanager.com.
- Textos de la web en español.
- Commit tras cada tarea (el repo se inicializa en la Tarea 0).

---

### Task 0: Inicializar git

**Files:** Create: `.gitignore`

- [ ] **Step 1: Crear `.gitignore`**

```gitignore
node_modules/
dist/
deploy/
*.log
.fuse_hidden*
```

- [ ] **Step 2: Borrar residuos `.fuse_hidden*`**

```powershell
Get-ChildItem -Recurse -Force -Filter ".fuse_hidden*" | Remove-Item -Force
```

- [ ] **Step 3: init + commit inicial**

```bash
git init && git add -A && git commit -m "chore: estado inicial de la landing de ranquea.com"
```

Expected: commit creado sin `node_modules` ni `dist` en el índice.

---

### Task 1: Fotos reales en los mockups

**Files:**
- Create: `public/photos/p1.webp` … `public/photos/p6.webp`
- Modify: `src/components/landing/mockups/photos.ts`

**Interfaces:**
- Produces: `PHOTOS[n].css` pasa a valer `url('/photos/pN.webp') center/cover no-repeat, <degradado original>`. Los consumidores (`MockupGallery`, `MockupJury`, `MockupUpload`, `MockupFullProcess`, `MockupHeroDashboard`, `LandingCaseStudy`) NO cambian: ya hacen `style={{ background: photo.css }}`.

- [ ] **Step 1: Descargar candidatas de Unsplash**

Temática por entrada: p1 "Amenazas" (cielo tormentoso/mar oscuro), p2 "Marea baja" (playa clara), p3 "Acantilado" (costa rocosa), p4 "Hierro & sal" (puerto/industrial al atardecer), p5 "La luz que se va" (atardecer cálido), p6 "Sed en flor" (flor magenta/rosa).

```bash
mkdir -p public/photos
curl -sL "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=640&q=65&fm=webp&fit=crop" -o public/photos/p1.webp
curl -sL "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=640&q=65&fm=webp&fit=crop" -o public/photos/p2.webp
curl -sL "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=640&q=65&fm=webp&fit=crop" -o public/photos/p3.webp
curl -sL "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=640&q=65&fm=webp&fit=crop" -o public/photos/p4.webp
curl -sL "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=640&q=65&fm=webp&fit=crop" -o public/photos/p5.webp
curl -sL "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=640&q=65&fm=webp&fit=crop" -o public/photos/p6.webp
ls -la public/photos
```

Expected: 6 ficheros de 10–45 KB.

- [ ] **Step 2: Verificar visualmente cada foto** — abrir cada `pN.webp` con la herramienta Read (renderiza imágenes). Criterio: encaja con la temática de su título y se ve bien recortada a 4/3 y 16/9. Si una URL devuelve 404/HTML o la foto no encaja, buscar alternativa en unsplash.com (mismo patrón de URL `images.unsplash.com/photo-<id>`) y repetir.

- [ ] **Step 3: Actualizar `photos.ts`**

```ts
/** Fotos de ejemplo (Unsplash, licencia libre) servidas desde /public/photos.
 *  El degradado queda debajo como placeholder mientras carga la imagen. */
export const PHOTOS: { id: string; title: string; author: string; initials: string; css: string }[] = [
  { id: 'p1', title: 'Amenazas', author: 'Participante #07', initials: 'A7', css: "url('/photos/p1.webp') center/cover no-repeat, linear-gradient(160deg,#1e3a5f 0%,#2c5282 40%,#718096 75%,#cbd5e0 100%)" },
  { id: 'p2', title: 'Marea baja', author: 'Participante #12', initials: 'B2', css: "url('/photos/p2.webp') center/cover no-repeat, linear-gradient(180deg,#a3bffa 0%,#cbd5e0 55%,#e2e8f0 100%)" },
  { id: 'p3', title: 'Acantilado', author: 'Participante #03', initials: 'C3', css: "url('/photos/p3.webp') center/cover no-repeat, linear-gradient(150deg,#2d3748 0%,#4a5568 45%,#a0aec0 100%)" },
  { id: 'p4', title: 'Hierro & sal', author: 'Participante #21', initials: 'D1', css: "url('/photos/p4.webp') center/cover no-repeat, linear-gradient(120deg,#dd6b20 0%,#ed8936 35%,#f6ad55 65%,#1a202c 100%)" },
  { id: 'p5', title: 'La luz que se va', author: 'Participante #15', initials: 'E5', css: "url('/photos/p5.webp') center/cover no-repeat, linear-gradient(135deg,#742a2a 0%,#c05621 40%,#ed8936 70%,#2d3748 100%)" },
  { id: 'p6', title: 'Sed en flor', author: 'Participante #09', initials: 'F9', css: "url('/photos/p6.webp') center/cover no-repeat, radial-gradient(circle at 40% 35%,#d53f8c 0%,#97266d 30%,#1a202c 80%)" },
]
```

Nota: los textos de las fotos que aparecen encima llevan `text-white` — verificar legibilidad en el paso 5; si alguna foto es muy clara, oscurecer con una capa extra `linear-gradient(rgba(0,0,0,.25),rgba(0,0,0,.25))` delante de la url en esa entrada.

- [ ] **Step 4: Build y lint**

Run: `npm run build && npm run lint` — Expected: sin errores.

- [ ] **Step 5: Verificación visual** — `npm run dev` en background y revisar con chrome-devtools MCP (o el usuario en el navegador): hero dashboard, galería, jurado, subida, caso de estudio. Fotos visibles, textos legibles, sin saltos de layout.

- [ ] **Step 6: Commit** — `git add -A && git commit -m "feat: fotos reales de ejemplo en los mockups"`

---

### Task 2: Footer — producto de Ceustack + enlaces legales

**Files:** Modify: `src/components/landing/LandingFooter.tsx`

- [ ] **Step 1: Actualizar columna Legal (líneas 15-18)**

```ts
  { title: 'Legal', links: [
    { label: 'Aviso legal', href: '/aviso-legal.html' },
    { label: 'Privacidad', href: '/politica-de-privacidad.html' },
    { label: 'Cookies', href: '/politica-de-cookies.html' },
  ] },
```

- [ ] **Step 2: Línea de cierre con Ceustack (líneas 52-54)**

```tsx
        <div className="border-t border-[var(--border-subtle)] pt-7 text-center">
          <p className="text-[var(--text-faint)] text-[12px]">
            © 2026 Ranquea · Hecho con cariño en Ceuta, España · Ranquea es un producto de{' '}
            <a href="https://ceustack.com" rel="noopener" className="font-semibold text-[var(--text-secondary)] hover:text-[var(--brand)] transition-colors">Ceustack</a>
          </p>
        </div>
```

- [ ] **Step 3: Build + vista** — `npm run build && npm run lint`; comprobar footer en dev.
- [ ] **Step 4: Commit** — `git commit -am "feat: enlaces legales y mención de Ceustack en el footer"`

---

### Task 3: GTM + Consent Mode + CookieBanner en la SPA

**Files:**
- Modify: `index.html` (raíz del proyecto)
- Create: `src/components/CookieBanner.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Produces: patrón de snippet GTM+consent reutilizado literal en las páginas legales (Task 4). Clave `cc-consent`.

- [ ] **Step 1: Snippet en `index.html`** — dentro de `<head>`, justo tras `<meta charset>` / viewport y ANTES de cualquier otro script:

```html
    <!-- Consent Mode v2 (denegado por defecto hasta consentimiento) -->
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('consent', 'default', {
        ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
        analytics_storage: 'denied', wait_for_update: 500
      });
      try { if (localStorage.getItem('cc-consent') === 'granted') { gtag('consent', 'update', { analytics_storage: 'granted' }); } } catch (e) {}
    </script>
    <!-- Google Tag Manager (sustituir GTM-XXXXXXX por el ID real al crear el contenedor) -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
    <!-- End Google Tag Manager -->
```

Y justo tras `<body>`:

```html
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
```

- [ ] **Step 2: Crear `src/components/CookieBanner.tsx`**

```tsx
import { useState } from 'react'

declare global {
  interface Window { gtag?: (...args: unknown[]) => void }
}

function readConsent(): string | null {
  try { return localStorage.getItem('cc-consent') } catch { return null }
}

export function CookieBanner() {
  const [decided, setDecided] = useState(() => readConsent() !== null)

  if (decided) return null

  const decide = (granted: boolean) => {
    try { localStorage.setItem('cc-consent', granted ? 'granted' : 'denied') } catch { /* almacenamiento bloqueado */ }
    if (granted) window.gtag?.('consent', 'update', { analytics_storage: 'granted' })
    setDecided(true)
  }

  return (
    <div role="dialog" aria-label="Aviso de cookies" className="fixed bottom-4 left-4 right-4 sm:left-auto sm:max-w-sm z-50 rounded-2xl border border-[var(--border-subtle)] bg-white p-5 shadow-xl">
      <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed mb-4">
        Usamos cookies de analítica (Google Analytics) para entender cómo se usa la web. Solo se activan si aceptas.{' '}
        <a href="/politica-de-cookies.html" className="underline hover:text-[var(--brand)]">Más info</a>
      </p>
      <div className="flex gap-2">
        <button onClick={() => decide(true)} className="flex-1 px-4 py-2 rounded-lg text-[13px] font-semibold" style={{ background: 'var(--brand)', color: 'var(--on-brand)' }}>Aceptar</button>
        <button onClick={() => decide(false)} className="flex-1 px-4 py-2 rounded-lg text-[13px] font-semibold border border-[var(--border-subtle)] text-[var(--text-secondary)]">Rechazar</button>
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Montarlo en `src/App.tsx`** — `import { CookieBanner } from './components/CookieBanner'` y añadir `<CookieBanner />` tras `<LandingFooter />`.

- [ ] **Step 4: Verificar** — `npm run build && npm run lint`; en dev: banner visible en visita nueva (localStorage limpio), Aceptar → desaparece y `localStorage['cc-consent'] === 'granted'`; recargar → no reaparece; Rechazar (tras borrar la clave) → `denied` y no reaparece.

- [ ] **Step 5: Commit** — `git add -A && git commit -m "feat: GTM con Consent Mode y banner de cookies"`

---

### Task 4: Páginas legales estáticas

**Files:** Create: `public/aviso-legal.html`, `public/politica-de-privacidad.html`, `public/politica-de-cookies.html`

**Interfaces:** Consumes: snippet GTM+consent de Task 3 (literal). Enlazadas desde el footer (Task 2).

Las tres páginas comparten esqueleto; el contenido de cada una se adapta de su homóloga en `C:\Users\alvar\Documents\Ceustack\` (`aviso-legal.html`, `politica-de-privacidad.html`, `politica-de-cookies.html`) con estas sustituciones exactas:

1. `ceustack.com` → `ranquea.com` (dominios y canonicals; el email desarrollo@ceustack.com NO cambia).
2. Actividad del titular: «plataforma de ligas fotográficas gamificadas "Ranquea", un producto de Ceustack».
3. Eliminar toda referencia a FormSubmit/formularios de contacto (ranquea no tiene formulario); en privacidad, los datos tratados son: correos recibidos en soporte@/info@ranquea.com y analítica (GA4 vía GTM, previa aceptación).
4. En la tabla de cookies: `cc-consent` (técnica, localStorage) y las de Google Analytics (`_ga`, `_ga_*`, analítica, 13 meses/2 años, solo tras consentimiento).
5. Fecha «Última actualización: 5 de julio de 2026».

- [ ] **Step 1: Crear el esqueleto compartido** (mostrado con el contenido de aviso-legal; las otras dos cambian `<title>`, description, canonical, `<h1>` y el `<main>`):

```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  [SNIPPET CONSENT MODE + GTM — copiar literal de index.html, Task 3 Step 1]
  <title>Aviso legal | Ranquea</title>
  <meta name="description" content="Información legal del titular de ranquea.com conforme a la LSSI-CE." />
  <link rel="canonical" href="https://ranquea.com/aviso-legal.html" />
  <meta name="theme-color" content="#5B3FFF" />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <style>
    :root { --brand:#5B3FFF; --ink:#111322; --muted:#5a5f73; --border:#e7e8ef; }
    * { box-sizing:border-box; margin:0; }
    body { font-family:system-ui,-apple-system,'Segoe UI',sans-serif; color:var(--ink); line-height:1.7; background:#fff; }
    header, footer { border-color:var(--border); }
    header { border-bottom:1px solid var(--border); padding:1rem 1.25rem; }
    header a { font-weight:700; font-size:18px; color:var(--ink); text-decoration:none; letter-spacing:-0.01em; }
    header a span { color:var(--brand); }
    main { max-width:720px; margin:0 auto; padding:3rem 1.25rem 4rem; }
    h1 { font-size:1.9rem; letter-spacing:-0.02em; margin-bottom:.4rem; }
    h2 { font-size:1.15rem; margin:2rem 0 .6rem; }
    p, li { color:var(--muted); font-size:15px; }
    p + p, ul { margin-top:.8rem; } ul { padding-left:1.2rem; }
    a { color:var(--brand); }
    strong { color:var(--ink); }
    table { border-collapse:collapse; width:100%; margin-top:1rem; font-size:13px; }
    th, td { border:1px solid var(--border); padding:.5rem .6rem; text-align:left; color:var(--muted); }
    footer { border-top:1px solid var(--border); padding:1.5rem 1.25rem; text-align:center; font-size:12px; color:var(--muted); }
    .fecha { font-size:13px; color:var(--muted); margin-bottom:1.5rem; }
    #cookie-banner { position:fixed; bottom:1rem; left:1rem; right:1rem; max-width:24rem; margin-left:auto; background:#fff; border:1px solid var(--border); border-radius:16px; padding:1.25rem; box-shadow:0 12px 32px rgba(17,19,34,.14); font-size:13px; z-index:50; }
    #cookie-banner .botones { display:flex; gap:.5rem; margin-top:1rem; }
    #cookie-banner button { flex:1; padding:.55rem 1rem; border-radius:9px; font-size:13px; font-weight:600; cursor:pointer; }
    #cookie-banner .aceptar { background:var(--brand); color:#fff; border:none; }
    #cookie-banner .rechazar { background:#fff; color:var(--muted); border:1px solid var(--border); }
  </style>
</head>
<body>
  [NOSCRIPT GTM — copiar literal de index.html, Task 3 Step 1]
  <header><a href="/">Ranquea<span>.</span></a></header>
  <main>
    <h1>Aviso legal</h1>
    <p class="fecha">Última actualización: 5 de julio de 2026.</p>
    [CONTENIDO — secciones 1-7 adaptadas de C:\Users\alvar\Documents\Ceustack\aviso-legal.html con las sustituciones 1-5 de arriba]
  </main>
  <footer>© 2026 Ranquea · Ranquea es un producto de <a href="https://ceustack.com" rel="noopener">Ceustack</a> ·
    <a href="/aviso-legal.html">Aviso legal</a> · <a href="/politica-de-privacidad.html">Privacidad</a> · <a href="/politica-de-cookies.html">Cookies</a></footer>
  <div id="cookie-banner" hidden role="dialog" aria-label="Aviso de cookies">
    <p>Usamos cookies de analítica (Google Analytics) para entender cómo se usa la web. Solo se activan si aceptas. <a href="/politica-de-cookies.html">Más info</a></p>
    <div class="botones">
      <button class="aceptar" type="button">Aceptar</button>
      <button class="rechazar" type="button">Rechazar</button>
    </div>
  </div>
  <script>
    (function () {
      var b = document.getElementById('cookie-banner');
      var stored = null; try { stored = localStorage.getItem('cc-consent'); } catch (e) {}
      if (stored !== null) return;
      b.hidden = false;
      function decide(granted) {
        try { localStorage.setItem('cc-consent', granted ? 'granted' : 'denied'); } catch (e) {}
        if (granted && window.gtag) gtag('consent', 'update', { analytics_storage: 'granted' });
        b.hidden = true;
      }
      b.querySelector('.aceptar').addEventListener('click', function () { decide(true); });
      b.querySelector('.rechazar').addEventListener('click', function () { decide(false); });
    })();
  </script>
</body>
</html>
```

- [ ] **Step 2: `politica-de-privacidad.html`** — mismo esqueleto; contenido adaptado de la de ceustack (responsable, base legal, datos tratados según sustitución 3, derechos ARSOPOL, AEPD). Title: `Política de privacidad | Ranquea`.

- [ ] **Step 3: `politica-de-cookies.html`** — mismo esqueleto; tabla según sustitución 4, y botón «Retirar mi consentimiento» que ejecuta `localStorage.removeItem('cc-consent'); location.reload()` (patrón de la página de ceustack, línea ~133).

- [ ] **Step 4: Verificar** — `npm run build`; comprobar que `dist/` contiene los 3 HTML; abrirlos en preview: estilos correctos, banner aparece con localStorage limpio, enlaces cruzados funcionan, retirar consentimiento vuelve a mostrar el banner.

- [ ] **Step 5: Commit** — `git add -A && git commit -m "feat: páginas legales (aviso legal, privacidad, cookies)"`

---

### Task 5: Build final, zip de deploy y checklist Google

**Files:** Create: `deploy/ranquea_<fecha>.zip` (no versionado), `docs/GOOGLE-SETUP.md`

- [ ] **Step 1: Build limpio** — borrar `dist/`, `npm run build`. Expected: `dist/` solo con assets del build actual + fotos + 3 legales + `.htaccess` (verificar que Vite copió `.htaccess`; si vive en la raíz del proyecto y no en `public/`, moverlo a `public/`).

- [ ] **Step 2: Zip de deploy** — mismo comando PowerShell usado antes (contenido de `dist/` en la raíz del zip) a `deploy/ranquea_<yyyyMMdd_HHmmss>.zip`; verificar entradas del zip (debe incluir `.htaccess`, `photos/`, los 3 `.html` legales).

- [ ] **Step 3: Escribir `docs/GOOGLE-SETUP.md`** — checklist para el usuario (con desarrollo@ceustack.com):

```markdown
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
```

- [ ] **Step 4: Commit** — `git add -A && git commit -m "docs: checklist de alta en GTM/GA4/Search Console"`

- [ ] **Step 5: Verificación final de spec** — repasar la sección «Verificación» del spec (`docs/superpowers/specs/2026-07-05-fotos-legales-analytics-design.md`): fotos, banner, legales, footer, única petición externa googletagmanager.com.
