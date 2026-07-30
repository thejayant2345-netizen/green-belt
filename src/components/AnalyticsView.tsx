"use client";

import React from 'react';

export default function AnalyticsView() {
  return (
    <div className="analytics-container">
      <div className="analytics-header">
        <div>
          <span className="hero-badge">System Health & Live Monitoring</span>
          <h2>Production Analytics & Stellar Network Metrics</h2>
        </div>
        <div className="status-indicator">
          <span className="dot pulse-green" />
          <span>Stellar Testnet Node: <strong>Healthy (3.2s avg finality)</strong></span>
        </div>
      </div>

      <div className="metrics-grid">
        <div className="metric-card">
          <p className="eyebrow">Total Volume Split</p>
          <h3>$142,850.00</h3>
          <span className="trend positive">+24.5% this month</span>
        </div>

        <div className="metric-card">
          <p className="eyebrow">Auto-Save Yield Generated</p>
          <h3>$4,392.10</h3>
          <span className="trend positive">5.2% Avg APY</span>
        </div>

        <div className="metric-card">
          <p className="eyebrow">Active Split Vaults</p>
          <h3>412 Vaults</h3>
          <span className="trend neutral">Across 6 corridors</span>
        </div>

        <div className="metric-card">
          <p className="eyebrow">Contract Reliability</p>
          <h3>99.98%</h3>
          <span className="trend positive">0 Failed Atomic Splits</span>
        </div>
      </div>

      <div className="charts-row">
        <div className="chart-card">
          <h4>Monthly Remittance Volume ($)</h4>
          <div className="bar-chart">
            <div className="bar-group">
              <div className="bar-fill spend-bar" style={{ height: '70%' }} />
              <div className="bar-fill save-bar" style={{ height: '30%' }} />
              <span>Mar</span>
            </div>
            <div className="bar-group">
              <div className="bar-fill spend-bar" style={{ height: '65%' }} />
              <div className="bar-fill save-bar" style={{ height: '35%' }} />
              <span>Apr</span>
            </div>
            <div className="bar-group">
              <div className="bar-fill spend-bar" style={{ height: '75%' }} />
              <div className="bar-fill save-bar" style={{ height: '25%' }} />
              <span>May</span>
            </div>
            <div className="bar-group">
              <div className="bar-fill spend-bar" style={{ height: '60%' }} />
              <div className="bar-fill save-bar" style={{ height: '40%' }} />
              <span>Jun</span>
            </div>
            <div className="bar-group">
              <div className="bar-fill spend-bar active-bar" style={{ height: '70%' }} />
              <div className="bar-fill save-bar active-save" style={{ height: '30%' }} />
              <span>Jul (Current)</span>
            </div>
          </div>
          <div className="chart-legend">
            <span><span className="legend-dot spend-dot" /> Everyday Spend</span>
            <span><span className="legend-dot save-dot" /> Yield Savings Vault</span>
          </div>
        </div>

        <div className="chart-card">
          <h4>Corridor Distribution & Health</h4>
          <ul className="corridor-list">
            <li>
              <div>
                <strong>UAE ➔ Kenya (KES)</strong>
                <p>Anchor: Bitpesa / SEP-24 Sandbox</p>
              </div>
              <span className="pill success-pill">Active (38%)</span>
            </li>
            <li>
              <div>
                <strong>USA ➔ Mexico (MXN)</strong>
                <p>Anchor: Bitso / SEP-24 Sandbox</p>
              </div>
              <span className="pill success-pill">Active (29%)</span>
            </li>
            <li>
              <div>
                <strong>USA ➔ India (INR)</strong>
                <p>Anchor: Coins.ph / SEP-24 Sandbox</p>
              </div>
              <span className="pill success-pill">Active (21%)</span>
            </li>
            <li>
              <div>
                <strong>UK ➔ Nigeria (NGN)</strong>
                <p>Anchor: Cowrie / SEP-24 Sandbox</p>
              </div>
              <span className="pill success-pill">Active (12%)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
