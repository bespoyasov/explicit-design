import type { RestoreRates } from "../../core/ports.output";
import type { Retrieve } from "~/shared/kernel";
import { key } from "./persistence.config";

type RestoreDependencies = {
  retrieve: Retrieve;
};

export const createRestoreRates =
  ({ retrieve }: RestoreDependencies): RestoreRates =>
  () =>
    retrieve(key);
