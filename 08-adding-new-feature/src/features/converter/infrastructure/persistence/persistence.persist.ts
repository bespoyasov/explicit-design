import type { PersistRates } from "../../core/ports.output";
import type { Persist } from "~/shared/kernel";
import { key } from "./persistence.config";

type PersistDependencies = {
  persist: Persist;
};

export const createPersistRates =
  ({ persist }: PersistDependencies): PersistRates =>
  (rates) =>
    persist(key, rates);
