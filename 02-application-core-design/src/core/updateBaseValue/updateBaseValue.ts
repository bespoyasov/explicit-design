import type { UpdateBaseValue } from "../ports.input";
import type { ReadConverter, SaveConverter } from "../ports.output";

import { lookupRate } from "../domain/lookupRate";
import { calculateQuote } from "../domain/calculateQuote";
import { createBaseValue } from "../domain/createBaseValue";

type Dependencies = {
  readConverter: ReadConverter;
  saveConverter: SaveConverter;
};

const stub = {} as Dependencies;

export const updateBaseValue: UpdateBaseValue = (
  rawValue,
  { readConverter, saveConverter }: Dependencies = stub
) => {
  const model = readConverter();

  const baseValue = createBaseValue(rawValue);
  const currentRate = lookupRate(model.rates, model.quoteCode);
  const quoteValue = calculateQuote(baseValue, currentRate);

  saveConverter({ baseValue, quoteValue });
};
