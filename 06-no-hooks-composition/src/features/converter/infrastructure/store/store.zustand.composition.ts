import type { ReadConverter, SaveConverter } from "../../core/ports.output";
import type {
  SelectBaseValue,
  SelectQuoteCode,
  SelectQuoteValue,
} from "../../core/ports.input";

import { converter } from "./store.zustand";
import { useStore } from "zustand";

export const readConverter: ReadConverter = converter.getState;
export const saveConverter: SaveConverter = converter.setState;

export const useBaseValue: SelectBaseValue = () =>
  useStore(converter, (vm) => vm.baseValue);

export const useQuoteCode: SelectQuoteCode = () =>
  useStore(converter, (vm) => vm.quoteCode);

export const useQuoteValue: SelectQuoteValue = () =>
  useStore(converter, (vm) => vm.quoteValue);
