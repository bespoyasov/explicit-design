// Notice that we still watch over the types
// that we implement in the infrastructure layer:
// the persistence function implements the output port
// that is declared and is going to be used by the app core.

import type { NoteCollection } from "../../core/types";
import type { PersistNote } from "../../core/ports.output";

import { nanoid } from "nanoid";
import { persist, retrieve } from "~/services/persistence";

const persistenceKey = "converter-app:notes";

export const persistNote: PersistNote = async (draft) => {
  // Again, we hard-wire to the specific libraries and service implementations
  // but it is still reversible later if we decide that this feature is to stay.

  // Imaging, the ID is assigned by the persistence service:
  // API server, Indexed DB, or whatever:
  const id = nanoid();
  const note = { ...draft, id };

  const notes = retrieve<NoteCollection>(persistenceKey) ?? [];
  persist(persistenceKey, [...notes, note]);

  return note;
};
