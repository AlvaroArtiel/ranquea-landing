# Ranquea — Landing Page

Landing page one-page para Ranquea (plataforma de ligas fotográficas gamificadas).

## 🚀 Quick Start

```bash
# Instalar dependencias
bun install

# Desarrollo
bun run dev

# Build para producción
bun run build

# Preview del build
bun run preview
```

## 📁 Estructura

```
ranquea/
├── src/
│   ├── components/landing/
│   │   ├── LandingNav.tsx
│   │   ├── LandingHero.tsx
│   │   ├── LandingFeatureGrid.tsx
│   │   ├── LandingFeatureGallery.tsx
│   │   ├── LandingFeatureRankings.tsx
│   │   ├── LandingUseCases.tsx
│   │   ├── LandingTestimonials.tsx
│   │   ├── LandingPricing.tsx
│   │   ├── LandingFAQ.tsx
│   │   ├── LandingFinalCTA.tsx
│   │   └── LandingFooter.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
└── .htaccess (para Hostinger)
```

## 🎨 Design

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS 3.4
- **Icons:** Lucide React 1.11
- **Colors:** CSS variables (--color-accent, etc)

## 📱 Responsive

- Mobile (< 640px): Single column
- Tablet (640-1024px): 2 columns
- Desktop (> 1024px): Full layout

## 🔗 CTAs

- Email: `info@ranquea.com`
- Teléfono: `+34XXXXXXXXX` (actualizar)
- WhatsApp: Opcional

## 📦 Deploy a Hostinger

```bash
# 1. Build
bun run build

# 2. Crear .htaccess (ya existe)

# 3. Subir contenido de dist/ a public_html/
```

El archivo `.htaccess` ya maneja React Router y rewrite de URLs.

## ✅ Verificación

```bash
bun run tsc -b    # TypeScript check
bun run build     # Build check
bun run lint      # Linting
```

---

**Status:** ✅ Listo para producción
