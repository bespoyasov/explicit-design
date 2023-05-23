import { converter } from "~/shared/testing/data";
import { updateBaseValue } from "./updateBaseValue";

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

describe("when given a valid base value update", () => {
  it.each([42, "42"])(
    "recalculates the model according to the new value and current rates",
    (value) => {
      updateBaseValue(value, dependencies);

      expect(saveConverter).toHaveBeenCalledWith({
        baseValue: 42,
        quoteValue: 21,
      });
    }
  );
});

describe("when given an invalid base value update", () => {
  it.each(["invalid", "42n"])(
    "recalculates the quote using 0 as the base value",
    (value) => {
      updateBaseValue(value, dependencies);

      expect(saveConverter).toHaveBeenCalledWith({
        baseValue: 0,
        quoteValue: 0,
      });
    }
  );
});
