"use client";

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from '../../components/theme-toggle';

export default function LoginPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');

  return (
    <main className="auth-shell">
      <div className="auth-card">
        <div className="auth-header">
          <div>
            <p className="eyebrow">Secure access</p>
            <h1>{mode === 'login' ? 'Log in to RemitSaver' : 'Create your RemitSaver account'}</h1>
          </div>
          <ThemeToggle />
        </div>

        <div className="auth-switcher">
          <button type="button" className={mode === 'login' ? 'active' : ''} onClick={() => setMode('login')}>
            Log in
          </button>
          <button type="button" className={mode === 'signup' ? 'active' : ''} onClick={() => setMode('signup')}>
            Sign up
          </button>
        </div>

        <label className="field">
          <span>Email</span>
          <input type="email" placeholder="you@example.com" />
        </label>

        <label className="field">
          <span>Password</span>
          <input type="password" placeholder="••••••••" />
        </label>

        {mode === 'signup' && (
          <label className="field">
            <span>Wallet address</span>
            <input type="text" placeholder="GABC..." />
          </label>
        )}

        <Link href="/dashboard" className="primary-btn auth-submit">
          {mode === 'login' ? 'Continue' : 'Create account'}
        </Link>

        <p className="muted auth-footer">
          Demo mode only — this flow is designed for the MVP experience.
        </p>
      </div>
    </main>
  );
}
