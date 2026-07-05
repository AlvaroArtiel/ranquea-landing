# Validación de Landing Page Ranquea

## Estructura de Archivos Creados

### Componentes Landing (11 archivos)
- ✅ `src/components/landing/LandingNav.ranquea.tsx` — Header fixed con smooth scroll
- ✅ `src/components/landing/LandingHero.ranquea.tsx` — Hero + mockup galería animado
- ✅ `src/components/landing/LandingFeatureGrid.ranquea.tsx` — 8 feature cards
- ✅ `src/components/landing/LandingFeatureGallery.ranquea.tsx` — Upload + galería con votos
- ✅ `src/components/landing/LandingFeatureRankings.ranquea.tsx` — Leaderboard animado
- ✅ `src/components/landing/LandingUseCases.ranquea.tsx` — 4 casos de uso
- ✅ `src/components/landing/LandingTestimonials.ranquea.tsx` — 3 testimonios
- ✅ `src/components/landing/LandingPricing.ranquea.tsx` — 2 planes (Starter €9.90, Pro €29.90)
- ✅ `src/components/landing/LandingFAQ.ranquea.tsx` — Accordion con 9 FAQs
- ✅ `src/components/landing/LandingFinalCTA.ranquea.tsx` — Sección cierre (Tel + WhatsApp + Email)
- ✅ `src/components/landing/LandingFooter.ranquea.tsx` — 4 columnas + sociales

### Página Principal
- ✅ `src/pages/LandingRanquea.tsx` — Composición de todos los componentes

### Configuración
- ✅ `tailwind.config.ts` — Actualizado con animaciones Ranquea
- ✅ `src/App.css` — Keyframes para animaciones
- ✅ `docs/superpowers/specs/SPEC_LANDING_RANQUEA_COMPLETA.md` — Spec completo

---

## Checklist de Validación

### 1. TypeScript & Compilación
```bash
cd src
bun run tsc -b  # Debe retornar 0 errores
```
**Validar:**
- [ ] Sin errores de tipo
- [ ] Todas las importaciones resueltas
- [ ] Props tipadas correctamente

### 2. Animaciones
Los componentes incluyen:

#### LandingHero.ranquea.tsx
- ✅ Mockup de galería con contador de votos
- ✅ Animation: `ranquea-photo-reveal` en foto
- ✅ Animation: `ranquea-vote-pulse` en votos
- ✅ useInView hook para trigger
- ✅ useReducedMotion para accesibilidad

#### LandingFeatureGallery.ranquea.tsx
- ✅ Grid de 4 fotos con gradientes
- ✅ Animation: `ranquea-photo-reveal` escalonado
- ✅ Votos incrementan aleatoriamente
- ✅ Hover overlay con contador

#### LandingFeatureRankings.ranquea.tsx
- ✅ Leaderboard animado
- ✅ Animation: `ranquea-ranking-update`
- ✅ Animation: `ranquea-badge-pop`
- ✅ Colores de medallas (Gold, Silver, Bronze)

### 3. Responsive Design
**Validar en 3 breakpoints:**

#### Mobile (< 640px)
- [ ] Menú colapsado
- [ ] Grid de features: 1 columna
- [ ] Pricing: 1 columna con full width
- [ ] Footer: 2 columnas
- [ ] Font sizes reducidos
- [ ] Padding/margin apropiado

#### Tablet (640-1024px)
- [ ] Menú visible
- [ ] Grid de features: 2 columnas
- [ ] Pricing: 2 columnas
- [ ] Footer: 4 columnas
- [ ] Typography intermedia

#### Desktop (> 1024px)
- [ ] Layout completo
- [ ] Features: 4 columnas (o 5 en grid)
- [ ] Gallery/Rankings: 2 columnas lado a lado
- [ ] Maximum width respetado (max-w-6xl)

### 4. Copy & Contenido
- [ ] Hero H1: "Compite fotografiando. Vence votando."
- [ ] Hero descripción: "Sube tus mejores fotos a ligas temáticas..."
- [ ] 8 features en FeatureGrid con títulos correctos
- [ ] 4 casos de uso presentes
- [ ] 3 testimonios con avatar + nombre + rol + quote
- [ ] Pricing: Starter €9.90 + Pro €29.90 (RECOMENDADO)
- [ ] FAQ: 9 preguntas con respuestas completas
- [ ] Footer: 4 columnas + links sociales

### 5. CTAs Funcionales
- [ ] Nav: "Crear liga gratis" — href="#crear"
- [ ] Hero: "Crear liga gratis" — href="#crear"
- [ ] Hero: "Ver una demo" — href="#demo"
- [ ] FinalCTA: 
  - [ ] Teléfono: `href="tel:+34XXX-XXX-XXX"`
  - [ ] WhatsApp: `href="https://wa.me/34XXXXXXXXX"`
  - [ ] Email: `href="mailto:info@ranquea.com"`
