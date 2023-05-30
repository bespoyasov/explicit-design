import type { Converter, ExchangeRates } from "./types";

// Network:
export type FetchRates = () => Promise<ExchangeRates>;

// Runtime Store:
export type ReadConverter = () => Converter;
export type SaveConverter = (patch: Partial<Converter>) => void;
