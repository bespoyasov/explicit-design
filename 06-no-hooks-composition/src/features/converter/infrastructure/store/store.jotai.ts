import type {
  BaseValue,
  Converter,
  ExchangeRates,
  QuoteCurrencyCode,
  QuoteValue,
} from "../../core/types";

import { atom } from "jotai";

export const rates$ = atom<ExchangeRates>({
  DRG: 2,
  IMC: 3,
  RPC: 1,
  WPU: 0.5,
  ZKL: 0.8,
});

export const baseValue$ = atom<BaseValue>(0);
export const quoteValue$ = atom<QuoteValue>(0);
export const quoteCode$ = atom<QuoteCurrencyCode>("IMC");

export const getConverter$ = atom<Converter>((get) => ({
  baseCode: "RPC",
  baseValue: get(baseValue$),
  quoteValue: get(quoteValue$),
  quoteCode: get(quoteCode$),
  rates: get(rates$),
}));

// If we need more granular updates,
// we can split the read-write model interface.

export const setConverter$ = atom(
  null,
  (_, set, { rates, baseValue, quoteCode, quoteValue }: Partial<Converter>) => {
    if (rates) set(rates$, rates);
    if (baseValue) set(baseValue$, baseValue);
    if (quoteValue) set(quoteValue$, quoteValue);
    if (quoteCode) set(quoteCode$, quoteCode);
  }
);

// The `ReadModel` and `SaveModel` types are an example,
// that's why the `getConverter` and `setConverter` atoms look like this.
// In your application, you'd need to decide what kind of granularity is required
// and make a decision about the interface splitting from there.

// So don't get angry with the example,
// nano stores might not be suitable for _this_ particular task
// and the code can be better but it shows the point.
