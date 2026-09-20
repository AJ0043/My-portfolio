# Portfolio — React + Tailwind CSS (no backend)

Vite + React 18 + Tailwind CSS v4. Fully responsive. No server or database needed.

## Run in VS Code

1. Install Node.js 18+ (https://nodejs.org).
2. Open this folder in VS Code (File → Open Folder).
3. Open the terminal (Ctrl+`) and run:

```bash
npm install
npm run dev
```

4. Open http://localhost:5173 — the page updates live as you save files.

## Edit your content

Everything (name, about, skills, projects, experience, education, certifications, social links) is in
`src/data.js`. Fill in the `url` of each entry in `socials` — buttons with an empty url stay hidden.

## Build & deploy

```bash
npm run build     # creates the dist/ folder
```

Upload `dist/` to any static host: Netlify, Vercel, GitHub Pages, Cloudflare Pages.
(GitHub Pages: set `base: "/your-repo-name/"` in vite.config.js first.)

## Structure

```
src/
  data.js          <- all your content + social links
  App.jsx          page layout
  components/      Nav, Hero, About, Skills, Projects, Timeline, Certifications, Contact
  index.css        Tailwind + theme colors
```
