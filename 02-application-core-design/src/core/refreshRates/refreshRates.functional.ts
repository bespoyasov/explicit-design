import type { Converter, ExchangeRates } from "../types";

import { calculateQuote } from "../domain/calculateQuote";
import { lookupRate } from "../domain/lookupRate";

// In a pure functional approach,
// we'd need to extract all the logic
// into a pure function first:

export const refreshRates = (
  model: Converter,
  rates: ExchangeRates
): Converter => {
  const currentRate = lookupRate(rates, model.quoteCode);
  const quoteValue = calculateQuote(model.baseValue, currentRate);
  return { ...model, rates, quoteValue };
};

// ...And push _all_ the side effects to the edge of the app.
// So basically the “injection” of services and the “use case composition”
// would be the same thing:

const refreshRatesComposition = async (): AsyncIO => {
  // Impure section:
  // - get the data from impure world;
  // - bind to concrete services,
  //   a.k.a “perform composition”.
  const model = readConverter();
  const rates = await fetchRates();

  // Pure section:
  // - run data transformations;
  // - don't “depend” on anything;
  // - keep the logic free from any side effects;
  // - test all transformations as pure functions.
  const updated = refreshRates(model, rates);

  // Impure section:
  // - save the data in impure world;
  // - render any required side effects;
  // - bind to concrete services.
  saveConverter(updated);
  triggerRerender();
};

// Conceptually, this means that the `refreshRates` function
// is an “abstract implementation” because it solely depends
// on the data types and other pure functions (from the domain).
// The `refreshRatesComposition` is the composition of the use case,
// the “manual DI”, if you will.

// With this approach, we wouldn't be testing
// the `refreshRatesComposition` function at all
// because all the logic is located in `refreshRates`
// and this is the function we would need to cover with unit tests.

// (The `refreshRatesComposition` function
//  might require some integration tests though.)

// However, as interesting this approach might seem,
// I haven't had a TypeScript project that would have
// _convenient_ and _reliable_ infrastructure for this approach.
// It requires the whole project to be purely functional
// (like using fp/ts and following all the strict rules)
// and becomes restrictive and difficult to onboard new people
// without the functional background.
