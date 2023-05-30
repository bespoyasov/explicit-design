import { RefreshRates as Component } from "./RefreshRates";
import { useRefreshRates } from "../../core/refreshRates";
import { asCommand } from "~/shared/infrastructure/cqs";

export const RefreshRates = () =>
  Component({ useRefreshRates: asCommand(useRefreshRates) });
