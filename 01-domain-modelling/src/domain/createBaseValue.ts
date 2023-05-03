import type { BaseValue } from "./types";

type Candidate = number | string;

export const createBaseValue = (raw: Candidate): BaseValue => {
  const candidate = Number(raw);
  return Number.isNaN(candidate) ? 0 : Math.abs(candidate);
};
