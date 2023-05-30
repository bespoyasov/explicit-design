import { converter, rates } from "~/shared/testing/data";
import { refreshRates } from "./refreshRates";

const fetchRates = async () => ({ ...rates });
const readConverter = () => ({ ...converter });
const saveConverter = vi.fn();

const dependencies = {
  fetchRates,
  readConverter,
  saveConverter,
};

describe("when called", () => {
  it("should recalculate the quote value using the rates from the API", async () => {
    await refreshRates(dependencies);
    expect(saveConverter).toHaveBeenCalledWith({ quoteValue: 5, rates });
  });
});
