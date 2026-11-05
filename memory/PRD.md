# SecurePath Cyber Ltd. — Marketing Website

## Original Problem Statement
Build a FRONT-END ONLY marketing website (no backend, no CMS, no real form submission — forms show a success state only) for SecurePath Cyber Ltd., an independent cybersecurity governance & risk consultancy. React + Tailwind CSS + Framer Motion + Lucide icons. Fully responsive (360px → 1440px+), WCAG AA, `prefers-reduced-motion` respected. Design direction: "Minimal, modern, calm confidence" — editorial, generous white space, thin hairline dividers, premium advisory feel. Signature motif: "THE PATH" — a continuous thin teal SVG line that draws itself on scroll, ending in an arrowhead at the final CTA. Exact brand tokens (Deep Navy #0B2545, Teal #0D9488, Cyber Blue #1565C0 + tints), Outfit headings + Inter body. All text from the existing Wix site (securepathcyber.ie) must be preserved. Brand template PPTX and logos (dark/light shield + teal arrow, PECB partner logo) provided as assets.

## User Choices
- Contact email: info@securepathcyber.ie (user-provided, plus LinkedIn profile link)
- Design/motion: pushed to Awwwards-level craft (user reminder): Lenis smooth scroll, masked word-by-word hero reveal, stroke-drawn shield + spring teal arrow, dotted-grid parallax, sticky-scroll process timeline, magnetic CTA with teal glow pulse, slow editorial marquee on mobile trust strip.
- Platform note: built on the CRA + Tailwind template (this environment) rather than Vite/TypeScript; all content centralised in `src/content.js` for easy copy edits.

## Architecture
- Frontend only. No backend calls. React Router routes: `/`, `/services`, `/about`, `/privacy`.
- `src/content.js` — single source of all copy.
- `src/components/`: Navbar, Hero, TrustStrip, Approach, Services, Process, Audience, WhyUs, FinalCTA, BookingModal, Footer, Logo, PathLine, shared (Reveal wrapper, Eyebrow, useLenis, useMouseParallax, scrollToTarget, EASE).
- `src/pages/`: HomePage, ServicesPage, AboutPage, PrivacyPage.
- Tailwind config extended with exact brand tokens. Lenis for smooth scroll. SVG logos in `public/` (logo.svg dark, logo-light.svg), PECB logo at `public/assets/pecb-logo.png`.
- Every interactive element carries a data-testid.

## Implemented (2026-07 / Nov 5 2026 session)
- Sticky navbar: transparent over hero → white + hairline + blur on scroll; animated hamburger → full-screen navy menu with staggered links.
- Hero: eyebrow, word-by-word mask reveal (60ms stagger), teal "path" with drawing underline, stroke-drawn shield with spring teal arrow, drifting dotted grid parallax, scroll cue.
- Trust strip: "16+ years experience · ISO 27001 specialists · Independent & objective" + PECB logo (greyscale → colour on hover); slow marquee on mobile.
- Our Approach: 4 numbered pillars (Alignment, Sustainable, Practical, Resilience), teal connector line draws left→right with staggered reveals.
- Core Services: bento grid (large ISO 27001 card + 4 small), hover lift + teal top border growth + icon rotate + sliding arrows.
- How We Work: 5-step sticky-scroll horizontal timeline (Discovery → Monitor), teal progress line + active-step highlight; vertical timeline on mobile.
- Who We Work With: animated accordion rows (5 audiences) + Work with Us CTA.
- Why SecurePath: dark navy section, 2×2 grid, teal icons, noise/grid texture, blur-to-sharp reveals.
- Final CTA: path arrowhead draws in, magnetic button, teal glow pulse.
- Booking modal: name/email/company/size select/service chips/message, client-side validation, animated draw-in success check. No network calls (demo state noted in modal).
- Footer: navy, light logo, tagline, nav + services links, info@securepathcyber.ie, LinkedIn, © 2026, Privacy link.
- Services page: detailed cards (detail paragraph + 4 bullets each). About page: story, values, stats, trust chips. Privacy page: 8-section plain-English policy.
- prefers-reduced-motion fallbacks throughout.

## Verified
- Hero render (1366/375), services bento, approach line, sticky process timeline advance, audience accordion, why-us dark grid, final CTA, footer.
- Booking modal: validation (5 errors on empty submit), successful fill → success state → close.
- Route navigation: /services, /about, /privacy all render; mobile menu opens/closes cleanly.

## Backlog
- P0: none (all requested features built).
- P1: real form delivery (Resend/managed email) so enquiries reach info@securepathcyber.ie; LinkedIn URL confirmation (placeholder company slug used).
- P2: OG share image, per-route meta titles, FAQ section, case-study/testimonial slots, sitemap/robots for SEO.

## Next Tasks
1. Wire booking form to managed email (Resend) — sends enquiries to info@securepathcyber.ie.
2. Confirm real LinkedIn company URL.
3. Add testimonials/case studies if desired.
4. SEO pack (sitemap, JSON-LD, per-page meta).
