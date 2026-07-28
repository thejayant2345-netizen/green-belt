import { describe, expect, it } from 'vitest';
import { calculateSplit } from './split';

describe('calculateSplit', () => {
  it('splits a transfer into spend and savings values', () => {
    expect(calculateSplit(250, 30)).toEqual({ spend: 175, savings: 75, savingsPercent: 30 });
  });

  it('caps the percentage to a sensible range', () => {
    expect(calculateSplit(100, 90)).toEqual({ spend: 40, savings: 60, savingsPercent: 60 });
  });

  it('handles zero and negative values safely', () => {
    expect(calculateSplit(-10, 20)).toEqual({ spend: 0, savings: 0, savingsPercent: 20 });
  });
});
