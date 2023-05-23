import type { ExchangeRate, ExchangeRates, QuoteCurrencyCode } from "../types";

export type LookupRate = (
  rate: ExchangeRates,
  quote: QuoteCurrencyCode
) => ExchangeRate;

export const lookupRate: LookupRate = (rates, against) => rates[against];
