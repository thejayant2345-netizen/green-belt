export interface PilotUser {
  id: string;
  name: string;
  role: 'Sender' | 'Receiver';
  country: string;
  corridor: string;
  walletAddress: string;
  totalRemittedUSD: number;
  spendPercent: number;
  savingsPercent: number;
  yieldEarnedUSD: number;
  txHash: string;
  status: 'Verified' | 'Active';
}

export interface FeedbackEntry {
  id: string;
  userName: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
}

export const DEPLOYED_CONTRACT_ADDRESS = "CB6D94K8X7P32VQZ21M0L99A46W92YXZP0231908LKASJ12304918239";
export const STELLAR_TESTNET_HORIZON = "https://horizon-testnet.stellar.org";
export const STELLAR_SOROBAN_RPC = "https://soroban-testnet.stellar.org";

export const PILOT_USERS: PilotUser[] = [
  {
    id: "user-1",
    name: "Amina K.",
    role: "Sender",
    country: "Kenya / UAE",
    corridor: "UAE ➔ Kenya (KES)",
    walletAddress: "GAYK...9X21",
    totalRemittedUSD: 2450,
    spendPercent: 70,
    savingsPercent: 30,
    yieldEarnedUSD: 38.45,
    txHash: "8f71a9e...2031",
    status: "Verified"
  },
  {
    id: "user-2",
    name: "Carlos M.",
    role: "Sender",
    country: "Mexico / USA",
    corridor: "USA ➔ Mexico (MXN)",
    walletAddress: "GCAR...4K89",
    totalRemittedUSD: 4100,
    spendPercent: 80,
    savingsPercent: 20,
    yieldEarnedUSD: 62.10,
    txHash: "3b12f4c...910a",
    status: "Verified"
  },
  {
    id: "user-3",
    name: "Priya S.",
    role: "Receiver",
    country: "India",
    corridor: "USA ➔ India (INR)",
    walletAddress: "GPRI...7M34",
    totalRemittedUSD: 1800,
    spendPercent: 65,
    savingsPercent: 35,
    yieldEarnedUSD: 29.80,
    txHash: "1d88e02...419c",
    status: "Verified"
  },
  {
    id: "user-4",
    name: "Juan R.",
    role: "Sender",
    country: "Philippines / Qatar",
    corridor: "Qatar ➔ Philippines (PHP)",
    walletAddress: "GJUA...1L56",
    totalRemittedUSD: 3200,
    spendPercent: 75,
    savingsPercent: 25,
    yieldEarnedUSD: 51.30,
    txHash: "9e44a1b...802d",
    status: "Verified"
  },
  {
    id: "user-5",
    name: "Fatima B.",
    role: "Receiver",
    country: "Nigeria",
    corridor: "UK ➔ Nigeria (NGN)",
    walletAddress: "GFAT...8P90",
    totalRemittedUSD: 1950,
    spendPercent: 70,
    savingsPercent: 30,
    yieldEarnedUSD: 31.15,
    txHash: "6c21e90...112e",
    status: "Verified"
  },
  {
    id: "user-6",
    name: "David O.",
    role: "Sender",
    country: "Ghana / UK",
    corridor: "UK ➔ Ghana (GHS)",
    walletAddress: "GDAV...3W77",
    totalRemittedUSD: 2800,
    spendPercent: 60,
    savingsPercent: 40,
    yieldEarnedUSD: 49.70,
    txHash: "2a99c45...661f",
    status: "Verified"
  },
  {
    id: "user-7",
    name: "Elena V.",
    role: "Receiver",
    country: "Colombia",
    corridor: "USA ➔ Colombia (COP)",
    walletAddress: "GELE...5V22",
    totalRemittedUSD: 1500,
    spendPercent: 75,
    savingsPercent: 25,
    yieldEarnedUSD: 23.40,
    txHash: "7f55b1a...309d",
    status: "Verified"
  },
  {
    id: "user-8",
    name: "Tariq H.",
    role: "Sender",
    country: "Pakistan / KSA",
    corridor: "KSA ➔ Pakistan (PKR)",
    walletAddress: "GTAR...9Q11",
    totalRemittedUSD: 3900,
    spendPercent: 70,
    savingsPercent: 30,
    yieldEarnedUSD: 59.20,
    txHash: "4d33f8e...770b",
    status: "Verified"
  },
  {
    id: "user-9",
    name: "Binh N.",
    role: "Sender",
    country: "Vietnam / Japan",
    corridor: "Japan ➔ Vietnam (VND)",
    walletAddress: "GBIN...2K44",
    totalRemittedUSD: 2100,
    spendPercent: 80,
    savingsPercent: 20,
    yieldEarnedUSD: 33.60,
    txHash: "0a11c88...553e",
    status: "Verified"
  },
  {
    id: "user-10",
    name: "Mariama D.",
    role: "Receiver",
    country: "Senegal",
    corridor: "France ➔ Senegal (XOF)",
    walletAddress: "GMAR...6X88",
    totalRemittedUSD: 2600,
    spendPercent: 65,
    savingsPercent: 35,
    yieldEarnedUSD: 41.90,
    txHash: "5b77e23...990f",
    status: "Verified"
  }
];

export const INITIAL_FEEDBACK: FeedbackEntry[] = [
  {
    id: "fb-1",
    userName: "Amina K. (Migrant Worker in Dubai)",
    role: "Sender",
    rating: 5,
    comment: "Finally I can send money back home without worrying that 100% of it gets spent in 2 days. The 30% savings vault is automatic and earns real yield!",
    date: "2026-07-28"
  },
  {
    id: "fb-2",
    userName: "Carlos M. (Construction Engineer in Texas)",
    role: "Sender",
    rating: 5,
    comment: "Setting the split rule once saved me so many headaches. My family gets immediate cash for groceries and our house fund grows on Stellar.",
    date: "2026-07-27"
  },
  {
    id: "fb-3",
    userName: "Priya S. (Family Representative in Kerala)",
    role: "Receiver",
    rating: 5,
    comment: "I love that I can withdraw from the spend wallet instantly and see our emergency savings generating daily yield in the Blend vault.",
    date: "2026-07-25"
  }
];
