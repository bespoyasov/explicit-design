export type BaseCurrencyCode = "RPC";
export type QuoteCurrencyCode = "RPC" | "IMC" | "WPU" | "DRG" | "ZKL";

export type ExchangeRate = Fractional;
export type ExchangeRates = Record<QuoteCurrencyCode, ExchangeRate>;

type Value = Fractional;
export type BaseValue = Value;
export type QuoteValue = Value;

export type Converter = {
  baseCode: BaseCurrencyCode;
  baseValue: BaseValue;
  quoteCode: QuoteCurrencyCode;
  quoteValue: QuoteValue;
  rates: ExchangeRates;
};
