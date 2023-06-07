import type { SelectBaseValue, UpdateBaseValue } from "../../core/ports.input";
import { Input } from "~/shared/ui/Input";

import type { ChangeEvent } from "react";
import { useCallback } from "react";

type BaseValueInputDeps = {
  updateBaseValue: UpdateBaseValue;
  useBaseValue: SelectBaseValue;
};

export function BaseValueInput({
  updateBaseValue,
  useBaseValue,
}: BaseValueInputDeps) {
  const value = useBaseValue();
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      updateBaseValue(e.currentTarget.valueAsNumber),
    []
  );

  return (
    <label>
      <span>Value in RPC (Republic Credits):</span>
      <Input type="number" min={0} step={1} value={value} onChange={onChange} />
    </label>
  );
}
