import type { UpdateBaseValue } from "../ports.input";
import type { ReadConverter, SaveConverter } from "../ports.output";

import { lookupRate } from "../domain/lookupRate";
import { calculateQuote } from "../domain/calculateQuote";
import { createBaseValue } from "../domain/createBaseValue";

type Dependencies = {
  readConverter: ReadConverter;
  saveConverter: SaveConverter;
};

export const createUpdateBaseValue =
  ({ readConverter, saveConverter }: Dependencies): UpdateBaseValue =>
  (rawValue) => {
    const model = readConverter();

    const baseValue = createBaseValue(rawValue);
    const currentRate = lookupRate(model.rates, model.quoteCode);
    const quoteValue = calculateQuote(baseValue, currentRate);

    saveConverter({ baseValue, quoteValue });
  };
