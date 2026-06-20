Welcome to the portfolio app for Swaraj Puppalwar — this Next.js site is the public face of my chaotic creations.

Live site: [swaraj.lioransolutions.com](https://swaraj.lioransolutions.com)

This repo is a standard Next.js app (bootstrapped with `create-next-app`). The site embraces GIFs, memes, and developer humor — so expect weirdness.

## Quick Start (run locally)

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view locally.

## Notes for Developers

- The site intentionally uses animated GIFs and meme images — store them in `public/` and reference them from components.
- Keep the tone irreverent: replace any AI-rocket emoji vibes with words like "hmm", "huh", "laughing", "serious", "scared" to match the persona.
- Project highlights are curated from both `UltronTheAI` and `LioranGroupOfficial` orgs — update `components.json` when adding new projects.

## Deploy

Deploy as any Next.js app (Vercel recommended):

```bash
# push to GitHub, then connect the repo to Vercel
# or use `vercel` CLI
vercel --prod
```

## Where to tweak the memes

- Main page: `app/page.tsx`
- Components: `app/components/` and `portfolio/components.json`
- Static media: `public/` (put GIFs here; avoid heavy files > 2MB)

Have fun. Make devs laugh. If your CI complains, tell it to chill — it's learning.
