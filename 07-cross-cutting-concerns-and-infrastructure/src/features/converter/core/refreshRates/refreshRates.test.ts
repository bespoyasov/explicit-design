import { converter, rates } from "~/shared/testing/data";
import { createRefreshRates } from "./refreshRates";

const fetchRates = async () => ({ ...rates });
const readConverter = () => ({ ...converter });
const saveConverter = vi.fn();

const refreshRates = createRefreshRates({
  fetchRates,
  readConverter,
  saveConverter,
});

describe("when called", () => {
  it("should recalculate the quote value using the rates from the API", async () => {
    await refreshRates();
    expect(saveConverter).toHaveBeenCalledWith({ quoteValue: 5, rates });
  });
});
