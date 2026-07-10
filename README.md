# Portfolio

A minimal, modern personal portfolio built with **Next.js 16**, **TypeScript**, and **Tailwind CSS 4** — warm, Claude-inspired color palette with light/dark mode.

## Customize your content

All content lives in **one file**: [`data/site.ts`](data/site.ts).

Edit it to change your:

- Name, role, tagline, location, email
- Social links (GitHub, LinkedIn, X)
- About paragraphs
- Skill groups
- Projects (title, description, tech, demo/repo links)
- Work experience

No component changes needed. To add a resume, drop `resume.pdf` into `public/` and set `resumeUrl: "/resume.pdf"` in `data/site.ts`.

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
