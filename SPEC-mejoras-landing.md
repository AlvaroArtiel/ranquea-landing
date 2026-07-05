# SPEC — Rediseño landing ranquea.com (estilo Stripe)

Versión 1.0 · Junio 2026 · Autor: revisión técnica
Stack actual: React 19 + TS + Vite + Tailwind 3.4 (one-page, deploy Hostinger estático)

---

## 1. Contexto y objetivo

La landing actual (v1) es un primer approach correcto en estructura pero con dos problemas:

1. **Se parece demasiado a Ultracarta** (otro proyecto del mismo autor). Comparten paleta naranja, cards genéricas y layout. Ranquea necesita identidad propia.
2. **No transmite el producto real.** Todo son cards de texto con iconos Lucide. No se ve cómo funciona la plataforma: subir fotos, votación del jurado, rankings en vivo, logros. Faltan imágenes reales y mockups animados.

**Objetivo:** una landing que (a) se sienta premium tipo `stripe.com/es`, (b) muestre el producto real con capturas + mockups animados con imágenes de stock, y (c) tenga identidad visual diferenciada de Ultracarta.

El producto real ya existe y funciona: ver caso de éxito en `https://miradasceuta.ranquea.com/ranking/general` (Liga Miradas, 28 participantes, temporada 2025-2026). Las mecánicas a comunicar salen directamente de ahí.

---

## 2. Identidad visual (cambio de marca respecto a v1)

### 2.1 Paleta

El producto real usa **violeta `#5B3FFF`** como color primario (theme-color del PWA real). Adoptarlo como acento principal de la landing para alinear marca producto ↔ marketing y romper con el naranja de Ultracarta.

| Token | Valor | Uso |
|---|---|---|
| `--brand` | `#5B3FFF` | Acento primario, CTAs, links |
| `--brand-600` | `#4A37D4` | Hover de CTAs |
| `--brand-100` | `#EDEAFE` | Fondos suaves, badges |
| `--gold` | `#FFB400` | Ganadores / 1er puesto (coherente con el "Ganador del mes" real) |
| `--ink` | `#0A0A1A` | Texto sobre claro / fondos hero oscuros |
| `--surface` | `#FFFFFF` | Fondo principal **claro** (Stripe es claro, no oscuro) |
| `--surface-soft` | `#F6F7FB` | Secciones alternas |

**Decisión clave:** cambiar de tema oscuro (v1) a **tema claro tipo Stripe**, con un hero que use un degradado animado de marca. El producto (capturas) es claro, así que un landing claro integra mejor las capturas reales.

### 2.2 Tipografía

- Display/headings: una sans geométrica grande tipo Stripe. Recomendado: **"Söhne" no disponible libre → usar `Inter` o `Geist`** (vía fontsource, self-hosted para Hostinger). Pesos 400/500/600 y un 700 solo para H1.
- H1 hero: 56–76px, tracking negativo (-0.03em), line-height 1.02.
- Cuerpo: 17–18px, line-height 1.6.

### 2.3 Gradiente firma (estilo Stripe)

Stripe tiene su "wave" de color. Ranquea: un degradado diagonal animado violeta→azul→fucsia detrás del hero, en movimiento lento (CSS `@keyframes` desplazando `background-position`, respetando `prefers-reduced-motion`). Sutil, no saturado.

---

## 3. Estructura de secciones (nueva)

Orden propuesto, inspirado en la arquitectura de Stripe (hero → logos → bento de capacidades → números → casos → cierre):

