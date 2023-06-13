import type { ChangeQuoteCode } from "../ports.input";
import { createChangeQuoteCode } from "./changeQuoteCode";
import { readConverter, saveConverter } from "../../infrastructure/store";

export const changeQuoteCode: ChangeQuoteCode = createChangeQuoteCode({
  readConverter,
  saveConverter,
});
