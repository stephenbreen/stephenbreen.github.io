# stephenbreen.dev

Personal site and blog. Built with [Astro](https://astro.build), served as
static files from Cloudflare.

## Develop

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run check     # type-check .astro and .ts files
```

## Writing a post

Add a Markdown file to `src/content/posts/`. The filename becomes the URL
(`my-post.md` → `/writing/my-post/`):

```md
---
title: "Post title"
date: 2026-11-09
excerpt: "One or two sentences. Used for the page description, RSS and the social card."
draft: true        # optional; drafts are left out of every page and feed
---
```

Each post gets a social preview image at `/og/<slug>.png`, generated at build
time by `src/pages/og/[slug].png.ts`.

## Projects

The homepage project list lives in `src/data/projects.yaml`. Entries show in
file order within their group; leave out `url` for a project whose repo isn't
public yet.

## Deploy

`wrangler.jsonc` serves `dist/` as static assets on Cloudflare Workers, with
`404.html` for unknown paths.

```sh
npx wrangler login   # once
npm run deploy       # build + wrangler deploy
```

Or connect the repo in the Cloudflare dashboard (Workers & Pages → Create →
Import a repository) with build command `npm run build` and deploy command
`npx wrangler deploy`, so every push deploys and branches get preview URLs.
