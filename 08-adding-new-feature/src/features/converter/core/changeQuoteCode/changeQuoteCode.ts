import type { ChangeQuoteCode } from "../ports.input";
import type { ReadConverter, SaveConverter } from "../ports.output";

import { lookupRate } from "../domain/lookupRate";
import { calculateQuote } from "../domain/calculateQuote";

type Dependencies = {
  readConverter: ReadConverter;
  saveConverter: SaveConverter;
};

export const createChangeQuoteCode =
  ({ readConverter, saveConverter }: Dependencies): ChangeQuoteCode =>
  (quoteCode) => {
    const model = readConverter();

    const currentRate = lookupRate(model.rates, quoteCode);
    const quoteValue = calculateQuote(model.baseValue, currentRate);

    saveConverter({ quoteCode, quoteValue });
  };
