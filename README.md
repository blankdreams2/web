## Astro Blog (Astro + React Islands)

Minimal, fast blog built with Astro and a few hydrated React islands for UI primitives. No global state management (no Zustand/Redux/Recoil/etc). Content is authored in MD/MDX via `astro:content` collections.

### Table of Contents
- **Overview**
- **Tech Stack**
- **Project Structure**
- **Where to Edit**
  - **Site metadata**
  - **Navigation & social links**
  - **SEO/head tags**
  - **Favicons & PWA**
  - **Styling & theming**
  - **Homepage content**
  - **Blog posts (MDX)**
  - **Authors**
  - **Projects**
  - **Pagination & featured posts**
  - **React islands (hydrated components)**
- **Commands**
- **Deployment**
- **Notes on State Management**
- **Content Authoring Tips (MDX, math, code)**

## Overview
- **Astro-first** site with pages/layouts in `.astro` files.
- **React islands** are used only where needed (e.g., scroll area UI). Hydration via `client:load` in `.astro` files.
- **No Supabase** or other backend SDKs; purely static content with MD/MDX.
- **No global state library** installed.

## Tech Stack
- **Astro**: `astro@5`
- **React Islands**: `@astrojs/react`, `react@19`, `react-dom@19`
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite`, utility helpers with `clsx` + `tailwind-merge`
- **UI primitives**: `radix-ui` used in `src/components/ui/*` (consumed by `.astro` with hydration)
- **Content**: MD/MDX via `@astrojs/mdx` and `astro:content` collections
- **Code highlighting & markdown**: `astro-expressive-code`, `rehype-pretty-code`, `remark-math`, `rehype-katex`, `rehype-external-links`
- **Icons**: `astro-icon`, `@iconify-json/lucide`, `lucide-react`
- **SEO**: `@astrojs/sitemap`, RSS via `@astrojs/rss`

## Project Structure
- `astro.config.ts`: Astro integrations, markdown/rehype config, Tailwind Vite plugin, dev server port
- `tsconfig.json`: strict config, JSX settings for React islands
- `src/consts.ts`: site-wide constants (title, description, links, pagination)
- `src/layouts/Layout.astro`: base HTML structure, header/footer slots, main content
- `src/components/*`: UI components (`.astro`) and React UI primitives in `src/components/ui/*.tsx`
- `src/pages/*`: static pages and routes (e.g., `index.astro`, `about.astro`, `blog/[...id].astro`)
- `src/content/*`: content collections
  - `src/content/blog/*`: MD/MDX posts
  - `src/content/authors/*`: author profiles
  - `src/content/projects/*`: projects data
- `src/content.config.ts`: `astro:content` collections and Zod schemas
- `public/*`: static assets (favicons, images, `site.webmanifest`)

## Where to Edit

### Site metadata
- File: `src/consts.ts`
  - `SITE.title`, `SITE.description`, `SITE.href`, `SITE.author`, `SITE.locale`

### Navigation & social links
- File: `src/consts.ts`
  - `NAV_LINKS`: main nav items
  - `SOCIAL_LINKS`: footer/social links (includes RSS)

### SEO/head tags
- Files: `src/components/Head.astro`, `src/components/PageHead.astro`, `src/components/PostHead.astro`
  - Global meta, RSS link, router (`astro:transitions`) in `Head.astro`
  - Page-level SEO in `PageHead.astro`
  - Post-level SEO/OpenGraph/Twitter in `PostHead.astro`

### Favicons & PWA
- Files: `src/components/Favicons.astro`, `public/site.webmanifest`, icons in `public/`
  - Replace icons and update manifest fields to match your site

### Styling & theming
- Files: `src/styles/global.css`, `src/styles/typography.css`
  - Tailwind v4 is wired via Vite plugin in `astro.config.ts`
  - Adjust CSS variables and utility classes as needed

### Homepage content
- File: `src/pages/index.astro`
  - Hero text and intro paragraphs
  - Featured posts count comes from `SITE.featuredPostCount` in `src/consts.ts`

### Blog posts (MDX)
- Directory: `src/content/blog/`
- Schema: defined in `src/content.config.ts`
- New post: create a folder with `index.mdx` (images alongside it if needed)

Example frontmatter:
```md
---
title: "My New Post"
description: "Short summary of the post."
date: 2025-10-17
order: 1 # optional, for custom ordering
image: ./cover.png # optional
tags: ["astro", "react", "notes"]
authors: ["Your Name"]
draft: false
---

Your MDX content here.
```

Routes:
- Post detail: `src/pages/blog/[...id].astro`
- Blog listing + pagination: `src/pages/blog/[...page].astro`

### Authors
- Directory: `src/content/authors/`
- Schema: see `src/content.config.ts`
  - Add an MDX/MD file per author with required fields (`name`, `avatar`, etc.)

### Projects
- Directory: `src/content/projects/`
- Schema: see `src/content.config.ts`

### Pagination & featured posts
- File: `src/consts.ts`
  - `SITE.featuredPostCount`: number of posts on the homepage
  - `SITE.postsPerPage`: posts per paginated page

### React islands (hydrated components)
- Typical usage appears in `.astro` files as `<Component client:load />`
- Examples in repo:
  - `src/components/TOCSidebar.astro` uses `<ScrollArea client:load />` (React UI primitive)
  - Similar hydration in `TOCHeader.astro`, `SubpostsSidebar.astro`, `SubpostsHeader.astro`, `AuthorCard.astro`, `BlogCard.astro`
- React UI primitives live in `src/components/ui/*.tsx` (e.g. `scroll-area.tsx`, `button.tsx`, etc.) and are consumed by `.astro` files.

## Commands

Install dependencies (choose one):
```bash
pnpm install
# or
npm install
```

Run dev server:
```bash
pnpm dev
# or
npm run dev
```

Build and preview:
```bash
pnpm build && pnpm preview
# or
npm run build && npm run preview
```

Dev server port/host can be changed in `astro.config.ts` (default `1234`).

## Deployment
- Output is a static site by default. Deploy to any static host (Vercel/Netlify/GitHub Pages/etc.).
- RSS and Sitemap are generated via integrations (`@astrojs/rss`, `@astrojs/sitemap`).

## Notes on State Management
- There is **no global state library** installed (no Zustand/Redux/Recoil/Jotai/MobX/XState/etc.).
- React islands can use local component state where needed.
- Some interactivity is done with lightweight inline scripts in `.astro` (e.g., TOC scroll tracking).

## Content Authoring Tips (MDX, math, code)
- **MDX**: Use standard markdown with JSX components. Place media in the same folder as the post.
- **Math**: Enabled via `remark-math` and `rehype-katex`.
- **Code blocks**: Styled via `astro-expressive-code` and `rehype-pretty-code` with GitHub light/dark themes.
- **External links**: `rehype-external-links` adds `target="_blank"` and rel attributes.

---

If you want to rename the site and make it yours, start with:
- `src/consts.ts` (title, description, author, URLs)
- `public/` icons + `public/site.webmanifest`
- `src/pages/index.astro` intro text
- Add/modify posts in `src/content/blog/`


