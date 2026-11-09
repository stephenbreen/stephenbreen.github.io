import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { load } from 'js-yaml';

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  // Collections don't keep file order, so record each project's position.
  loader: file('./src/data/projects.yaml', {
    parser: (text) => (load(text) as Record<string, unknown>[]).map((p, order) => ({ ...p, order })),
  }),
  schema: z.object({
    name: z.string(),
    group: z.enum(['at the table', 'at the desk', 'in the terminal']),
    // Omit for projects whose repo isn't public yet.
    url: z.url().optional(),
    meta: z.string(),
    demo: z.url().optional(),
    description: z.string(),
    order: z.number(),
  }),
});

export const collections = { posts, projects };
