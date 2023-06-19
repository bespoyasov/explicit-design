import type { SavedNote, DraftNote } from "./types";

export type PersistNote = (note: DraftNote) => Promise<SavedNote>;

// We might need to move the `ExchangeRate` type
// into shared kernel to have access to it here as well.
// Then, instead of just `Fractional`, we could use `ExchangeRate`:
