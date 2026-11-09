# Ecomzadi

Digital marketing agency website for Ecomzadi (Marrakech, Morocco).

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · GSAP + ScrollTrigger · Lenis · Motion

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form

The contact form (`app/api/contact/route.ts`) sends email via [Resend](https://resend.com).
Copy `.env.example` to `.env.local` and set `RESEND_API_KEY` with a key from a verified
sending domain, or the form will show a message asking visitors to email
contact@ecomzadi.com directly.

## Project structure

- `app/` — routes, layout, global styles, contact API route
- `components/sections/` — page sections (Hero, Pillars, Services, Work, Contact)
- `components/motion/` — reusable animation primitives (Reveal, TextReveal, ImageReveal, Stagger, Parallax, MagneticButton)
- `components/layout/` — Nav and Footer
- `lib/motion/` — motion tokens, smooth-scroll setup, reduced-motion hook
- `lib/content.ts` — site copy and structured content (services, work sectors, contact info)
