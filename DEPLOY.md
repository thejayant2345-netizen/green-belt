# Deploying to Vercel

Options:

1) Deploy via Vercel web UI (recommended)
- Create a public GitHub repository and push this project.
- In Vercel, choose "Import Project" → select the GitHub repo → follow the setup (Next.js is auto-detected).
- Set any environment variables under Project Settings → Environment Variables.
- Click Deploy.

2) Deploy via Vercel CLI (quick, from local machine)
- Install the Vercel CLI: `npm i -g vercel`
- Authenticate: `vercel login`
- From the project root run:

```bash
vercel --prod
```

This uses the `deploy` script added to `package.json`:

```bash
npm run deploy
```

3) Push to GitHub (example commands)

```bash
git init
git add .
git commit -m "chore: initial RemitSaver MVP"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin main
```

Notes:
- Vercel provides zero-config support for Next.js; `vercel.json` is optional but included for clarity.
- For demo/proof, use testnet wallets and record transactions/screenshots.
