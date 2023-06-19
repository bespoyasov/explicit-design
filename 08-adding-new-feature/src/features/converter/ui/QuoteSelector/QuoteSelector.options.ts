import type { QuoteCurrencyCode } from "../../core/types";

type CurrencyOption = {
  label: LocalizedString;
  value: QuoteCurrencyCode;
};

const labelCollection: Record<QuoteCurrencyCode, LocalizedString> = {
  RPC: "Republic Credit",
  IMC: "Imperial Credit",
  WPU: "Wupiupi",
  DRG: "Druggat",
  ZKL: "Zukkel",
};

export const options: List<CurrencyOption> = (
  Object.entries(labelCollection) as List<[QuoteCurrencyCode, LocalizedString]>
).map(([code, label]) => ({ value: code, label }));
