import type { Converter, ExchangeRates } from "../types";

import { calculateQuote } from "../domain/calculateQuote";
import { lookupRate } from "../domain/lookupRate";

// In a pure functional approach, we'd need
// to extract all the logic into a pure function:

export const refreshRates = (
  model: Converter,
  rates: ExchangeRates
): Converter => {
  const currentRate = lookupRate(rates, model.quoteCode);
  const quoteValue = calculateQuote(model.baseValue, currentRate);
  return { ...model, rates, quoteValue };
};

// ...And push all the side effects to the edge of the app.
// So basically the “injection” of services and the “use case composition”
// would be the same thing:

const refreshRatesComposition = async (): AsyncIO => {
  // Impure section:
  // - bind to concrete services;
  // - get the data from impure world.
  const model = readConverter();
  const rates = await fetchRates();

  // Pure section:
  // - run data transformations;
  // - don't “depend” on anything;
  // - keep the logic pure.
  const updated = refreshRates(model, rates);

  // Impure section:
  // - save the data in impure world;
  // - bind to concrete services.
  saveConverter(updated);
};

// Conceptually, this means that only the `refreshRates` function
// is an “abstract implementation” because it solely depends on the data types
// and other pure functions (from the domain).
// The `refreshRatesComposition` is the manual DI.

// With this approach, we wouldn't be testing the `refreshRatesComposition` function
// because all the logic is in `refreshRates` and it's the thing we should test.

// However, as interesting it might seem,
// I haven't had enough successful implementation of this in TypeScript.
// It requires the whole project to be purely functional
// (like using fp/ts and following all the strict rules)
// and becomes restrictive, difficult to enforce and onboard new people.
