# Portfolio — Personal Website

A modern, responsive personal portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Features a clean single-page design with dark/light theme support, scroll-triggered animations, and a fully customizable content data layer.

Built with [Next.js](https://nextjs.org/) — statically exported for fast deployment anywhere.

---

## Tech Stack

| Layer        | Technology                              |
| ------------ | --------------------------------------- |
| Framework    | Next.js 14 (App Router)                 |
| Language     | TypeScript                              |
| Styling      | Tailwind CSS                            |
| Animation    | Framer Motion                           |
| Icons        | Lucide React                            |
| Utilities    | clsx                                    |

## Features

- ✨ **Smooth scroll navigation** with active section highlighting
- 🌗 **Dark/Light theme toggle** — persisted in localStorage, respects system preference
- 🎯 **Framer Motion scroll-triggered animations** — sections fade and slide in as you scroll
- 📱 **Fully responsive** — mobile-first design with hamburger navigation
- 🔍 **SEO optimized** — meta tags and Open Graph support
- 📄 **Resume download button** — placeholder PDF in `public/resume/`
- ⬆️ **Back to top button** — appears when scrolling down
- ⚡ **Fast loading** — static site export (`output: 'export'`)
- ♿ **Accessibility friendly** — semantic HTML, aria labels, keyboard navigation

## Sections

1. **Hero** — Animated intro with name, title, tagline, and CTA buttons
2. **About** — Brief bio with key highlights
3. **Skills** — Categorized skills grid with proficiency indicators
4. **Projects** — Project cards with tech tags, source code, and live demo links
5. **Experience** — Vertical timeline of work experience
6. **Education** — Education timeline
7. **Contact** — Contact info, email, location, social links

---

## How to Customize

All personal content is managed in a single file:

```
src/data/content.ts
```

Edit the `siteContent` export to update:

- **Personal info** — name, title, bio, email, location, social links
- **Skills** — add/remove skills, adjust proficiency levels (1–5)
- **Projects** — add/remove projects with descriptions, tech stack, and URLs
- **Experience** — add work history entries with highlights
- **Education** — add education entries

Placeholder files:

- **Profile/resume**: `public/resume/resume.pdf` — replace with your actual resume
- **Images**: `public/images/` — add project screenshots, profile photo here
- **Hero avatar**: update `src/components/sections/Hero.tsx` to reference your image

---

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20 LTS)
- npm (ships with Node.js)

### Install

```bash
npm install
```

### Run (development)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Hot reload is enabled — changes reflect instantly.

### Build (production)

```bash
npm run build
```

Generates a static export in the `out/` directory.

### Lint

```bash
npm run lint
```

---

## Deployment

The project is configured for **static export** (`output: 'export'` in `next.config.js`). After running `npm run build`, deploy the `out/` directory to any static hosting provider:

| Platform         | Instructions                                                      |
| ---------------- | ----------------------------------------------------------------- |
| **Vercel**       | Connect repo, Vercel auto-detects Next.js builds                  |
| **GitHub Pages** | Push `out/` to `gh-pages` branch or use GitHub Actions            |
| **Netlify**      | Drag-and-drop `out/` folder or connect Git repo                   |
| **Cloudflare**   | Upload `out/` to Pages or connect Git repo                        |
| Any static host  | Upload the `out/` directory to your server's document root        |

---

## Project Structure

```
portfolio/
├── public/
│   ├── images/          # Profile photo, project screenshots
│   └── resume.pdf       # Resume download file
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Root layout with ThemeProvider
│   │   ├── page.tsx     # Main single-page content
│   │   └── globals.css  # Tailwind directives + custom CSS
│   ├── components/
│   │   ├── layout/      # Navbar, Footer
│   │   ├── sections/    # Hero, About, Skills, Projects, etc.
│   │   └── ui/          # Reusable UI components
│   ├── data/
│   │   └── content.ts   # All personal content data
│   └── lib/
│       └── utils.ts     # Utility functions (cn, formatDate, slugify)
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## License

MIT