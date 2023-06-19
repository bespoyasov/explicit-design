import type { RefreshRates } from "../../core/ports.input";
import { sendRefreshEvent } from "./analytics";

export const withAnalytics =
  (refresh: RefreshRates): RefreshRates =>
  async () => {
    sendRefreshEvent();
    return await refresh();
  };
