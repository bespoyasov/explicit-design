import { createPersistRates } from "./persistence.persist";
import { createRestoreRates } from "./persistence.restore";
import { persist, retrieve } from "~/services/persistence";

export const persistRates = createPersistRates({ persist });
export const restoreRates = createRestoreRates({ retrieve });
