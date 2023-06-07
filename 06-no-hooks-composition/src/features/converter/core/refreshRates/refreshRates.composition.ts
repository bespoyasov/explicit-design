import type { RefreshRates } from "../ports.input";
import { createRefreshRates } from "./refreshRates";

import { readConverter, saveConverter } from "../../infrastructure/store";
import { fetchRates } from "../../infrastructure/api";

export const refreshRates: RefreshRates = createRefreshRates({
  fetchRates,
  readConverter,
  saveConverter,
});
