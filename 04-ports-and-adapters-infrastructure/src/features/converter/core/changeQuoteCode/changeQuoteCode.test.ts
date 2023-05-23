import { converter } from "~/shared/testing/data";
import { changeQuoteCode } from "./changeQuoteCode";

const readConverter = () => ({ ...converter });
const saveConverter = vi.fn();
const dependencies = {
  readConverter,
  saveConverter,
};

beforeEach(() => {
  vi.resetAllMocks();
});

afterAll(() => {
  vi.restoreAllMocks();
});

describe("when given a new quote code", () => {
  it("changes the quote code in the model", () => {
    changeQuoteCode("DRG", dependencies);
    expect(saveConverter).toHaveBeenCalledOnce();
    expect(saveConverter.mock.lastCall?.at(-1).quoteCode).toBe("DRG");
  });

  it("recalculates quote according to the new code and current rates", () => {
    changeQuoteCode("DRG", dependencies);
    expect(saveConverter).toHaveBeenCalledOnce();
    expect(saveConverter.mock.lastCall?.at(-1).quoteValue).toBe(2.5);
  });
});
