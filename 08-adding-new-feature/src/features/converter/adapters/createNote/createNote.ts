import type { CreateNoteAdapter } from "../../core/ports.output";
import type { CreateNote } from "~/features/notes/core/ports.input";

export const createAdapter =
  (callFeature: CreateNote): CreateNoteAdapter =>
  (rates) => {
    const noteContent = JSON.stringify(rates, null, 2);
    callFeature(noteContent);
  };
