import type { QuoteCurrencyCode } from "../../core/types";
import type { ChangeQuoteCode, SelectQuoteCode } from "../../core/ports.input";
import { options } from "./QuoteSelector.options";

import { ChangeEvent, useCallback } from "react";
import { Select } from "~/shared/ui/Select";

type QuoteSelectorDeps = {
  changeQuoteCode: ChangeQuoteCode;
  useQuoteCode: SelectQuoteCode;
};

export function QuoteSelector({
  changeQuoteCode,
  useQuoteCode,
}: QuoteSelectorDeps) {
  const selected = useQuoteCode();
  const onChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) =>
      changeQuoteCode(e.currentTarget.value as QuoteCurrencyCode),
    []
  );

  return <Select options={options} value={selected} onChange={onChange} />;
}
