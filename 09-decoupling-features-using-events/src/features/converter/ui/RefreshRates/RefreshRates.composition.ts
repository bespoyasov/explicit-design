import { RefreshRates as Component } from "./RefreshRates";
import { refreshRates } from "../../core/refreshRates";
import { asCommand } from "~/shared/infrastructure/cqs";

export const RefreshRates = () =>
  Component({ useRefreshRates: asCommand(refreshRates, "refresh") });
