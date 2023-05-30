import { createBaseValue } from "./createBaseValue";

describe("when given a number-like value", () => {
  const expected = 42;
  const cases = [42, -42, "42"];

  it.each(cases)("returns the domain base value", (value) => {
    const result = createBaseValue(value);
    expect(result).toEqual(expected);
  });
});

describe("when given a non-number value", () => {
  const cases = ["string", "42n", NaN, [], null, undefined, {}];

  it.each(cases)("returns 0 base value", (value) => {
    const result = createBaseValue(value as string | number);
    expect(result).toEqual(0);
  });
});
