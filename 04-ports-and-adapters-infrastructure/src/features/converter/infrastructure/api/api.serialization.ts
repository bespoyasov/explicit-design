import type { BaseCurrencyCode, ExchangeRates } from "../../core/types";

export type RatesDTO = Record<BaseCurrencyCode, ExchangeRates>;

export const toDomain = (dto: RatesDTO): ExchangeRates => dto.RPC;
