import type { PublishRefreshed } from "../../core/ports.output";
import { createPublisher } from "./bus";
import { publishEvent } from "~/shared/infrastructure/bus";

export const publishRefreshed: PublishRefreshed = createPublisher(publishEvent);
