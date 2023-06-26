import type { SendEvent } from "~/shared/kernel";

export const sendEvent: SendEvent = async (event, payload) => {
  const dateTime = new Date().toISOString();
  const eventData = payload ? `Additional data: ${payload}` : "";
  const message = `[Analytics ${dateTime}]: Captured event “${event}”. ${eventData}`;
  console.log(message);
};
