import type { ApiRequest } from "~/shared/kernel";
import type { FetchRates } from "../../core/ports.output";

import type { RatesDTO } from "./api.serialization";
import { toDomain } from "./api.serialization";

type Dependencies = {
  request: ApiRequest<RatesDTO>;
};

export const createFetchRates =
  ({ request }: Dependencies): FetchRates =>
  async () => {
    const response = await request("/rates");
    const data = toDomain(response);
    return data;
  };
