import type { QuoteCurrencyCode } from "../../core/types";

import { render, act, fireEvent, screen } from "@testing-library/react";
import { QuoteSelector } from "./QuoteSelector";

const changeQuoteCode = vi.fn();
const useQuoteCode = () => "DRG" as QuoteCurrencyCode;
const dependencies = {
  changeQuoteCode,
  useQuoteCode,
};

describe("when rendered", () => {
  it("shows a selector with a currently selected quote currency", () => {
    render(<QuoteSelector {...dependencies} />);

    const { selectedOptions } = screen.getByRole<HTMLSelectElement>("combobox");

    expect(selectedOptions).toHaveLength(1);
    expect(selectedOptions[0].value).toEqual("DRG");
  });
});

describe("when selected another option", () => {
  it("triggers the change quote currency action", () => {
    render(<QuoteSelector {...dependencies} />);
    const select = screen.getByRole<HTMLSelectElement>("combobox");

    act(() => fireEvent.change(select, { target: { value: "ZKL" } }));

    expect(changeQuoteCode).toHaveBeenCalledOnce();
    expect(changeQuoteCode).toHaveBeenCalledWith("ZKL");
  });
});
