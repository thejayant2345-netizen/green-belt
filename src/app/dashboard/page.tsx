"use client";

import Link from 'next/link';
import ThemeToggle from '../../components/theme-toggle';

const transactions = [
  { label: 'Family transfer', amount: '+$250', status: 'Completed' },
  { label: 'Auto-save rule', amount: '-$75', status: 'Applied' },
  { label: 'Vault growth', amount: '+$14', status: 'Pending' },
];

export default function DashboardPage() {
  return (
    <main className="dashboard-shell">
      <header className="dashboard-header-bar">
        <div>
          <p className="eyebrow">RemitSaver dashboard</p>
          <h1>Welcome back, Amina</h1>
        </div>
        <div className="dashboard-actions">
          <ThemeToggle />
          <Link href="/" className="secondary-btn">Back home</Link>
        </div>
      </header>

      <section className="dashboard-grid">
        <article className="dashboard-card large-card">
          <div className="dashboard-card-header">
            <div>
              <p className="eyebrow">Available spend</p>
              <h2>$820.00</h2>
            </div>
            <span className="pill">+12% this month</span>
          </div>
          <div className="mini-chart">
            <div className="bar" style={{ height: '45%' }} />
            <div className="bar" style={{ height: '68%' }} />
            <div className="bar active" style={{ height: '82%' }} />
            <div className="bar" style={{ height: '60%' }} />
            <div className="bar" style={{ height: '74%' }} />
          </div>
        </article>

        <article className="dashboard-card">
          <p className="eyebrow">Saved this month</p>
          <h3>$240.00</h3>
          <p className="muted">Your auto-save split is active and tracking well.</p>
        </article>

        <article className="dashboard-card">
          <p className="eyebrow">Next transfer</p>
          <h3>$90.00</h3>
          <p className="muted">Scheduled for tomorrow morning.</p>
        </article>
      </section>

      <section className="dashboard-section">
        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <div>
              <p className="eyebrow">Recent activity</p>
              <h3>Latest moves</h3>
            </div>
            <span className="pill">Updated just now</span>
          </div>
          <ul className="transaction-list">
            {transactions.map((item) => (
              <li key={item.label}>
                <div>
                  <strong>{item.label}</strong>
                  <p>{item.status}</p>
                </div>
                <span>{item.amount}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="dashboard-card">
          <p className="eyebrow">Auto-save rules</p>
          <h3>30% to family vault</h3>
          <p className="muted">This rule applies to every incoming transfer automatically.</p>
          <div className="rule-pill-row">
            <span className="pill">Stable</span>
            <span className="pill">Low risk</span>
            <span className="pill">Goal-based</span>
          </div>
        </div>
      </section>
    </main>
  );
}
