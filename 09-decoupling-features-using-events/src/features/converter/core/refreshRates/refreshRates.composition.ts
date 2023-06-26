import type { RefreshRates } from "../ports.input";
import { createRefreshRates } from "./refreshRates";

import { readConverter, saveConverter } from "../../infrastructure/store";
import { fetchRates } from "../../infrastructure/api";
import { withAnalytics } from "../../infrastructure/analytics";
import { publishRefreshed } from "../../infrastructure/bus";

export const refreshRates: RefreshRates = withAnalytics(
  createRefreshRates({
    fetchRates,
    readConverter,
    saveConverter,
    publishRefreshed,
  })
);
