import type { ChangeQuoteCode } from "../ports.input";
import { changeQuoteCode } from "./changeQuoteCode";

import { useCallback } from "react";
import { useStoreReader, useStoreWriter } from "../../infrastructure/store";

export const useChangeQuoteCode: Provider<ChangeQuoteCode> = () => {
  const readConverter = useStoreReader();
  const saveConverter = useStoreWriter();

  return useCallback(
    (code) => changeQuoteCode(code, { readConverter, saveConverter }),
    [readConverter, saveConverter]
  );
};
