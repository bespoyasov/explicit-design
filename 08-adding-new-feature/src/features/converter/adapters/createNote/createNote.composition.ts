import { createAdapter } from "./createNote";
import { createNote as callFeature } from "~/features/notes/core/createNote";

export const createNote = createAdapter(callFeature);
