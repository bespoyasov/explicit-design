import type { UpdateBaseValue } from "../ports.input";
import { updateBaseValue } from "./updateBaseValue";

import { useCallback } from "react";
import { useStoreReader, useStoreWriter } from "../../infrastructure/store";

export const useUpdateBaseValue: Provider<UpdateBaseValue> = () => {
  const readConverter = useStoreReader();
  const saveConverter = useStoreWriter();

  return useCallback(
    (value) => updateBaseValue(value, { readConverter, saveConverter }),
    [readConverter, saveConverter]
  );
};
