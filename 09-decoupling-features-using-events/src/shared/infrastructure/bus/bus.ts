import type {
  InternalEvent,
  PublishEvent,
  SubscribeTo,
  Unsubscribe,
} from "~/shared/kernel";

import mitt from "mitt";

// This is basically a singleton
// based on the module's scope:
const emitter = mitt<Record<InternalEvent, Optional<string>>>();

export const publishEvent: PublishEvent = emitter.emit;
export const subscribeTo: SubscribeTo = emitter.on;
export const unsubscribeFrom: Unsubscribe = emitter.off;
