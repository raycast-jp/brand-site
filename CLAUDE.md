# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Raycast Community Japan brand site built with Astro 5.x, deployed to Cloudflare Pages. Static site generation with markdown-based content management.

- **Domain:** devx.jp
- **Language:** Japanese

## Development Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production (outputs to dist/)
npm run preview   # Preview production build locally
npm run deploy    # Build and deploy to Cloudflare Pages
```

## Architecture

### Tech Stack
- **Framework:** Astro (static site generation, ESM module)
- **TypeScript:** Strict mode (extends astro/tsconfigs/strict)
- **Styling:** Plain CSS with CSS variables (no framework)
- **Deployment:** Cloudflare Pages via wrangler

### Directory Structure
```
src/
├── pages/           # Astro page routes
│   ├── index.astro  # Home page
│   ├── about.astro  # About page
│   ├── events/      # Event pages (index + [...slug].astro dynamic route)
│   └── team/        # Team pages (index + [...slug].astro dynamic route)
├── layouts/
│   ├── BaseLayout.astro  # HTML structure, head/meta, analytics
│   └── MainLayout.astro  # Header + footer wrapper
├── components/      # Reusable Astro components (Header, Footer)
├── content/         # Astro Content Collections (markdown)
│   ├── events/      # Event markdown files
│   └── team/        # Team member markdown files
├── styles/
│   └── global.css   # Global styles, CSS custom properties
└── content.config.ts # Content Collections schema definitions
```

### Layout Hierarchy
```
BaseLayout → MainLayout → Page Components
```

### Content Collections
Events and team members are managed via Astro Content Collections with markdown files:
- **Events:** title, date, location, description, photos, tweets, blogPosts, connpassUrl
- **Team:** name, role, bio, avatar, social links, contributions timeline

### CSS Architecture
- CSS custom properties for colors, spacing, typography
- Scoped styles in Astro component `<style>` tags
- Mobile-first responsive design (breakpoint: 768px)
- System fonts with monospace fallback

## Key Files

- `astro.config.mjs` - Astro configuration (site URL, output mode)
- `wrangler.jsonc` - Cloudflare Pages deployment config
- `content.config.ts` - Content Collections schema
- `concept.md` - Community concept/mission documentation (Japanese)
- `site_spec.md` - Detailed site specification and requirements

## Specialized Agents

Pre-configured agents available in `.claude/agents/`:
- **frontend-web-engineer** - UI/component implementation
- **qa-build-lint-engineer** - Build verification, quality checks
- **security-engineer** - Security vulnerability review
