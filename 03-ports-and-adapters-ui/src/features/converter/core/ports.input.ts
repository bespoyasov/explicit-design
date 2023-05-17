import type { BaseValue, QuoteCurrencyCode, QuoteValue } from "./types";

export type ChangeQuoteCode = (code: QuoteCurrencyCode) => void;
export type UpdateBaseValue = (value: string | number) => void;
export type RefreshRates = () => Promise<void>;

export type SelectBaseValue = Selector<BaseValue>;
export type SelectQuoteValue = Selector<QuoteValue>;
export type SelectQuoteCode = Selector<QuoteCurrencyCode>;
