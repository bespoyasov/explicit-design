import type { ReadConverter, SaveConverter } from "../../core/ports.output";
import type {
  SelectBaseValue,
  SelectQuoteCode,
  SelectQuoteValue,
} from "../../core/ports.input";

import type { PropsWithChildren } from "react";
import { createStore, useAtomValue, Provider } from "jotai";

import {
  baseValue$,
  quoteValue$,
  quoteCode$,
  getConverter$,
  setConverter$,
} from "./store.jotai";

const store = createStore();

// Don't forget to compose provider
// onto the `Converter` component
// if using this store.

export const StoreProvider = ({ children }: PropsWithChildren) => (
  <Provider store={store}>{children}</Provider>
);

export const readConverter: ReadConverter = () => store.get(getConverter$);
export const saveConverter: SaveConverter = (patch) =>
  store.set(setConverter$, patch);

export const useValueBase: SelectBaseValue = () => useAtomValue(baseValue$);
export const useValueQuote: SelectQuoteValue = () => useAtomValue(quoteValue$);
export const useQuoteCode: SelectQuoteCode = () => useAtomValue(quoteCode$);
