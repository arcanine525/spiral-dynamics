# Spiral Dynamics

A small full-stack React + Express starter customized for the Spiral Dynamics survey & reporting product.

This repository contains a Vite-powered React client and a small Express server used in development and production builds.

## Tech stack

- PNPM
- Frontend: React 18, TypeScript, Vite, TailwindCSS
- Backend: Express (integrated with Vite dev server)
- Testing: Vitest
- UI: Lucide icons, Radix primitives

## Quick start (macOS / zsh)

1. Install dependencies

```bash
pnpm install
```

2. Run dev server (client + server)

```bash
pnpm dev
```

3. Build for production

```bash
pnpm build
pnpm start
```

4. Typecheck / tests

```bash
pnpm typecheck
pnpm test
```

## Project layout

- `client/` — React SPA source (pages, components, styles)
- `server/` — Express server and routes
- `shared/` — shared TypeScript types between client & server
- `AGENTS.md` — local project notes and conventions

## Changes made during this session

- Project rename: set package name to `spiral-dynamics` in `package.json` and updated top-level docs (`AGENTS.md`).
- Updated server startup message in `server/node-build.ts` to log `Spiral Dynamics`.
- UI interaction improvements: enhanced hover/interaction styles across `client/pages/Index.tsx` (How It Works, Problem cards, Solution cards, Demo preview cards, B2B package cards, Trust & Credibility cards). These are Tailwind utility changes (presentational only).

## Notes & suggestions

- Accessibility: consider adding keyboard focus styles (e.g. `focus:outline-none focus:ring`) and honoring `prefers-reduced-motion` for users who disable animations.
- If you want these visual patterns applied across other UI components in `client/components/ui/`, I can update them as well.

## How to verify locally

1. Start the dev server:

```bash
pnpm dev
```

2. Open the app at `http://localhost:8080` (or the port printed by the server). Hover the cards in the homepage to see the new interactions.

## Contributing

If you want me to commit these changes or open a PR, tell me your preferred branch/commit message and I can create the commit and push.

---

If you want additional docs (API reference, ADRs, design tokens), say the word and I’ll add them.
