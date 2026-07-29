# RemitSaver MVP

RemitSaver is a production-oriented Stellar MVP concept for migrant workers who want a portion of every remittance to be automatically routed into savings and yield instead of arriving as one undifferentiated lump sum.

## What is included

- Responsive landing experience for the product story and value proposition
- A working split simulation for sender-defined auto-save rules
- A wallet-focused onboarding flow and feedback capture
- A Soroban-ready contract skeleton for the split vault concept
- Unit tests around the split engine

## Tech stack

- Next.js + React + TypeScript
- Vitest for logic tests
- Stellar/Soroban contract starter in Rust

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Test

```bash
npm test
```

## Product notes

The current MVP focuses on the core experience: a sender chooses a split, the app explains how the spend and savings amounts are routed, and the product story is presented in a polished, mobile-friendly layout.

## Next steps

- Connect a real Stellar wallet (Freighter/Albedo)
- Integrate SEP-24 anchor onboarding for fiat on/off-ramp flows
- Replace the mock transfer simulation with Soroban contract calls
- Add actual analytics and feedback persistence

## Deployment (Vercel)

Recommended quick deploy steps:

1. Create a new GitHub repository and push this project:

```bash
git init
git add .
git commit -m "chore: initial RemitSaver MVP"
git branch -M main
# create remote on GitHub and push (replace <your-repo-url>)
git remote add origin <your-repo-url>
git push -u origin main
```

2. Deploy on Vercel by connecting the GitHub repo at https://vercel.com.

Or deploy using the Vercel CLI:

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Fallback CI deployment via GitHub Actions
If Vercel cannot connect to the GitHub repo because the GitHub App or repo permissions are not fully configured, this repository includes a fallback workflow that deploys on every push to `main`.

1. Create a personal Vercel token locally:

```bash
npx vercel tokens add github-action
```

2. Add the token to your GitHub repository secrets as `VERCEL_TOKEN`.
3. Push to `main`. The workflow in `.github/workflows/vercel-deploy.yml` will run and deploy the app to Vercel.

3. In Vercel project settings, set any environment variables you need (e.g. NEXT_PUBLIC_HORIZON_URL).

See `DEPLOY_VERCEL.md` for a concise guide.
