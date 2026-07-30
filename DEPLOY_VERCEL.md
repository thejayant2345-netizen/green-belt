# Deploying RemitSaver

This guide covers the two deployment paths that were used for this project: Netlify and Vercel.

## Option A — Netlify (recommended for this MVP)

1. Build the project:

```bash
npm run build
```

2. Deploy the static export:

```bash
npx netlify deploy --dir out --prod
```

3. If prompted, create or link a Netlify project.
4. Set environment variables in the Netlify dashboard if needed:
   - `NEXT_PUBLIC_HORIZON_URL` — Horizon RPC endpoint for Stellar (testnet or mainnet)

## Option B — Vercel

1. Push the repo to GitHub.
2. Go to https://vercel.com/new and choose the repository.
3. Use default build settings. Vercel will run `npm run build` and publish the site.
4. Set environment variables in the project settings if needed.
5. Click Deploy.

## CLI deployment for Vercel

```bash
npm i -g vercel
vercel login
vercel --prod
```

## Notes

- The project uses a static export build path, so it works well for Netlify and Vercel.
- Never commit secrets to the repository. Use dashboard environment variables instead.
- For future automation, connect the GitHub repo to the hosting platform and enable automatic deployments from the `main` branch.
