# Julian Voss — Photography Landing Page

Landing page para un fotógrafo profesional, construida con **Astro** + **Tailwind CSS**. Basada en la estructura del diseño de Figma original, con un rediseño visual premium (tipografía editorial, paleta cálida en tonos tinta/latón, microinteracciones) y contenido real (sin lorem ipsum).

## Estructura

```
src/
  components/
    Nav.astro          Barra de navegación flotante + menú móvil
    Hero.astro          Sección principal
    About.astro         Sobre el fotógrafo
    Studies.astro       Proyectos personales / estudios fotográficos
    Gallery.astro       Galería en grid
    Testimonials.astro  Testimonios de clientes
    Contact.astro       Formulario de contacto
    Footer.astro        Pie de página
  layouts/
    Layout.astro         Layout base (fuentes, meta tags, animaciones on-scroll)
  pages/
    index.astro           Ensambla todas las secciones
  styles/
    global.css            Tailwind + estilos base/componentes
public/
  images/                  Fotografías usadas en el sitio
```

## Cómo correrlo

Necesitas [Node.js](https://nodejs.org) 18 o superior instalado.

```bash
npm install
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321).

## Build de producción

```bash
npm run build
npm run preview
```

## Personalización rápida

- **Colores / tipografías**: `tailwind.config.mjs` (paleta `ink`, `stone`, `brass`; fuentes `display`, `sans`, `mono`).
- **Textos**: directamente en cada componente dentro de `src/components/`.
- **Imágenes**: reemplaza los archivos en `public/images/` manteniendo el mismo nombre, o actualiza las rutas `src` en los componentes.
- **Formulario de contacto**: actualmente simula el envío en el navegador (`Contact.astro`). Para conectarlo a un backend real (Formspree, Resend, un endpoint propio, etc.), reemplaza el `action` del `<form>` y/o el manejador `submit` del script al final del archivo.

## Notas

- El sitio es completamente responsive (móvil, tablet, escritorio).
- Incluye animaciones de aparición al hacer scroll (`data-reveal`), que respetan `prefers-reduced-motion`.
- El menú de navegación colapsa a un menú móvil por debajo de `lg`.
# JulilanVoss-Landing
