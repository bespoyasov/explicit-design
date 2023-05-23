import type { Converter } from "../../core/types";

export const initialModel: Converter = {
  baseCode: "RPC",
  baseValue: 1,
  quoteCode: "IMC",
  quoteValue: 0.3,
  rates: {
    DRG: 2,
    IMC: 3,
    RPC: 1,
    WPU: 0.5,
    ZKL: 0.8,
  },
};
