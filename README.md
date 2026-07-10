# Portfolio

A bilingual (English/Vietnamese) personal portfolio built with **Next.js 16**, **TypeScript**, and **Tailwind CSS 4** — warm, Claude-inspired color palette with light/dark mode.

Features:

- **Bilingual** — every page exists at `/en/...` and `/vi/...`, with a language switcher in the header. `/` redirects based on the visitor's cookie or browser language (`proxy.ts`).
- **Project case studies** — each project card links to `/[lang]/projects/[slug]` with context → problem → solution → results and an SVG architecture diagram (`components/diagrams.tsx`).
- **Blog** — Markdown posts in `content/blog/en/` and `content/blog/vi/` (same filename = same post in both languages). Frontmatter: `title`, `date`, `excerpt`, `tags`.
- **Career timeline** — work + education rendered as a vertical timeline.

## Customize your content

Almost all content lives in **two places**:

- [`data/site.ts`](data/site.ts) — name, role, tagline, socials, skills, projects (with case studies), timeline, certifications, awards. Every text field is bilingual: `{ en: "...", vi: "..." }`.
- [`content/blog/`](content/blog/) — blog posts as Markdown files.

UI labels (buttons, section titles) are in [`lib/i18n.ts`](lib/i18n.ts).

To update the resume, replace `public/resume.pdf` (or clear `resumeUrl` in `data/site.ts` to hide the button).

## Development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production

```bash
npm run build
npm run start
```

## Deploy

The easiest option is [Vercel](https://vercel.com/new): import this repository and it deploys automatically on every push. Netlify and any Node host work too.
