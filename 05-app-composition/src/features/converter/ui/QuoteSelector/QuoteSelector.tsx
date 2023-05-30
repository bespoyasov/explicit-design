import type { QuoteCurrencyCode } from "../../core/types";
import type { ChangeQuoteCode, SelectQuoteCode } from "../../core/ports.input";
import { options } from "./QuoteSelector.options";

import { ChangeEvent, useCallback } from "react";
import { Select } from "~/shared/ui/Select";

type QuoteSelectorDeps = {
  useChangeQuoteCode: Provider<ChangeQuoteCode>;
  useQuoteCode: SelectQuoteCode;
};

export function QuoteSelector({
  useChangeQuoteCode,
  useQuoteCode,
}: QuoteSelectorDeps) {
  const selected = useQuoteCode();
  const changeQuoteCode = useChangeQuoteCode();

  const onChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) =>
      changeQuoteCode(e.currentTarget.value as QuoteCurrencyCode),
    []
  );

  return <Select options={options} value={selected} onChange={onChange} />;
}
