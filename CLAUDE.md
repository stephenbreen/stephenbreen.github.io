# CLAUDE.md

## Project Overview

Personal portfolio site for Stephen Breen — Lead Architect (Azure · Telematics · Applied AI) — hosted via **GitHub Pages** at `stephenbreen.github.io`. A self-contained single-page static site with no build system. The content is a portfolio-style rendering of his CV: experience is presented as **case studies described by domain, never by employer name** (e.g. "EV Fleet Telemetry Platform", "Financial Services Platform Modernisation").

## Repository Structure

```
/
├── index.html          # The entire website (single-page, self-contained)
└── CLAUDE.md           # This file
```

## Tech Stack

- **HTML5** — Single `index.html` with all styles inlined in a `<style>` block
- **CSS** — Custom properties, CSS Grid, Flexbox, animations, responsive design
- **JavaScript** — Minimal: only an IntersectionObserver for scroll-triggered fade-in animations
- **No build tools** — No package.json, bundler, or task runner
- **Icons** — Inline SVG only (no icon font dependency)

### External CDN Dependencies

- **Google Fonts**: Fraunces (display serif), Archivo (body), IBM Plex Mono (labels/data)

## Design System — "Telemetry / control room"

Dark graphite with an amber signal accent; editorial serif headlines over mono data labels. Cork coordinates (51.8985° N / 8.4756° W) appear as a motif in the hero.

- **Colors** (CSS custom properties in `:root`):
  - `--ink` `#0E120F` background, `--ink-raised` hover surfaces
  - `--paper` `#E8E6DC` text, `--paper-dim` muted text
  - `--amber` `#FFB454` accent, `--signal` `#5BD98A` "live" green (status dot, current role)
  - `--line` / `--line-soft` hairline borders
- **Fonts**: `--font-display` Fraunces (headings, big numerals), `--font-body` Archivo, `--font-mono` IBM Plex Mono (uppercase tracked labels via `.mono`)
- **Background**: fixed faint blueprint grid (`body::before`) + amber corner glow (`body::after`)
- **Component patterns**:
  - `section-head` — mono amber index number (`01`–`04`) + Fraunces h2, bottom hairline
  - `.case` — case-study row: circled number / main copy + `.tag` chips / `dl.case-meta` (Role, Domain, Period)
  - `.readout` — hero telemetry strip of stat cells
  - `.timeline` — career trajectory stops (2011 → 2024)
  - `.cap-grid` — capabilities cells separated by 1px gap lines
- **Motion**: `rise` keyframe staggered on hero load; `.fade-in` + IntersectionObserver on scroll; `prefers-reduced-motion` honored
- **Hover**: cards/buttons lift `translateY(-2px)`; tags and links shift to amber

## Page Sections

1. **Nav** — Fixed top bar, mono links (Work / Capabilities / About / Contact)
2. **Hero** — Coordinates + status dot, Fraunces headline, role line, description, CTAs, telemetry readout strip
3. **Work** (`#work`) — Five numbered case studies (no employer names) + career trajectory timeline
4. **Capabilities** (`#capabilities`) — Six cells: Cloud & Platform, Languages & Frameworks, Data, AI & Tooling, Leadership, Domains
5. **About** (`#about`) — First-person bio + "Record" aside (location, role, education, status)
6. **Contact** (`#contact`) — Headline question + email / GitHub / LinkedIn buttons (inline SVG icons)
7. **Footer** — Copyright + tagline

## Content Rules

- **Never name employers** — experience is framed as projects/domains only (EV fleet, financial services, gov & enterprise consultancy, recruitment SaaS)
- Source of truth for content is Stephen's CV; update case studies rather than reintroducing a chronological employer list
- Contact email: stephenjbreen@outlook.com · GitHub: stephenbreen
- Do not publish phone number or street address

## Development & Deployment

- **Deployment**: GitHub Pages, served directly from the default branch (no build step)
- **To preview locally**: Open `index.html` in a browser — fully self-contained
- **No CI/CD**: No GitHub Actions or automated checks

## Key Guidelines for AI Assistants

1. All styles are inlined in the `<style>` block — do not create separate CSS files unless asked
2. Use CSS custom properties (`var(--amber)`, etc.) — do not hardcode hex values
3. Follow existing component patterns (`section-head`, `.case`, `.cap-cell`) for new content
4. New scroll-revealed elements should include `class="fade-in"`
5. Maintain responsive breakpoints at 900px and 600px
6. Do not add heavy JS frameworks; the site intentionally uses minimal vanilla JS
7. Keep icons as inline SVG — do not reintroduce icon-font CDNs
