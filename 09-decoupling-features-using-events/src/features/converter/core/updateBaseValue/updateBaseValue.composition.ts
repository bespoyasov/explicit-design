import type { UpdateBaseValue } from "../ports.input";
import { createUpdateBaseValue } from "./updateBaseValue";
import { readConverter, saveConverter } from "../../infrastructure/store";

export const updateBaseValue: UpdateBaseValue = createUpdateBaseValue({
  readConverter,
  saveConverter,
});
