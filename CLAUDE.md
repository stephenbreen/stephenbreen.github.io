# CLAUDE.md

## Project Overview

This is a **personal portfolio/landing page** for Stephen Breen, hosted via **GitHub Pages** at `stephenbreen.github.io`. It is a minimal static HTML/CSS site with no build system or static site generator.

## Repository Structure

```
/
├── index.html          # The entire website (single-page portfolio)
└── CLAUDE.md           # This file
```

### Missing Assets

The HTML references CSS files that are **not present** in the repository:

- `css/reset.css` — CSS reset/normalize
- `css/styles.css` — Main stylesheet
- `css/themes/white-red.css` — Active color theme

Additional theme files are commented out in the HTML (e.g., `indigo-white.css`, `green-white.css`, `yellow-black.css`).

## Tech Stack

- **HTML5** — Single `index.html`, no templating
- **CSS** — External stylesheets (currently missing from repo)
- **No JavaScript**
- **No build tools** — No package.json, Gemfile, bundler, or task runner
- **No static site generator** — Not Jekyll, Hugo, or similar

### External CDN Dependencies

- **Google Fonts**: Reem Kufi, Roboto (weight 300)
- **FontAwesome 5.12.0**: Social media icons (GitHub, Twitter, Dev.to, Stack Overflow, LinkedIn, Medium)

## Development & Deployment

- **Deployment**: GitHub Pages, served directly from the repository (no build step)
- **Branching**: `master` is the default/deploy branch
- **No CI/CD**: No GitHub Actions workflows or automated checks
- **To preview locally**: Open `index.html` in a browser (note: CSS won't load without the missing files)

## Conventions

- **CSS class names**: kebab-case (e.g., `icons-social`)
- **Theme files**: Named as `{background}-{accent}.css` (e.g., `white-red.css`)
- **No JavaScript** is used; keep the site purely HTML/CSS unless explicitly requested

## Known Issues

- **Typo**: The intro text reads "Hello, I'm Stpehen!" — "Stephen" is misspelled
- **Missing CSS files**: The referenced `css/` directory and stylesheets do not exist in the repo, so the site renders unstyled
- **Favicon**: Uses a FontAwesome class on a `<link rel="icon">` tag, which doesn't produce a working favicon

## Key Guidelines for AI Assistants

1. This is a very small, simple project — avoid over-engineering changes
2. Do not introduce build tools, frameworks, or dependencies without explicit request
3. Keep the site static HTML/CSS; do not add JavaScript unless asked
4. Any new CSS should follow the existing kebab-case naming convention
5. Test changes by verifying valid HTML structure (no local server required)
6. The `master` branch deploys directly to GitHub Pages — be careful with pushes
