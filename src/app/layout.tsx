import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RemitSaver | Auto-save remittances on Stellar',
  description: 'A production-ready MVP for automating savings splits on every remittance.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