- [ ] Footer: Links a secciones (FAQs, Casos de uso, etc.)

### 6. Colores & Theming
- [ ] CSS variables aplicadas:
  - [ ] `--color-accent` para primarios
  - [ ] `--color-accent-faint` para backgrounds
  - [ ] `--color-accent-border` para borders
  - [ ] `--color-warning` para warnings
  - [ ] `--color-leaf` para badges/positivos
  - [ ] `--color-text-primary`, `text-muted`, `text-faint`
  - [ ] `--surface-1`, `surface-2`, `surface-3`

### 7. Smooth Scroll & UX
- [ ] Scroll smooth en Nav (transition-colors)
- [ ] Nav transparency → opaque al scroll
- [ ] Links de secciones con IDs (funciones, casos-uso, precios, faq)
- [ ] Hover states en botones y links
- [ ] Transitions suaves (0.2-0.5s típicamente)

### 8. Accesibilidad
- [ ] prefers-reduced-motion: reduce respetado
  - [ ] Animaciones deshabilitadas cuando está activo
  - [ ] Contenido sigue siendo visible
- [ ] alt text en imágenes
- [ ] aria-hidden en iconos decorativos
- [ ] Contraste de colores WCAG AA
- [ ] Links descriptivos

### 9. Estructura HTML/Semantic
- [ ] `<header>` para nav
- [ ] `<main>` para contenido
- [ ] `<section>` para cada parte
- [ ] `<footer>` al final
- [ ] Headings jerárquicos (h1, h2)
- [ ] Usar `<button>` o `<a>` según contexto

### 10. Performance
- [ ] images lazy loaded (loading="lazy")
- [ ] Images con decoding="async"
- [ ] No bloating innecesario
- [ ] useInView para animar solo cuando visible
- [ ] Eventos passive ({ passive: true })

---

## Cómo Usar

### Para Integrar en el Proyecto
1. **Importar en router o donde corresponda:**
   ```tsx
   import { LandingRanquea } from '@/pages/LandingRanquea'
   
   // En router:
   {
     path: '/ranquea',
     element: <LandingRanquea />,
   }
   ```

2. **Compilar:**
   ```bash
   bun run tsc -b
   bun run build
   ```

3. **Probar localmente:**
   ```bash
   bun dev
   # Ir a http://localhost:5173/ranquea (o tu ruta)
   ```

### Para Personalizar
- **Animaciones:** Editar keyframes en `src/App.css`
- **Colores:** Cambiar CSS variables en `:root` o `.dark`
- **Copy:** Editar strings en cada componente
- **Layout:** Ajustar grid/flex en Tailwind classes
- **CTAs:** Actualizar href en componentes (tel, wa.me, mailto)

---

## Archivos Relacionados

- **Spec Completo:** `docs/superpowers/specs/SPEC_LANDING_RANQUEA_COMPLETA.md`
- **Tailwind Config:** `tailwind.config.ts`
- **Global CSS:** `src/App.css`
- **Hooks Reutilizados:** 
  - `src/hooks/useInView.ts`
  - `src/hooks/useReducedMotion.ts`
- **Componentes Reutilizados:**
  - `src/components/Accordion.tsx`

---

## Notas Técnicas

1. **Nombres con .ranquea.tsx** — Distinto del código existente para evitar conflictos
2. **Hooks de UltraCarta reutilizados** — useInView + useReducedMotion ya existen
3. **Accordion component** — Reutilizado de UltraCarta
4. **Animaciones CSS-first** — No dependen de JavaScript para arrancar
5. **Dark mode ready** — Los colores usan CSS variables que respetan el theme

---

## QA/Testing

### Visual Testing
- [ ] Pantalla completa sin scrollbar horizontal
- [ ] Gradientes suaves sin bandas
- [ ] Texto legible en todos los tamaños
- [ ] Imágenes correctas (sin 404)

### Functional Testing
- [ ] Smooth scroll funciona
- [ ] Animaciones suaves
- [ ] Botones clicables
- [ ] Links abren correctamente
- [ ] Formularios accesibles (si aplica)

### Browser Testing
- [ ] Chrome/Edge (Windows)
- [ ] Firefox
- [ ] Safari (macOS/iOS si es posible)
- [ ] Mobile (iOS Safari, Chrome Android)

---

## Status

- ✅ **Componentes:** Todos creados (11/11)
- ✅ **Página:** LandingRanquea.tsx lista
- ✅ **Animaciones:** 4 keyframes + prefers-reduced-motion
- ✅ **Tailwind config:** Actualizado
- ✅ **CSS global:** Actualizado
- ⏳ **Compilación:** Pendiente en entorno local (bun)
- ⏳ **QA/Testing:** Pendiente ejecución

---

**Próximos pasos:**
1. Compilar con `bun run tsc -b`
2. Ejecutar `bun run build`
3. Probar visualmente en navegador
4. Realizar QA checklist
5. Deploy si todo ok
