# Execution Plan — Romero Labs Redesign

## Phase 0: Survey & Discovery
1. Spawn 3 parallel Explorers:
   - Explorer 1 (`explorer_codebase`): Survey current codebase stack (package.json, framework, existing components in src/, CSS/styling approach, assets in public/).
   - Explorer 2 (`spec_miner_gato` or `explorer_gato`): Analyze gato.pe structure, exact copy / sections, interactive elements, WhatsApp direct trigger, quote form fields, cards and metrics.
   - Explorer 3 (`explorer_design`): Survey brand assets, color palette, typography, icons, and layout integration for ROMERO Labs dark cyber aesthetic.
2. Synthesize survey results into `PROJECT.md` (Architecture, Feature Inventory, Code Layout, Component Specifications).

## Phase 1: Implementation
1. Dispatch Implementation Worker (`teamwork_preview_worker`) armed with frontend/UI expertise and `PROJECT.md`:
   - Implement gato.pe-style sections adapted to Romero Labs dark cyber aesthetic:
     * Navbar with official logo, menu links, CTA
     * Hero Section with animated text cycle, copy, CTAs
     * "Resultados que te impulsan" feature badges / pills
     * "Conoce nuestros servicios" interactive service cards grid
     * Clients & partners marquee / social proof
     * Impact metrics & interactive quote form with service selector checkboxes and WhatsApp direct trigger
     * Newsletter banner & footer with social/legal links
   - Preserve `logo-white.png` and cyber dark theme (`#070a0b`, cyan `#00f0d4`, electric aqua `#36e2ec`).
   - Run `npm run build` and ensure 0 errors.

## Phase 2: Review, Challenge & Audit
1. Spawn Reviewers (`teamwork_preview_reviewer` x2) to evaluate:
   - Visual presentation, responsive layout, component imports, interactive behavior, build validation.
2. Spawn Challengers (`teamwork_preview_challenger` x2) to verify:
   - Interactive functionality (quote form validation, WhatsApp link generation, modal/filter states, responsive breakpoints).
3. Spawn Forensic Auditor (`teamwork_preview_auditor`) to verify:
   - Authentic implementation, no dummy code or placeholders, strict compliance with rules.

## Phase 3: Gate & Completion
1. Evaluate verdicts in `GATE_STATUS.md`.
2. Confirm `npm run build` success and all pass criteria met.
3. Deliver comprehensive final report to Sentinel.
