import { QuoteSelector as Component } from "./QuoteSelector";
import { changeQuoteCode } from "../../core/changeQuoteCode";
import { useQuoteCode } from "../../infrastructure/store";

export const QuoteSelector = () => Component({ changeQuoteCode, useQuoteCode });
