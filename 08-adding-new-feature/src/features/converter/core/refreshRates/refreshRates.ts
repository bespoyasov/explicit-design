import type { RefreshRates } from "../ports.input";
import type {
  CreateNoteAdapter,
  FetchRates,
  ReadConverter,
  SaveConverter,
} from "../ports.output";

import { calculateQuote } from "../domain/calculateQuote";
import { lookupRate } from "../domain/lookupRate";

type Dependencies = {
  fetchRates: FetchRates;
  readConverter: ReadConverter;
  saveConverter: SaveConverter;
  createNote: CreateNoteAdapter;
};

export const createRefreshRates =
  ({
    fetchRates,
    readConverter,
    saveConverter,
    createNote,
  }: Dependencies): RefreshRates =>
  async () => {
    const rates = await fetchRates();
    const model = readConverter();

    const currentRate = lookupRate(rates, model.quoteCode);
    const quoteValue = calculateQuote(model.baseValue, currentRate);

    saveConverter({ rates, quoteValue });
    createNote(rates);
  };
