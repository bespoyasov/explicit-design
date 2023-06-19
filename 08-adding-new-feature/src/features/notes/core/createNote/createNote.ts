// Notice that we still watch over the types
// that we implement in the application core:
// the use case function implements the input port
// that is going to be used in the UI and by other code.

import type { CreateNote } from "../ports.input";
import { persistNote } from "../../infrastructure/persistence";
import { withAnalytics } from "../../infrastructure/analytics";

// The “composition” is performed right here, in this very file,
// and yet the modules are decoupled because of the initial splitting.
// We still can extract the use case function and make it independent.

export const createNote: CreateNote = withAnalytics(async (content: string) => {
  const draft = { content };
  await persistNote(draft);
});