1. **Nav** (sticky, fondo translúcido al hacer scroll) — logo, Funciones, Casos, Precios, "Iniciar sesión" + CTA "Solicitar demo".
2. **Hero** — H1 grande + subcopy + 2 CTAs + **mockup animado del producto** (no estático).
3. **Banda de confianza** — "Usado por ligas de fotografía en España" + logos/nombres de ligas reales (Liga Miradas Ceuta, etc.) en marquesina horizontal (como la fila de clientes de Stripe).
4. **Bento de capacidades** — grid asimétrico tipo Stripe con 4-5 bloques, cada uno con su mini-mockup animado (ver §4).
5. **Cómo funciona (3 pasos animados)** — Crea liga → Participantes suben fotos → Jurado vota y rankings en vivo. Cada paso con animación scroll-triggered.
6. **Números de impacto** — métricas grandes estilo Stripe (ej. "28 participantes", "8 jornadas", "48 votos/mes", "16 fotos/jornada") sacadas del caso real.
7. **Caso de éxito Liga Miradas** — sección dedicada con capturas reales del ranking general + ganador del mes + galería de autor.
8. **Casos de uso** — turismo, empresas, educación, marcas (mantener, rediseñar como tarjetas con foto).
9. **Testimonios** — rediseñar con foto/avatar.
10. **Precios** — mantener 2 planes, reestilar a claro + violeta.
11. **FAQ** — mantener (acordeón accesible ya implementado).
12. **CTA final** — banda violeta con degradado.
13. **Footer** — completar enlaces reales.

---

## 4. Mockups animados (el núcleo del encargo)

Cada mecánica se representa con un **mockup interactivo/animado** construido en HTML/CSS/JS (no vídeo pesado), usando **imágenes de stock** para las fotos. Todas las animaciones respetan `prefers-reduced-motion` (se congelan en su estado final).

### 4.1 Subida de fotos
- Mockup de móvil. Una foto de stock "entra" deslizándose desde abajo, aparece una barra de progreso de subida (0→100%), y al completar cambia a estado "✓ Subida — en revisión".
- Loop cada ~6s con 2-3 fotos distintas.
- Imágenes: paisajes/retratos libres (Unsplash/Pexels) optimizados a WebP.

### 4.2 Votación del jurado
- Tarjeta de foto con un panel de jurado. Aparecen estrellas/puntuación animada de 3 jueces (ej. 88, 91, 85) y se calcula la **media en vivo** (`88.0/100`) con un contador animado.
- Refleja el sistema real `/100` visto en el caso de éxito.

### 4.3 Rankings en directo
- Leaderboard con 5 filas (datos reales del caso: Luis Jose 642pts, Carlos 633.99, Pablo 630.01...). Al cargar en viewport, las filas se **reordenan con animación** (una sube de la posición 3 a la 1) para mostrar "tiempo real".
- Barras de puntos que crecen.

### 4.4 Galería pública / Ganador del mes
- Grid masonry de fotos de stock con overlay de puntuación y badge "Ganador" dorado, replicando la vista "Resultados finales" real (ver captura).

### 4.5 Vitrina de logros (gamificación)
- Mini-mockup con badges que hacen "pop" al entrar (animación `badge-pop` ya existe en index.css): Campeón anual, Primer lugar, Participación completa, etc. — tal cual el caso real.

### 4.6 Evolución mensual
- Mini gráfico de barras (las del dashboard real: Oct 1º, Nov 9º, Dic 1º...) animándose de 0 a su altura al hacer scroll.

---

## 5. Imágenes

- **Capturas reales:** usar las del producto (ranking general, ranking mensual, galería de autor, dashboard de stats). Pedir/exportar en alta resolución y mostrarlas dentro de "frames" de navegador/móvil con sombra suave (estilo Stripe product shots).
- **Stock para mockups:** banco de ~12-16 fotos de fotografía artística (paisaje, retrato, naturaleza) bajo licencia libre (Unsplash/Pexels). Optimizar a WebP, varios tamaños (`srcset`), lazy-load.
- **OG image real:** diseñar `og-image.png` 1200×630 con un montaje del producto.

---

## 6. Animaciones e interacción

