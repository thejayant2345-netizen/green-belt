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
