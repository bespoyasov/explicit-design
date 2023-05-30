import type { RefreshRates } from "../ports.input";
import { refreshRates } from "./refreshRates";

import { useCallback } from "react";
import { useStoreReader, useStoreWriter } from "../../infrastructure/store";
import { fetchRates } from "../../infrastructure/api";

export const useRefreshRates: Provider<RefreshRates> = () => {
  const readConverter = useStoreReader();
  const saveConverter = useStoreWriter();

  return useCallback(
    () =>
      refreshRates({
        fetchRates,
        readConverter,
        saveConverter,
      }),

    // Only need to keep track of these,
    // because the `fetchRates` function
    // won't change by definition from its declaration.
    [readConverter, saveConverter]
  );
};
