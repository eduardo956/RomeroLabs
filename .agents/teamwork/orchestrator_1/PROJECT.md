# Project: Romero Labs Redesign (gato.pe Layout & Cyber Brand Architecture)

## Architecture
- **Framework & Runtime**: React 19.3.0 SPA, Vite 8.3.1 build tool.
- **Styling**: Tailwind CSS 3.4.19 with custom Obsidian & Electric Cyan tokens.
- **Motion & Interactions**: GSAP 3.15.0 with ScrollTrigger, CSS keyframes for neon glows and marquees.
- **Iconography**: Lucide React 1.48.0 + custom SVG WhatsApp and Partner badges.
- **State Architecture**: React Contexts (`CartContext`, `ModalContext`, `ToastContext`), centralized WhatsApp routing (`src/config/whatsappConfig.js`).
- **Data Flow**:
  - `src/data/products.js`: Service catalog (8 core agency offerings).
  - `src/data/packages.js`: Pre-configured web/software tiers.
  - `src/data/companyInfo.js`: Romero Labs metadata, RUC, addresses, social channels.
  - `src/config/whatsappConfig.js`: Phone number `51922187720` and message formatters.
  - `src/components/`: Modular presentation components mapped 1:1 with `gato.pe` layout.

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Navbar & Brand Header | Official `logo-white.png`, responsive navigation anchors (`#servicios`, `#resultados`, `#planes`, `#contacto`), mobile menu drawer, and "Cotizar Proyecto" CTA button | M1 | ORIGINAL_REQUEST § R1.1 & Survey |
| 2 | Hero Section with Typewriter Motion | Animated rotating headline ("Haz crecer tu negocio con nosotros" / "Impulsa tu marca al éxito" / "Innovamos para hacer crecer tu negocio" / "Impulsamos tu transformación digital"), value proposition, dual CTAs ("Solicitar consulta" & "Explorar más"), tech partner badges (Google, Microsoft, Meta), and interactive 3D monitor showcase | M1 | ORIGINAL_REQUEST § R1.2 & gato.pe |
| 3 | Resultados que te Impulsan | 6 strategic feature pillars: Optimización de procesos, Aplicaciones intuitivas, Identidad de marca, Estrategias Personalizadas, Diseño web atractivo, Gestión de redes sociales | M2 | ORIGINAL_REQUEST § R1.3 & gato.pe |
| 4 | Conoce nuestros servicios Grid | 8 core agency services grid (Desarrollo de Software, Diseño Web, Apps Móviles, UX/UI, SEO & Paid Media, Marketing Digital, Branding, etc.) with filter tabs, price tags, "Ver detalles" modal trigger, and "Solicitar" cart/WhatsApp action | M2 | ORIGINAL_REQUEST § R1.4 & gato.pe |
| 5 | Social Proof & Marquee | Infinite marquee showcasing tech stack, enterprise integrations, and client credibility | M2 | ORIGINAL_REQUEST § R1.5 & gato.pe |
| 6 | Impact Metrics & Interactive Quote Form | Verified metrics (+100 Clientes, +150 Proyectos) and B2B interactive quote form with multi-service checkboxes, name/company/email/phone inputs, and direct WhatsApp trigger formatting all selected data | M3 | ORIGINAL_REQUEST § R1.6 & gato.pe |
| 7 | Newsletter & Comprehensive Footer | Newsletter CTA banner ("Transformamos ideas en resultados digitales"), Romero Labs white logo, navigation columns, direct contacts, RUC, legal links (Libro de Reclamaciones, Privacidad), and partner badges | M3 | ORIGINAL_REQUEST § R1.7 & gato.pe |
| 8 | Dark Cyber Brand Polish & Consistency | Strict adherence to `#070a0b`, electric cyan `#00f0d4`, electric aqua `#36e2ec`, glass cards `#0e1619`, borders `#223334`, and typography (`Space Grotesk`, `Geist`, `JetBrains Mono`) | M3 | ORIGINAL_REQUEST § R2 |
| 9 | Production Build & Zero Regression | Clean execution of `npm run build` with 0 errors, no broken component imports, responsive layout on mobile and desktop | M4 | ORIGINAL_REQUEST § R3 & Criteria |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Hero, Header & Identity | `Navbar.jsx`, `Hero.jsx`, `Ticker.jsx` | none | PLANNED |
| M2 | Feature Pillars & Service Grid | `ResultsPillars.jsx`, `Catalog.jsx`, `DetailModal.jsx` | M1 | PLANNED |
| M3 | Metrics, Quote Form, Newsletter & Footer | `ContactB2B.jsx`, `Footer.jsx`, `App.jsx` | M2 | PLANNED |
| M4 | Comprehensive Review, Challenge & Forensic Audit | Verification loop across all components, build verification, integrity audit | M1, M2, M3 | PLANNED |

