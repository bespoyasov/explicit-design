import { useCallback, useState } from "react";

type FieldElement = HTMLInputElement | HTMLTextAreaElement;
type UpdateField = React.ChangeEventHandler<FieldElement>;
type ClearField = () => void;

export function useField<T extends string>(
  initial: T
): [T, UpdateField, ClearField] {
  const [value, setValue] = useState<T>(initial);

  const clearValue: ClearField = useCallback(() => setValue(initial), []);
  const updateValue: UpdateField = useCallback(
    (e) => setValue(e.currentTarget.value as T),
    []
  );

  return [value, updateValue, clearValue];
}
