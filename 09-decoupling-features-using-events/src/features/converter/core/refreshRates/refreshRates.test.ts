import { converter, rates } from "~/shared/testing/data";
import { createRefreshRates } from "./refreshRates";

const fetchRates = async () => ({ ...rates });
const readConverter = () => ({ ...converter });
const saveConverter = vi.fn();
const publishRefreshed = vi.fn();

const refreshRates = createRefreshRates({
  fetchRates,
  readConverter,
  saveConverter,
  publishRefreshed,
});

afterEach(() => {
  vi.resetAllMocks();
});

afterAll(() => {
  vi.restoreAllMocks();
});

describe("when called", () => {
  it("should recalculate the quote value using the rates from the API", async () => {
    await refreshRates();
    expect(saveConverter).toHaveBeenCalledWith({ quoteValue: 5, rates });
  });

  it("calls a message bus with the rates refreshed event", async () => {
    await refreshRates();
    expect(publishRefreshed).toHaveBeenCalledWith(rates);
  });
});
