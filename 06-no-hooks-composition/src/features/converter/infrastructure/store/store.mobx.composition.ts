import type { ReadConverter, SaveConverter } from "../../core/ports.output";

import { makeAutoObservable } from "mobx";
import { ConverterViewModel } from "./store.mobx";
import {
  SelectBaseValue,
  SelectQuoteCode,
  SelectQuoteValue,
} from "../../core/ports.input";

// Or put the `makeAutoObservable` into the view-model itself.
// We split the just to show the boundaries between the code
// and its composition but there's nothing preventing us
// from mix them if we keep the boundaries in mind.

const converter = makeAutoObservable(new ConverterViewModel());

export const readConverter: ReadConverter = () => converter;
export const saveConverter: SaveConverter = converter.update;

// Or just use the values right away without even using hooks.

export const useBaseValue: SelectBaseValue = () => converter.baseValue;
export const useQuoteCode: SelectQuoteCode = () => converter.quoteCode;
export const useQuoteValue: SelectQuoteValue = () => converter.quoteValue;

/**
 * For an example of component composition,
 * @see BaseValueInput.mobx.composition.tsx
 */
