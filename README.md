# Ranquea — Landing Page

Landing page one-page para Ranquea (plataforma de ligas fotográficas gamificadas).

## 🚀 Quick Start

Usa Node.js 24 LTS (validado con 24.14.0) y el archivo `package-lock.json` para instalaciones reproducibles.

```bash
# Instalar dependencias
npm ci

# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
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
npm run build

# 2. Crear .htaccess (ya existe)

# 3. Subir contenido de dist/ a public_html/
```

El archivo `.htaccess` ya maneja React Router y rewrite de URLs.

## ✅ Verificación

```bash
npx tsc -b    # TypeScript check
npm run build     # Build check
npm run lint      # Linting
```

---

**Status:** ✅ Listo para producción

## Configuración local y dependencias

- `.mcp.json` y los archivos `.env` son configuración privada local y están excluidos de Git. Configura los accesos MCP mediante variables de entorno o el gestor de secretos del cliente; nunca guardes tokens en archivos versionados.
- Esta landing no necesita credenciales para instalarse, compilarse ni ejecutarse. Las variables `VITE_*` se incluyen en el navegador: no deben contener secretos.
- ESLint 10 y typescript-eslint usan temporalmente overrides de `minimatch` 11.0.4 para corregir GHSA-g3hv-75wg-m249. Se limitan a ESLint, su config-array y typescript-estree, que consumen las API con nombre disponibles en esta versión. Revisa y elimina los overrides cuando las dependencias incorporen una versión corregida por sí mismas.
- Antes de publicar cambios, ejecuta `npm audit`, `npm run build` y `npm run lint`.
