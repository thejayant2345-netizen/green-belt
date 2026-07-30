"use client";

import React, { useState } from 'react';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: (walletType: string, address: string) => void;
}

export default function WalletModal({ isOpen, onClose, onConnect }: WalletModalProps) {
  const [connecting, setConnecting] = useState<string | null>(null);
  const [customKey, setCustomKey] = useState("");

  if (!isOpen) return null;

  const handleSelect = (wallet: string) => {
    setConnecting(wallet);
    setTimeout(() => {
      let mockAddr = "GAYK89320194810239102931023910293102391";
      if (wallet === 'freighter') {
        mockAddr = "GCAR992381203918239012830192830192830";
      } else if (wallet === 'albedo') {
        mockAddr = "GALB442381203918239012830192830192830";
      } else if (customKey.trim()) {
        mockAddr = customKey.trim();
      }
      setConnecting(null);
      onConnect(wallet, mockAddr);
      onClose();
    }, 800);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Connect Stellar Wallet</h3>
          <button type="button" className="close-btn" onClick={onClose}>&times;</button>
        </div>

        <p className="muted" style={{ marginBottom: '1.25rem' }}>
          Select a wallet to interact with Soroban Testnet contracts and view real-time balance routing.
        </p>

        <div className="wallet-options">
          <button 
            type="button" 
            className="wallet-btn" 
            disabled={!!connecting}
            onClick={() => handleSelect('freighter')}
          >
            <div className="wallet-icon freighter-icon">🚀</div>
            <div>
              <strong>Freighter Wallet</strong>
              <p>Stellar browser extension wallet</p>
            </div>
            {connecting === 'freighter' && <span className="spinner" />}
          </button>

          <button 
            type="button" 
            className="wallet-btn" 
            disabled={!!connecting}
            onClick={() => handleSelect('albedo')}
          >
            <div className="wallet-icon albedo-icon">✨</div>
            <div>
              <strong>Albedo Link</strong>
              <p>Web-based keyless Stellar signer</p>
            </div>
            {connecting === 'albedo' && <span className="spinner" />}
          </button>

          <div className="wallet-divider">
            <span>or use Stellar Testnet Sandbox Key</span>
          </div>

          <div className="sandbox-key-row">
            <input 
              type="text" 
              placeholder="G... Public Key"
              value={customKey}
              onChange={(e) => setCustomKey(e.target.value)}
              className="key-input"
            />
            <button 
              type="button" 
              className="primary-btn"
              onClick={() => handleSelect('sandbox')}
            >
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
