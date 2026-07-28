export interface SplitResult {
  spend: number;
  savings: number;
  savingsPercent: number;
}

export function calculateSplit(amount: number, savingsPercent: number): SplitResult {
  const safeAmount = Math.max(0, Number(amount) || 0);
  const safePercent = Math.min(60, Math.max(0, Number(savingsPercent) || 0));
  const savings = Math.round((safeAmount * safePercent) / 100);
  const spend = Math.max(0, safeAmount - savings);

  return {
    spend,
    savings,
    savingsPercent: safePercent,
  };
}

export function formatCurrency(value: number): string {
  return `$${value.toFixed(0)}`;
}