- **Scroll-reveal:** secciones aparecen con fade+translateY al entrar en viewport (`IntersectionObserver`, no librería pesada). Ya hay `@keyframes fade-slide-up` en index.css.
- **Hero gradient:** degradado animado lento.
- **Hover en cards:** elevación sutil + borde violeta.
- **Contadores:** números de impacto cuentan de 0 a su valor al entrar en viewport.
- **Respeto absoluto a `prefers-reduced-motion`** (ya cubierto en CSS, extender a JS: si reduce, saltar al estado final sin animar).
- Sin librerías de animación pesadas (no Framer Motion en una landing estática); CSS + IntersectionObserver bastan. Peso objetivo < 200KB JS gzip.

---

## 7. Diferenciación explícita de Ultracarta

Checklist para que NO se parezca:
- [ ] Color primario violeta `#5B3FFF` (no naranja).
- [ ] Tema claro con hero de degradado (no fondo negro plano).
- [ ] Bento grid asimétrico (no grid uniforme de cards iguales).
- [ ] Mockups de producto reales (no solo iconos Lucide).
- [ ] Tipografía display grande y editorial.
- [ ] Caso de éxito con capturas reales.

---

## 8. Rendimiento, SEO y accesibilidad

- Mantener build estático Vite → Hostinger. Lighthouse objetivo: ≥95 en todas las categorías.
- Imágenes WebP + `loading="lazy"` + `srcset`.
- Fuentes self-hosted (sin bloqueo de Google Fonts; mejor para Hostinger y privacidad).
- Conservar JSON-LD, OG/Twitter, theme-color, canonical, skip-link y FAQ accesible que ya se añadieron en v1.
- Todos los mockups con `aria-hidden` (decorativos) + texto alternativo descriptivo en la sección.
- Contraste AA en violeta sobre blanco (verificar tono de texto).

---

## 9. Datos reales a usar (del caso de éxito)

Ranking general (temporada 2025-2026, 28 participantes, 8/8 jornadas):
1. Luis Jose Vigil-Escalera Quintanal — 642 pts (media 80.25)
2. Carlos Suarez A... — 633.99 (79.25)
3. Pablo Fernandez... — 630.01 (78.75)
4. Miguel Toro — 614.65 (76.83)
5. JuanDuran0076 — 597.35 (74.67)

Ganador del mes (Mayo 2026): "Amenazas" por Luis Jose Vigil-Escalera Quintanal — 91/100. Competencia: 16 fotos, 48 votos.

Sistema de puntuación: jurado puntúa cada foto sobre 100; se promedia. Logros: Campeón anual, Primer/Segundo/Tercer lugar, Participación completa, Primera foto, Puntuación perfecta.

> Nota: pedir permiso al cliente de Liga Miradas para usar nombres/fotos reales en marketing, o anonimizar ("L. Vigil-Escalera") y usar fotos de stock equivalentes.

---

## 10. Plan de implementación por fases

**Fase 1 — Re-skin (base):** nueva paleta violeta, tema claro, tipografía, hero con degradado animado, scroll-reveal. Reusa componentes v1.
**Fase 2 — Mockups animados:** construir los 6 mockups de §4 como componentes React aislados (`<MockupUpload/>`, `<MockupJury/>`, `<MockupRanking/>`, etc.).
**Fase 3 — Capturas y caso de éxito:** integrar imágenes reales en frames, sección Liga Miradas, banda de confianza.
**Fase 4 — Pulido:** contadores, optimización de imágenes (WebP/srcset), Lighthouse, accesibilidad, OG image.

**Entregable de cada fase:** build verificado (`tsc` + `vite build` + `eslint` en verde) y desplegable a Hostinger.

---

## 11. Criterios de aceptación

- La landing no comparte paleta ni layout reconocible con Ultracarta.
- Al menos 4 mecánicas (subida, jurado, ranking, logros) se ven con mockups animados creíbles.
- Hay ≥3 capturas reales del producto integradas con buen encuadre.
- Lighthouse ≥95 perf/a11y/SEO; respeta `prefers-reduced-motion`.
- Build estático funciona en Hostinger (rutas `/#...` con `.htaccess`).
