import type { BaseValue, ExchangeRate, QuoteValue } from "../types";
import { calculateQuote } from "./calculateQuote";

type TestCase = {
  base: BaseValue;
  rate: ExchangeRate;
  expected: QuoteValue;
};

describe("when given a base value and the current rate", () => {
  it.each<TestCase>([
    { base: 10, rate: 1, expected: 10 },
    { base: 10, rate: 2, expected: 20 },
    { base: 10, rate: 4.2, expected: 42 },
  ])("returns the correct quote value", ({ base, rate, expected }) =>
    expect(calculateQuote(base, rate)).toEqual(expected)
  );

  it.each<TestCase>([
    { base: 10, rate: 1.12, expected: 11.2 },
    { base: 10, rate: 0.72, expected: 7.2 },
  ])(
    "should have a precision of two decimal places",
    ({ base, rate, expected }) =>
      expect(calculateQuote(base, rate)).toEqual(expected)
  );
});
