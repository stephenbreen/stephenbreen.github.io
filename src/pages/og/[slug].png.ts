import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { Resvg } from '@resvg/resvg-js';
import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import satori from 'satori';
import { SITE_DESCRIPTION, SITE_TITLE, formatDate } from '../../lib/site';

// 1200x630 social cards, rendered at build time. Satori can't read woff2,
// so this uses the static .woff files from @fontsource.

interface Card {
  title: string;
  description: string;
  footer: string;
}

export const getStaticPaths = (async () => {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return [
    {
      params: { slug: 'site' },
      props: { title: SITE_TITLE, description: SITE_DESCRIPTION, footer: 'made · writing · day job' },
    },
    ...posts.map((post) => ({
      params: { slug: post.id },
      props: {
        title: post.data.title,
        description: post.data.excerpt,
        footer: formatDate(post.data.date, 'long'),
      },
    })),
  ];
}) satisfies GetStaticPaths;

const font = (pkg: string, file: string) =>
  readFile(join(process.cwd(), 'node_modules/@fontsource', pkg, 'files', file));

const colors = { paper: '#F5F1E6', ink: '#26221A', soft: '#4A4437', muted: '#6B6352', line: '#E1DAC5', accent: '#3D6B4F' };

type Node = { type: string; props: { style?: Record<string, unknown>; children?: unknown } };
const el = (type: string, style: Record<string, unknown>, children?: unknown): Node => ({
  type,
  props: { style: { display: 'flex', ...style }, children },
});

export const GET: APIRoute = async ({ props }) => {
  const { title, description, footer } = props as Card;
  const [serif, serifMedium, mono] = await Promise.all([
    font('newsreader', 'newsreader-latin-400-normal.woff'),
    font('newsreader', 'newsreader-latin-500-normal.woff'),
    font('jetbrains-mono', 'jetbrains-mono-latin-400-normal.woff'),
  ]);

  const monoText = { fontFamily: 'JetBrains Mono', fontSize: 24, color: colors.muted };
  const card = el(
    'div',
    { width: 1200, height: 630, background: colors.paper, alignItems: 'center', justifyContent: 'center' },
    el(
      'div',
      {
        // Satori sizes content-box: 1120x550 outer minus padding and border.
        width: 990,
        height: 444,
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: `1px solid ${colors.line}`,
        borderRadius: 10,
        padding: '52px 64px',
      },
      [
        el('div', monoText, [el('span', { color: colors.accent }, '~'), '/stephenbreen']),
        el('div', { flexDirection: 'column' }, [
          el('div', { fontFamily: 'Newsreader', fontWeight: 500, fontSize: 72, lineHeight: 1.08, color: colors.ink, letterSpacing: -1 }, title),
          el('div', { fontFamily: 'Newsreader', fontSize: 32, lineHeight: 1.35, color: colors.soft, marginTop: 24, maxWidth: 900 }, description),
        ]),
        el('div', { ...monoText, justifyContent: 'space-between', fontSize: 22 }, [
          el('span', {}, footer),
          el('span', {}, ['stephenbreen', el('span', { color: colors.accent }, '.dev')]),
        ]),
      ],
    ),
  );

  const svg = await satori(card as Parameters<typeof satori>[0], {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Newsreader', data: serif, weight: 400, style: 'normal' },
      { name: 'Newsreader', data: serifMedium, weight: 500, style: 'normal' },
      { name: 'JetBrains Mono', data: mono, weight: 400, style: 'normal' },
    ],
  });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
