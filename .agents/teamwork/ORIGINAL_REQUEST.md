# Original User Request

## 2026-10-08T02:48:15Z

Redesign the Romero Labs website (`romeroLabs`) following the layout, information architecture, service sections, interactive forms, and visual presentation of `https://gato.pe/`, while keeping the official ROMERO Labs branding, dark cyber aesthetic, and logo (`logo-white.png`).

Working directory: `c:\Users\eduar\Local Sites\romeroLabs`
Integrity mode: development

## Requirements

### R1. UI Layout & Architecture Redesign (gato.pe Style)
- Redesign the landing page sections based on `https://gato.pe/`:
  1. Navbar with official ROMERO Labs logo, links, and quick Contact button.
  2. Hero Section with animated headline ("Haz crecer tu negocio / Haz crecer..."), value proposition, and primary CTAs.
  3. "Resultados que te Impulsan" section with key feature badges (Optimización, Apps, Marca, Diseño Web, Redes, SEO).
  4. "Conoce nuestros servicios" grid section showcasing core agency offerings (Desarrollo de Software, Diseño Web, Apps Móviles, UX/UI, SEO, Marketing Digital, Branding, etc.).
  5. Social proof / clients & partners marquee.
  6. Impact metrics (+100 Clientes, +150 Proyectos) & interactive quote/contact form with service selector checkboxes and WhatsApp direct trigger.
  7. Newsletter banner, footer links, contact info, and legal links.

### R2. Brand Preservation & Visual Polish
- Retain the official ROMERO Labs logo (`public/images/logo-white.png`) and modern dark cyber color scheme (`#070a0b`, cyan `#00f0d4`, electric aqua `#36e2ec`).
- Ensure all components are fully responsive, accessible, interactive, and visually stunning.

### R3. Multi-Worker Review & Verification Loop
- The implementation worker updates the code and components in `src/`.
- The reviewer worker checks the page rendering, interactions, build verification, and layout consistency.

## Acceptance Criteria

### UI & Presentation
- [ ] Website includes all 7 core sections matching the presentation of `gato.pe`.
- [ ] Navbar, Hero, Services Grid, Impact Metrics, Quote Form, and Footer feature the official ROMERO Labs logo and brand aesthetic.
- [ ] Interactive filter tabs, quote form checkboxes, and modal/drawer functionality work seamlessly.

### Verification
- [ ] Build completes cleanly with `npm run build` with zero errors.
- [ ] No regression in mobile responsiveness or broken component imports.
