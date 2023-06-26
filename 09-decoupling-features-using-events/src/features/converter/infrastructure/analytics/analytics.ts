import { sendEvent } from "~/services/analytics";
import type { SendConverterEvent } from "../../core/ports.output";

export const sendRefreshEvent: SendConverterEvent = () =>
  sendEvent("RATES_REFRESHED");

// You could also split the logic
// and the composition, if needed,
// e.g. for easier testing:
//
// export const createSender =
//   (sendEvent: SendEvent): SendConverterEvent =>
//   () => sendEvent("RATES_REFRESHED");
//
// export const sendConverterEvent = createSender(sendEvent)
