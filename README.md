# Amir Portfolio (React + Tailwind)

A modern one-page portfolio template for a Flutter developer:
- dark/light mode
- smooth scroll sections
- animated reveals (Framer Motion)
- clean, modern UI with Tailwind

## 1) Requirements
- Node.js 18+ (recommended)
- npm (or pnpm / yarn)

## 2) Install & Run (local)
```bash
npm install
npm run dev
```

Vite will print a local URL like:
```txt
http://localhost:5173/
```

## 3) Build for production
```bash
npm run build
npm run preview
```

## 4) Customize your info
Edit:
- `src/data/profile.ts` (name, title, summary, skills, projects, experience)

## 5) Add your CV
Put your PDF here:
- `public/cv.pdf`

Then the "Download CV" button will work.

## 6) Make the contact form actually send emails (optional)
### Option A — Formspree
1) Create a form endpoint on Formspree.
2) Create `.env` in the project root:
```bash
cp .env.example .env
```
3) Put your endpoint in `.env`:
```txt
VITE_FORMSPREE_ENDPOINT="https://formspree.io/f/xxxxxx"
```
4) Restart dev server:
```bash
npm run dev
```

### Option B — Keep the default
If you don’t set `VITE_FORMSPREE_ENDPOINT`, the form uses `mailto:` and opens the visitor’s email app.

## 7) Deploy
### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`
# protfolio-website
