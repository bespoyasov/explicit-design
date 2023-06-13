import type { Converter, ExchangeRates } from "~/core/types";

export const rates: ExchangeRates = {
  RPC: 1,
  IMC: 0.5,
  WPU: 0.75,
  DRG: 0.25,
  ZKL: 0,
};

export const converter: Converter = {
  baseCode: "RPC",
  baseValue: 10,
  quoteCode: "IMC",
  quoteValue: 0,
  rates: { ...rates },
};
