import type { PublishEvent } from "~/shared/kernel";
import type { PublishRefreshed } from "../../core/ports.output";

export const createPublisher =
  (publish: PublishEvent): PublishRefreshed =>
  (rates) => {
    const noteContent = JSON.stringify(rates, null, 2);
    publish("RatesRefreshed", noteContent);
  };
