import type { FetchRates } from "../../core/ports.output";
import { createFetchRates } from "./api";
import { get } from "~/services/network";

export const fetchRates: FetchRates = createFetchRates({ request: get });
