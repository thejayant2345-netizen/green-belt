"use client";

import { useMemo, useState } from 'react';
import { calculateSplit, formatCurrency } from '../lib/split';

const sampleTransfers = [50, 120, 250, 500];

export default function HomePage() {
  const [amount, setAmount] = useState(250);
  const [savingsPercent, setSavingsPercent] = useState(30);

  const split = useMemo(() => calculateSplit(amount, savingsPercent), [amount, savingsPercent]);

  return (
    <main className="page-shell">
      <section className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">Stellar-powered remittance savings</p>
          <h1>Send once. Split automatically. Grow a family future.</h1>
          <p>
            RemitSaver turns every transfer into a programmable experience: the spend portion stays liquid, while the savings portion is routed into a protected vault with yield potential.
          </p>
          <div className="hero-actions">
            <a href="#demo" className="primary-btn">Try the MVP flow</a>
            <a href="#why" className="secondary-btn">See the product story</a>
          </div>
        </div>

        <div className="hero-panel" id="demo">
          <h2>Split simulator</h2>
          <label className="field">
            <span>Transfer amount</span>
            <input
              type="number"
              min="1"
              step="1"
              value={amount}
              onChange={(event) => setAmount(Number(event.target.value || 0))}
            />
          </label>

          <label className="field">
            <span>Saved automatically (%)</span>
            <input
              type="range"
              min="10"
              max="60"
              step="5"
              value={savingsPercent}
              onChange={(event) => setSavingsPercent(Number(event.target.value))}
            />
            <strong>{savingsPercent}%</strong>
          </label>

          <div className="split-card">
            <div>
              <p>Spend</p>
              <h3>{formatCurrency(split.spend)}</h3>
            </div>
            <div>
              <p>Save</p>
              <h3>{formatCurrency(split.savings)}</h3>
            </div>
          </div>

          <p className="helper-text">
            This mock simulation mirrors the core rule of the product: each incoming transfer can be split into a spend wallet and a growth vault in one step.
          </p>
        </div>
      </section>

      <section className="stats-grid" id="why">
        <article>
          <h3>1-click savings</h3>
          <p>Senders configure a split once and every transfer uses it automatically.</p>
        </article>
        <article>
          <h3>Built for real corridors</h3>
          <p>Designed to work with anchor-based fiat rails and Stellar-native settlement.</p>
        </article>
        <article>
          <h3>Family-first UX</h3>
          <p>Receivers see a clear dashboard for spend, savings, and projected growth.</p>
        </article>
      </section>

      <section className="section-card">
        <h2>Sample transfer sizes</h2>
        <div className="badge-row">
          {sampleTransfers.map((value) => (
            <button key={value} type="button" onClick={() => setAmount(value)}>
              ${value}
            </button>
          ))}
        </div>
      </section>

      <section className="section-card onboarding-card">
        <div>
          <p className="eyebrow">Onboarding flow</p>
          <h2>10 real user onboarding target</h2>
          <p>
            The MVP includes a wallet-first onboarding journey, user feedback capture, and a deployment-ready structure for pilot testing.
          </p>
        </div>
        <div className="feedback-box">
          <h3>Feedback capture</h3>
          <p>“The split feels obvious and useful for daily family budgeting.”</p>
          <p>“I want this available in my local corridor.”</p>
        </div>
      </section>
    </main>
  );
}
