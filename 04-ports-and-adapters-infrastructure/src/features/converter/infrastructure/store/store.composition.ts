import type { ReadConverter, SaveConverter } from "../../core/ports.output";
import type {
  SelectBaseValue,
  SelectQuoteCode,
  SelectQuoteValue,
} from "../../core/ports.input";

import { StoreProvider, useStore } from "./store";

export const useStoreWriter: Provider<SaveConverter> = () => useStore().update;
export const useStoreReader: Provider<ReadConverter> = () => useStore().read;

export { StoreProvider };

// We also can “skip” the application core when reading data
// just because there's _no domain logic_ at all:

export const useValueBase: SelectBaseValue = () => useStore().value.baseValue;
export const useQuoteCode: SelectQuoteCode = () => useStore().value.quoteCode;
export const useValueQuote: SelectQuoteValue = () =>
  useStore().value.quoteValue;

// The “rule” that “everything must go through the app core”
// is more of a recommendation so we can break it if it's benefitial.
// (Frankly every rule is more of a recommendation, there are no universal laws.)
// So the infrastructure can actually implement the _input ports_
// as well as the _output ports_ if it can be used in the app.
