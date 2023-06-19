import { converter, rates } from "~/shared/testing/data";
import { createRefreshRates } from "./refreshRates";

const fetchRates = async () => ({ ...rates });
const readConverter = () => ({ ...converter });
const saveConverter = vi.fn();
const createNote = vi.fn();

const refreshRates = createRefreshRates({
  fetchRates,
  readConverter,
  saveConverter,
  createNote,
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

  it("calls a note creations out of the fresh rates data", async () => {
    await refreshRates();
    expect(createNote).toHaveBeenCalledWith(rates);
  });
});
