import type { CreateNote } from "../../core/ports.input";
import { sendEvent } from "~/services/analytics";

export const withAnalytics =
  (fn: CreateNote): CreateNote =>
  async (content) => {
    sendEvent("NOTE_CREATED", `Content size of: ${content.length}`);
    return await fn(content);
  };
