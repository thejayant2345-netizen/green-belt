"use client";

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { calculateSplit, formatCurrency } from '../lib/split';
import ThemeToggle from '../components/theme-toggle';
import WalletModal from '../components/WalletModal';
import UserOnboardingSection from '../components/UserOnboardingSection';
import AnalyticsView from '../components/AnalyticsView';
import ContractInspector from '../components/ContractInspector';
import FeedbackSection from '../components/FeedbackSection';

const presets = [100, 250, 500, 1000];

type TabType = 'simulator' | 'onboarding' | 'analytics' | 'contract' | 'feedback';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<TabType>('simulator');
  const [amount, setAmount] = useState(250);
  const [savingsPercent, setSavingsPercent] = useState(30);
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState<{ type: string; address: string } | null>(null);

  const split = useMemo(() => calculateSplit(amount, savingsPercent), [amount, savingsPercent]);

  const handleWalletConnect = (type: string, address: string) => {
    setConnectedWallet({ type, address });
  };

  return (
    <div>
      <nav className="app-navbar">
        <div className="brand-logo">
          <span>RemitSaver</span>
          <span className="brand-badge">Stellar Soroban MVP</span>
        </div>

        <div className="nav-links">
          <button 
            type="button" 
            className={`nav-item ${activeTab === 'simulator' ? 'active' : ''}`}
            onClick={() => setActiveTab('simulator')}
          >
            Simulator
          </button>
          <button 
            type="button" 
            className={`nav-item ${activeTab === 'onboarding' ? 'active' : ''}`}
            onClick={() => setActiveTab('onboarding')}
          >
            10+ Users Onboarded
          </button>
          <button 
            type="button" 
            className={`nav-item ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            Analytics & Health
          </button>
          <button 
            type="button" 
            className={`nav-item ${activeTab === 'contract' ? 'active' : ''}`}
            onClick={() => setActiveTab('contract')}
          >
            Smart Contract
          </button>
          <button 
            type="button" 
            className={`nav-item ${activeTab === 'feedback' ? 'active' : ''}`}
            onClick={() => setActiveTab('feedback')}
          >
            User Feedback
          </button>
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <ThemeToggle />
          {connectedWallet ? (
            <div className="hero-badge" style={{ cursor: 'pointer' }} onClick={() => setIsWalletOpen(true)}>
              🟢 {connectedWallet.address.slice(0, 4)}...{connectedWallet.address.slice(-4)}
            </div>
          ) : (
            <button type="button" className="primary-btn btn-sm" onClick={() => setIsWalletOpen(true)}>
              Connect Wallet
            </button>
          )}
          <Link href="/dashboard" className="secondary-btn btn-sm">
            Dashboard ➔
          </Link>
        </div>
      </nav>

      <main className="page-shell">
        <div className="app-tabs-nav">
          <button 
            type="button" 
            className={`tab-btn ${activeTab === 'simulator' ? 'active' : ''}`}
            onClick={() => setActiveTab('simulator')}
          >
            💡 Product & Simulator
          </button>
          <button 
            type="button" 
            className={`tab-btn ${activeTab === 'onboarding' ? 'active' : ''}`}
            onClick={() => setActiveTab('onboarding')}
          >
            👥 10+ Onboarded Users
          </button>
          <button 
            type="button" 
            className={`tab-btn ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            📊 Analytics & Monitoring
          </button>
          <button 
            type="button" 
            className={`tab-btn ${activeTab === 'contract' ? 'active' : ''}`}
            onClick={() => setActiveTab('contract')}
          >
            📜 Soroban Contract
          </button>
          <button 
            type="button" 
            className={`tab-btn ${activeTab === 'feedback' ? 'active' : ''}`}
            onClick={() => setActiveTab('feedback')}
          >
            💬 User Feedback
          </button>
        </div>

        {activeTab === 'simulator' && (
          <div>
            <section className="hero-card">
              <div className="hero-copy">
                <span className="hero-badge">🟢 Level 4 - Green Belt Submission</span>
                <h1>Auto-split every remittance into spendable cash & yield.</h1>
                <p>
                  Migrant workers face a hard choice: every transfer arrives as cash with no programmable savings. RemitSaver uses Soroban smart contracts on Stellar to automatically route a fraction into a yield-generating vault while delivering everyday cash to receivers.
                </p>
                <div className="hero-actions">
                  <button type="button" className="primary-btn" onClick={() => setIsWalletOpen(true)}>
                    Connect Stellar Wallet
                  </button>
                  <button type="button" className="secondary-btn" onClick={() => setActiveTab('onboarding')}>
                    View Pilot Users Proof
                  </button>
                </div>
              </div>

              <div className="hero-panel" id="demo">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3>Live Remittance Split Simulator</h3>
                  <span className="pulse-green" title="Soroban Testnet RPC connected" />
                </div>
                
                <div className="preset-row">
                  {presets.map((value) => (
                    <button 
                      key={value} 
                      type="button" 
                      className={amount === value ? 'active' : ''}
                      onClick={() => setAmount(value)}
                    >
                      ${value}
                    </button>
                  ))}
                </div>

                <div className="field">
                  <label>Remittance Amount (USDC)</label>
                  <input
                    type="number"
                    min="10"
                    step="10"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value || 0))}
                  />
                </div>

                <div className="field">
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Savings Vault Ratio</span>
                    <strong>{savingsPercent}% Savings / {100 - savingsPercent}% Spend</strong>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="60"
                    step="5"
                    value={savingsPercent}
                    onChange={(e) => setSavingsPercent(Number(e.target.value))}
                  />
                </div>

                <div className="split-card">
                  <div>
                    <p>Spendable Cash (Receiver)</p>
                    <h3>{formatCurrency(split.spend)}</h3>
                  </div>
                  <div>
                    <p>Yield Vault (Auto-Save)</p>
                    <h3>{formatCurrency(split.savings)}</h3>
                  </div>
                </div>

                <p className="muted" style={{ fontSize: '0.85rem', marginTop: '12px' }}>
                  🔒 Smart contract executes atomically on Stellar Testnet (Sub-5s settlement, &lt; $0.0001 fee).
                </p>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'onboarding' && <UserOnboardingSection />}
        {activeTab === 'analytics' && <AnalyticsView />}
        {activeTab === 'contract' && <ContractInspector />}
        {activeTab === 'feedback' && <FeedbackSection />}
      </main>

      <WalletModal 
        isOpen={isWalletOpen} 
        onClose={() => setIsWalletOpen(false)} 
        onConnect={handleWalletConnect} 
      />
    </div>
  );
}
