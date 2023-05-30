import { QuoteSelector as Component } from "./QuoteSelector";
import { useChangeQuoteCode } from "../../core/changeQuoteCode";
import { useQuoteCode } from "../../infrastructure/store";

export const QuoteSelector = () =>
  Component({ useChangeQuoteCode, useQuoteCode });
