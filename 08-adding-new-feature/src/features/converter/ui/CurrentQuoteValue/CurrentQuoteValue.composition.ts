import { CurrentQuoteValue as Component } from "./CurrentQuoteValue";

import {
  useBaseValue,
  useQuoteCode,
  useQuoteValue,
} from "../../infrastructure/store";

export const CurrentQuoteValue = () =>
  Component({ useBaseValue, useQuoteCode, useQuoteValue });
