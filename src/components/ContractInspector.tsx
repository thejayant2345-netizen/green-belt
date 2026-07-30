"use client";

import React, { useState } from 'react';
import { DEPLOYED_CONTRACT_ADDRESS, STELLAR_TESTNET_HORIZON, STELLAR_SOROBAN_RPC } from '../lib/stellar';

export default function ContractInspector() {
  const [selectedMethod, setSelectedMethod] = useState<'initialize' | 'set_split' | 'deposit_and_split' | 'withdraw_savings'>('deposit_and_split');
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(DEPLOYED_CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="inspector-container">
      <div className="inspector-header">
        <div>
          <span className="hero-badge">Soroban Smart Contract Verification</span>
          <h2>Soroban On-Chain SplitVault Inspector</h2>
        </div>
        <div className="address-box">
          <code>{DEPLOYED_CONTRACT_ADDRESS.slice(0, 12)}...{DEPLOYED_CONTRACT_ADDRESS.slice(-8)}</code>
          <button type="button" className="secondary-btn btn-sm" onClick={copyAddress}>
            {copied ? 'Copied!' : 'Copy Contract ID'}
          </button>
        </div>
      </div>

      <div className="inspector-grid">
        <div className="methods-sidebar">
          <h4>Contract Entry Points</h4>
          <button 
            type="button"
            className={`method-tab ${selectedMethod === 'deposit_and_split' ? 'active' : ''}`}
            onClick={() => setSelectedMethod('deposit_and_split')}
          >
            <code>deposit_and_split(sender, receiver, amount)</code>
            <p>Atomically splits incoming deposit into spend & vault</p>
          </button>

          <button 
            type="button"
            className={`method-tab ${selectedMethod === 'set_split' ? 'active' : ''}`}
            onClick={() => setSelectedMethod('set_split')}
          >
            <code>set_split(receiver, spend_pct, savings_pct)</code>
            <p>Configures custom ratio rule for receiver</p>
          </button>

          <button 
            type="button"
            className={`method-tab ${selectedMethod === 'withdraw_savings' ? 'active' : ''}`}
            onClick={() => setSelectedMethod('withdraw_savings')}
          >
            <code>withdraw_savings(receiver, amount)</code>
            <p>Allows receiver to withdraw accrued yield/savings</p>
          </button>

          <button 
            type="button"
            className={`method-tab ${selectedMethod === 'initialize' ? 'active' : ''}`}
            onClick={() => setSelectedMethod('initialize')}
          >
            <code>initialize(owner)</code>
            <p>Sets admin authority and initializes state</p>
          </button>
        </div>

        <div className="method-details-panel">
          {selectedMethod === 'deposit_and_split' && (
            <div className="code-block-wrapper">
              <div className="code-header">
                <span>Soroban Rust Implementation: deposit_and_split</span>
                <span className="badge-tag">Atomic Transaction</span>
              </div>
              <pre className="code-pre">
{`pub fn deposit_and_split(
    env: Env, 
    sender: Address, 
    receiver: Address, 
    amount: i128
) -> Result<(i128, i128), String> {
    sender.require_auth();
    if amount <= 0 {
        return Err(String::from_str(&env, "Amount must be positive"));
    }

    let (spend_pct, savings_pct) = Self::get_split(env.clone(), receiver.clone());
    let savings_amount = (amount * (savings_pct as i128)) / 100;
    let spend_amount = amount - savings_amount;

    // Credit spend portion to receiver's spend trustline
    // Deposit savings portion into Blend protocol yield vault
    let key = (Symbol::new(&env, "sav_bal"), receiver.clone());
    let current_savings: i128 = env.storage().persistent().get(&key).unwrap_or(0i128);
    env.storage().persistent().set(&key, &(current_savings + savings_amount));

    Ok((spend_amount, savings_amount))
}`}
              </pre>
            </div>
          )}

          {selectedMethod === 'set_split' && (
            <div className="code-block-wrapper">
              <div className="code-header">
                <span>Soroban Rust Implementation: set_split</span>
                <span className="badge-tag">Config Rule</span>
              </div>
              <pre className="code-pre">
{`pub fn set_split(
    env: Env, 
    receiver: Address, 
    spend_pct: u32, 
    savings_pct: u32
) -> Result<(), String> {
    receiver.require_auth();
    if spend_pct + savings_pct != 100 {
        return Err(String::from_str(&env, "Percentages must sum to 100"));
    }
    env.storage().persistent().set(&receiver, &(spend_pct, savings_pct));
    Ok(())
}`}
              </pre>
            </div>
          )}

          {selectedMethod === 'withdraw_savings' && (
            <div className="code-block-wrapper">
              <div className="code-header">
                <span>Soroban Rust Implementation: withdraw_savings</span>
                <span className="badge-tag">Receiver Claim</span>
              </div>
              <pre className="code-pre">
{`pub fn withdraw_savings(
    env: Env, 
    receiver: Address, 
    amount: i128
) -> Result<i128, String> {
    receiver.require_auth();
    let key = (Symbol::new(&env, "sav_bal"), receiver.clone());
    let current_savings: i128 = env.storage().persistent().get(&key).unwrap_or(0i128);

    if amount > current_savings {
        return Err(String::from_str(&env, "Insufficient savings balance"));
    }

    let remaining = current_savings - amount;
    env.storage().persistent().set(&key, &remaining);
    Ok(remaining)
}`}
              </pre>
            </div>
          )}

          {selectedMethod === 'initialize' && (
            <div className="code-block-wrapper">
              <div className="code-header">
                <span>Soroban Rust Implementation: initialize</span>
                <span className="badge-tag">Admin Init</span>
              </div>
              <pre className="code-pre">
{`pub fn initialize(env: Env, owner: Address) -> Result<(), String> {
    owner.require_auth();
    if env.storage().instance().has(&symbol_short!("owner")) {
        return Err(String::from_str(&env, "Already initialized"));
    }
    env.storage().instance().set(&symbol_short!("owner"), &owner);
    env.storage().instance().set(&symbol_short!("vol"), &0i128);
    Ok(())
}`}
              </pre>
            </div>
          )}
        </div>
      </div>

      <div className="contract-rpc-info">
        <div className="rpc-item">
          <strong>Stellar Horizon Testnet:</strong> <code>{STELLAR_TESTNET_HORIZON}</code>
        </div>
        <div className="rpc-item">
          <strong>Soroban RPC Endpoint:</strong> <code>{STELLAR_SOROBAN_RPC}</code>
        </div>
        <div className="rpc-item">
          <strong>Target WASM Build:</strong> <code>wasm32-unknown-unknown (Soroban v21.4)</code>
        </div>
      </div>
    </div>
  );
}
