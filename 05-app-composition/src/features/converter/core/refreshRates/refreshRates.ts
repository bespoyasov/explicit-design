import type { RefreshRates } from "../ports.input";
import type { FetchRates, ReadConverter, SaveConverter } from "../ports.output";

import { calculateQuote } from "../domain/calculateQuote";
import { lookupRate } from "../domain/lookupRate";

// Declare the dependencies needed for the use case.
// We specify the type here explicitly but it isn't necessary.
// If we have clear communication, we can skip this step
// but for clarity of the tutorial, I decided to make everything explicit.

type Dependencies = {
  fetchRates: FetchRates;
  readConverter: ReadConverter;
  saveConverter: SaveConverter;
};

// So far, we haven't implemented the output ports (services)
// so we can create a “stub” so that the TypeScript compiler
// doesn't scream at as that we haven't provided them.
// We'll fix that later when composing the real services.

const stub = {} as Dependencies;

// When implementing the use case, we depend
// on the output port types that we declared earlier.
// This way we decouple ourselves from the specific implementation
// and make it easier to postpone decisions about the infrastructure.

// Also, notice that we still implement the `RefreshRates` input port
// even though we “depend” on a bunch of services.
// We will address this issue later on but for now we want to make sure
// the that contract of `RefreshRates` is always fulfilled
// when it comes to the implementation because the UI will depend on it.

export const refreshRates: RefreshRates = async ({
  fetchRates,
  readConverter,
  saveConverter,
}: Dependencies = stub) => {
  const rates = await fetchRates();
  const model = readConverter();

  // Follow the “Impureim Sandwich” approach
  // and keep the data transformations pure.
  // Use services only to get data from
  // and save the result to the impure world.

  const currentRate = lookupRate(rates, model.quoteCode);
  const quoteValue = calculateQuote(model.baseValue, currentRate);

  saveConverter({ rates, quoteValue });
};
