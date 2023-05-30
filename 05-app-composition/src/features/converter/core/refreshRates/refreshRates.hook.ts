import type { RefreshRates } from "../ports.input";
import type { FetchRates, ReadConverter, SaveConverter } from "../ports.output";

import { calculateQuote } from "../domain/calculateQuote";
import { lookupRate } from "../domain/lookupRate";

// Alternatively, we can compose the whole use case just in hooks.
// Instead of passing “dependencies” into the `refreshRates` function in the runtime,
// we can “prepare” the `useRefreshRates` hook beforehand.

type Dependencies = {
  useFetchRates: Provider<FetchRates>;
  useConverter: ReadConverter;
  useSaveConverter: Provider<SaveConverter>;
};

// Use a factory function to create the hook.
// All the dependencies will be accessible inside its closure.

export const createHook =
  ({ useFetchRates, useConverter, useSaveConverter }: Dependencies) =>
  (): RefreshRates => {
    // Access the services inside the hooks' function body:
    const fetchRates = useFetchRates();
    const update = useSaveConverter();
    const model = useConverter();

    // Return a function that implements
    //  the `RefreshRates` output port:
    return async () => {
      const rates = await fetchRates();

      const currentRate = lookupRate(rates, model.quoteCode);
      const quoteValue = calculateQuote(model.baseValue, currentRate);

      update({ rates, quoteValue });
    };
  };

// In the hook's composition, we pass all its dependencies,
// to “bake them into” the hook function.
// This way, the runtime will be free from any use case composition.
// We will loose the “independence from React” this way
// but gain the performance and convenience of usage:

// export const useRefreshRates = createHook({
//   useFetchRates: () => fetchRates,
//   useConverter: useConverter,
//   useSaveConverter: useStoreWriter,
// });

// Even more so, if we're okay with mocking
// the hook's dependencies when testing,
// we can remove the factory function,
// make the composition “implicit”,
// and just import all the dependencies
// directly in the hook function:

// export const useRefreshRates = (): RefreshRates => {
//   const fetchRates = useFetchRates();
//   const update = useSaveConverter();
//   const model = useConverter();

//   return async () => {...};
// };
