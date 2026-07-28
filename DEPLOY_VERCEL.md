# Deploying RemitSaver to Vercel

This guide shows two quick ways to deploy the project to Vercel: via the Vercel dashboard (recommended) or using the Vercel CLI.

## Option A — Connect GitHub repo (recommended)

1. Push this repo to GitHub (see README for the exact commands).
2. Go to https://vercel.com/new and choose the repository.
3. Use default build settings (Framework: Next.js). Vercel will run `npm run build` and publish the site.
4. Set environment variables in the project settings (if needed):
   - `NEXT_PUBLIC_HORIZON_URL` — Horizon RPC endpoint for Stellar (testnet or mainnet)
5. Click Deploy.

## Option B — Vercel CLI

1. Install Vercel CLI:

```bash
npm i -g vercel
```

2. Login from the terminal:

```bash
vercel login
```

3. In the project root run:

```bash
vercel --prod
```

This will guide you through linking the project to a Vercel account and deploying immediately.

## Notes

- If you need server-side environment secrets (for anchors or horizon keys), use Vercel's Environment Variables UI and never commit secrets to the repository.
- For CI deployments, connect the GitHub repo and enable automatic deployments from the `main` branch.
