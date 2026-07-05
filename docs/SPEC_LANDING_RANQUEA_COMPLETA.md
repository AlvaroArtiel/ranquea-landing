# Ranquea — Landing Page Completa

## Descripción General

**Ranquea** es una plataforma de ligas fotográficas gamificadas. Los usuarios suben fotos, otros votan, se crean rankings en vivo con leaderboards, badges, y una experiencia completamente competitiva y social.

## Estructura de Componentes

### 1. LandingNav.tsx
- Header fixed con smooth scroll
- Logo Ranquea
- Links: Funciones, Casos de uso, Precios
- CTAs: "Iniciar sesión" + "Crear liga gratis" (accent color)
- Transparency en top → opaque al scroll

### 2. LandingHero.tsx
- Subtítulo: "Las ligas fotográficas del futuro"
- H1: "Compite fotografiando. Vence votando."
- Descripción: "Sube tus mejores fotos a ligas temáticas, compite contra fotógrafos de todo el mundo y consigue badges mientras votas la mejor fotografía de cada ronda."
- CTAs: "Crear liga gratis" + "Ver demo"
- Mockup: galería interactiva animada con fotos + contador de votos (pulse animation)

### 3. LandingFeatureGrid.tsx
- 8 feature cards con iconos lucide-react
- Estructura: Icon + Title + Description
- Features:
  1. **Ligas temáticas**: Crea ligas privadas o públicas con reglas personalizadas
  2. **Rankings en vivo**: Leaderboard actualizado en tiempo real mientras votan
  3. **Badges y logros**: Gana badges por victorias, votos y participación
  4. **Voto limpio**: Cada votación cuenta una sola vez, no hay bots
  5. **Categorías de fotos**: Categoriza por tema, formato, técnica
  6. **Resultados justos**: Estadísticas completas: votos, %, comentarios
  7. **Share social**: Comparte tu perfil y lignas en redes
  8. **API pública**: Integra Ranquea en tu web o app

### 4. LandingFeatureGallery.tsx
- Mockup: galería con upload placeholder
- Muestra 4 fotos fake con votación en vivo
- Animación: foto entra, se muestra contador de votos, crece el número

### 5. LandingFeatureRankings.tsx
- Leaderboard animado con 5 posiciones
- Posiciones: #1 (gold), #2 (silver), #3 (bronze), #4-5 (text)
- Animación: puntuación sube y baja levemente (ranking-update keyframe)

### 6. LandingUseCases.tsx
- 4 casos de uso con iconos
- Caso 1: Fotógrafos profesionales compilador portafolio
- Caso 2: Comunidades temáticas (naturaleza, street, retrato)
- Caso 3: Torneos corporativos y eventos
- Caso 4: Educación fotográfica (academias, cursos)

### 7. LandingTestimonials.tsx
- 3-4 testimonios de fotógrafos reales
- Avatar + nombre + rol + quote
- Grid layout

### 8. LandingPricing.tsx
- 2 planes: Starter €9.90 y Pro €29.90
- Pro marcado con badge "RECOMENDADO"
- Features en bullets
- Starter: creación de ligas, votación básica
- Pro: límites mayores, analytics, custom branding

### 9. LandingFAQ.tsx
- Accordion con 8-10 FAQs
- ¿Cuánto cuesta? ¿Necesito CIF? ¿Hay límite de fotos? etc.

### 10. LandingFinalCTA.tsx
- Sección cierre antes de footer
- Copy directo: "Crea tu primera liga ahora"
- 2 CTAs: Tel + WhatsApp + Email

### 11. LandingFooter.tsx
- 4 columnas: Producto, Recursos, Legal, Empresa
- Links sociales (Twitter, Instagram)
- Copyright

## Animaciones (App.css)

- `fade-slide-up`: fade in + slide up 8px
- `vote-pulse`: escala 1 → 1.06 en votos
- `photo-reveal`: foto entra con opacity 0 → 1
- `ranking-update`: número sube/baja suavemente
- `badge-pop`: badge entra con scale 0.92 → 1

## Colores CSS Variables

```css
--color-accent: /* primary teal/cyan */
--color-accent-faint: /* rgba accent con transparency */
--color-accent-border: /* accent border */
--color-warning: /* orange para destacados */
--color-leaf: /* verde para badges */
--color-text-primary:
--color-text-muted:
--color-surface-1, surface-2, surface-3:
```

## Copy Exacto

### Hero
- **Subtítulo**: "Las ligas fotográficas del futuro"
- **H1**: "Compite fotografiando. Vence votando."
- **Descripción**: "Sube tus mejores fotos a ligas temáticas, compite contra fotógrafos de todo el mundo y consigue badges mientras votas la mejor fotografía de cada ronda."

### Features
*(Ver sección 3 arriba)*

### Casos de uso
- Fotógrafos profesionales
- Comunidades temáticas
- Torneos corporativos
- Educación fotográfica

### Pricing
- **Starter**: €9.90/mes
- **Pro**: €29.90/mes (RECOMENDADO)

### CTAs
- href="tel:+34XXX-XXX-XXX"
- href="mailto:info@ranquea.com"
- href="https://wa.me/34XXX"

## Responsive Breakpoints

- Mobile < 640px: 1 col, px-4
- Tablet 640-1024px: 2 cols
- Desktop > 1024px: full layout

## Validación Pre-Entrega

- TypeScript sin errores
- Vite build sin errores
- Responsive en 3 breakpoints
- Animaciones suaves (prefers-reduced-motion respetado)
- CTAs funcionales (tel:, mailto:, wa.me)
- Copy exacto del spec
