import type { RatesDTO } from "./api.serialization";
import { createFetchRates } from "./api";

const stub = { RPC: "Test Value" } as unknown as RatesDTO;

const request = vi.fn(async () => stub);
const fetchRates = createFetchRates({ request });

afterAll(() => {
  vi.restoreAllMocks();
});

describe("when called", () => {
  it("sends a request to the `/rates` API endpoint", async () => {
    await fetchRates();
    expect(request).toHaveBeenCalledOnce();
    expect(request).toHaveBeenCalledWith("/rates");
  });

  it("transforms the response to the domain data model", async () => {
    const result = await fetchRates();
    expect(result).toEqual("Test Value");
  });
});