## Interface Contracts
### `Navbar.jsx` ↔ `App.jsx` & Page Anchors
- Props: `onOpenCart: () => void`, `cartCount: number`
- Navigation targets: `#inicio`, `#servicios`, `#resultados`, `#planes`, `#contacto`

### `Hero.jsx` ↔ `App.jsx`
- Animated headline cycle: String array `["Haz crecer tu negocio con nosotros", "Impulsa tu marca al éxito", "Innovamos para hacer crecer tu negocio", "Impulsamos tu transformación digital"]`
- Partner badges: Google Partner, Microsoft Partner, Meta Business Partner SVGs

### `ResultsPillars.jsx` ↔ Section `#resultados`
- 6 pillar objects: `{ id, title, description, icon, tag }`

### `Catalog.jsx` ↔ `DetailModal.jsx` & `CartContext`
- Function: `onSelectProduct: (product) => void`, `onAddToCart: (product) => void`
- Modal renders technical specs, deliverables, estimated delivery timeline, and direct quote CTA

### `ContactB2B.jsx` ↔ `whatsappConfig.js`
- Service options: Array of `{ id, label }` (Software, Web, Mobile, Branding, Paid Media & SEO)
- Form state: `{ name, company, email, phone, services: string[], message }`
- WhatsApp URL generator creates structured message with all selected fields and opens `https://wa.me/51922187720?text=...`

### `Footer.jsx` ↔ Company Metadata
- Renders `companyInfo` (RUC, Lima address, email, phone, policies, tech partners) and newsletter subscribe form

## Code Layout
```
src/
├── App.jsx                     # Section layout, global floating widgets, providers
├── main.jsx                    # Root mount
├── index.css                   # Custom neon glows, radial gradients, animations
├── components/
│   ├── Navbar.jsx              # Official logo-white.png, nav links, quick quote CTA
│   ├── Hero.jsx                # Typewriter headline, partner badges, 3D monitor showcase
│   ├── ResultsPillars.jsx      # 6 feature pillars from gato.pe
│   ├── Catalog.jsx             # 8 agency service offerings with filter tabs
│   ├── DetailModal.jsx         # Service detail modal
│   ├── PackagesSection.jsx     # Strategic pricing & tier packages
│   ├── Ticker.jsx              # Infinite social proof marquee
│   ├── Story.jsx               # 0% risk & satisfaction guarantee banner
│   ├── ContactB2B.jsx          # Metrics (+100, +150) & multi-service quote form
│   ├── Footer.jsx              # Newsletter banner, logo, links, partners
│   ├── CartDrawer.jsx          # Sliding quotation drawer
│   ├── ParallaxBackground.jsx  # Cyberpunk grid & floating orbs
│   └── ToastContainer.jsx      # Toast notification system
├── config/
│   └── whatsappConfig.js       # Centralized WhatsApp destination (51922187720)
├── context/
│   ├── CartContext.jsx         # Multi-service quote cart
│   ├── ModalContext.jsx        # Preview modal state
│   └── ToastContext.jsx        # Notification feedback
└── data/
    ├── companyInfo.js          # Brand metadata
    ├── packages.js             # Pricing packages
    └── products.js             # Agency service catalog
```
