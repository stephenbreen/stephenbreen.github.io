# CLAUDE.md

## Project Overview

Personal portfolio/landing page for Stephen Breen, hosted via **GitHub Pages** at `stephenbreen.github.io`. A self-contained single-page static site with no build system.

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
- **No static site generator** — Pure HTML/CSS/JS

### External CDN Dependencies

- **Google Fonts**: Inter (300/400/600/800), JetBrains Mono (400/700)
- **FontAwesome 5.12.0**: Icons for social links, project cards, and UI elements

## Design System

- **Color palette**: Electric blue (`#0066FF`) + coral (`#FF6B6B`) on dark background (`#0A0E1A`)
- **Fonts**: Inter for body text, JetBrains Mono for labels and code-style elements
- **CSS custom properties**: All colors/fonts defined as `--variables` in `:root`
- **CSS class naming**: kebab-case (e.g., `hero-greeting`, `project-card`, `skill-tag`)
- **Component pattern**: `section-label` (mono, coral, uppercase) + `section-title` (bold) + `section-subtitle` (gray)

## Page Sections

1. **Nav** — Fixed top bar with logo + anchor links
2. **Hero** — Name, title, description, CTA buttons, social links (animated entrance)
3. **About** — Bio text + stat cards grid
4. **Skills** — Three category cards (Frontend, Backend, Tools) with tech tags
5. **Projects** — Three project cards with gradient banners, descriptions, tech tags, links
6. **Blog** — Three blog post cards linking to Medium/Dev.to
7. **Contact** — Social link chips in pill-style buttons
8. **Footer** — Simple attribution line

## Development & Deployment

- **Deployment**: GitHub Pages, served directly from the `master` branch (no build step)
- **To preview locally**: Open `index.html` in a browser — fully self-contained, no server needed
- **No CI/CD**: No GitHub Actions or automated checks

## Key Guidelines for AI Assistants

1. All styles are inlined in the `<style>` block — do not create separate CSS files unless asked
2. Use CSS custom properties (`var(--blue)`, etc.) for colors — do not hardcode hex values
3. Follow the existing component pattern for new sections (label + title + subtitle + content grid)
4. New cards/elements should include `class="fade-in"` for scroll animation
5. Keep hover effects consistent: `translateY(-4px)` for cards, `translateY(-2px)` for buttons
6. Maintain responsive breakpoints at 768px and 480px
7. The project and blog cards use placeholder content — update with real data when available
8. Do not add heavy JS frameworks; the site intentionally uses minimal vanilla JS
