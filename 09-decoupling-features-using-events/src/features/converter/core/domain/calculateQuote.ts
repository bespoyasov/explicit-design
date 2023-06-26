import type { BaseValue, QuoteValue, ExchangeRate } from "../types";

export type CalculateQuote = (
  base: BaseValue,
  rate: ExchangeRate
) => QuoteValue;

export const calculateQuote: CalculateQuote = (base, rate) =>
  Number((base * rate).toFixed(2));
