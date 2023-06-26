import type { RefreshRates } from "../ports.input";
import type {
  FetchRates,
  ReadConverter,
  SaveConverter,
  PublishRefreshed,
} from "../ports.output";

import { calculateQuote } from "../domain/calculateQuote";
import { lookupRate } from "../domain/lookupRate";

type Dependencies = {
  fetchRates: FetchRates;
  readConverter: ReadConverter;
  saveConverter: SaveConverter;
  publishRefreshed: PublishRefreshed;
};

export const createRefreshRates =
  ({
    fetchRates,
    readConverter,
    saveConverter,
    publishRefreshed,
  }: Dependencies): RefreshRates =>
  async () => {
    const rates = await fetchRates();
    const model = readConverter();

    const currentRate = lookupRate(rates, model.quoteCode);
    const quoteValue = calculateQuote(model.baseValue, currentRate);

    saveConverter({ rates, quoteValue });
    publishRefreshed(rates);
  };
