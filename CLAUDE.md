# CLAUDE.md

## Project Overview

Personal site and blog for Stephen Breen, live at **https://stephenbreen.github.io**.
Hosted on GitHub Pages, built by Jekyll **on GitHub's side** — no local build step,
no theme, no plugins. Pushing to `master` deploys in about a minute.

The design philosophy is a deliberate counterweight to AI-generated portfolios:
**plain page, one accent, a pinch of terminal.** Typography-led, under-designed,
warm paper background. No dark mode, no cards, no stat strips, no status dots,
no fade-in animations, no numbered sections. Do not re-introduce the old
"telemetry control room" aesthetic — that was the AI look we replaced.

## Repository Structure

```
/
├── index.html          # Homepage (standalone HTML, no layout — uses Liquid for the post list)
├── blog.html           # Writing index → served at /writing/
├── assets/style.css    # The one stylesheet, shared by all pages
├── _config.yml         # Jekyll config (title, permalink style, kramdown)
├── _layouts/
│   ├── default.html    # Page skeleton: head, nav, footer
│   └── post.html       # Post wrapper (uses default)
├── _posts/             # Blog posts, one markdown file per post
└── CLAUDE.md           # This file
```

## Design System — "plain page, terminal pinch"

- **Colors** (CSS custom properties in `assets/style.css`):
  `--paper #F5F1E6` background · `--ink #26221A` text · `--ink-soft #4A4437`
  body text · `--muted #7A7260` · `--line #E1DAC5` hairlines ·
  `--accent #3D6B4F` moss green, used sparingly (`~` marks, links, focus)
- **Fonts**: Newsreader (serif, body + headings), JetBrains Mono (labels and
  terminal touches) via Google Fonts
- **Layout**: single column, 720px wrap, body 1.1rem / line-height 1.75
- **The pinch** (keep it to these, don't add more):
  - Section headers styled as terminal paths: `~/made`, `~/writing` (mono, `~` green)
  - Project names in monospace, like filenames
  - `$ exit 0` in the footer, `$_` favicon
- **Component patterns**: `h2.path` sections · `ul.projects > li` project rows
  (`.proj-head` name + meta, `.proj-desc`) · `ul.posts` writing lists ·
  `dl.contact` two-column contact block · `.content` post prose

## Content Rules

- Homepage features **public repos only**, in two groups: `at the table`
  (tabletop tools) and `in the terminal` (CLI/desktop tools). Private or
  WIP projects stay off until they are shipped and public.
- The day-job section stays **one paragraph** — no employer names, link out
  to LinkedIn for the CV version.
- Turnkeeper has a live demo: https://stephenbreen.github.io/turnkeeper/
- Contact: stephenjbreen@outlook.com · github.com/stephenbreen ·
  linkedin.com/in/stephenbreen · corkdnd.com
- Never publish phone number or street address.

## Blogging

To publish a post, add a markdown file to `_posts/` named
`YYYY-MM-DD-slug.md` with front matter:

```yaml
---
layout: post
title: "The title"
date: YYYY-MM-DD
excerpt: "One-line summary (optional)"
---
```

URLs follow `_config.yml`: `/writing/<slug>/`. The homepage shows the latest
3 posts; `blog.html` lists them all. Commit and push to `master` — that's
the entire publish workflow.

## Liquid Warnings

`index.html`, `blog.html`, and both layouts contain Liquid (`{% %}`, `{{ }}`)
processed by Jekyll at deploy time. Do not use double curly braces in page
content or CSS. If a code snippet in a post needs literal `{{ }}`, wrap it
in `{% raw %} … {% endraw %}`.

## Local Preview (optional)

The site deploys via GitHub's Jekyll, so a local build isn't required. To
preview exactly:

```bash
gem install jekyll
jekyll serve    # → http://localhost:4000
```

Opening `index.html` directly in a browser works for styling but will not
render the Liquid post list or the /writing/ pages.

## Key Guidelines for AI Assistants

1. One stylesheet: `assets/style.css`. Keep pages thin.
2. No frameworks, no build tools, no JavaScript beyond what's necessary.
3. When in doubt, remove. The plain page is the point.
4. New sections follow the existing patterns (`h2.path`, `ul.projects`,
   `dl.contact`); new terminal motifs need a good reason.
5. Icons: inline SVG or none. No icon fonts, no extra CDNs.
6. Test Liquid changes by pushing to a branch and checking the Pages build,
   or `jekyll serve` locally.