import type {
  SelectBaseValue,
  SelectQuoteCode,
  SelectQuoteValue,
} from "../../core/ports.input";

import styles from "./CurrentQuoteValue.module.css";

type CurrentQuoteValueDeps = {
  useBaseValue: SelectBaseValue;
  useQuoteValue: SelectQuoteValue;
  useQuoteCode: SelectQuoteCode;
};

export function CurrentQuoteValue({
  useBaseValue,
  useQuoteValue,
  useQuoteCode,
}: CurrentQuoteValueDeps) {
  const baseValue = useBaseValue();
  const quoteValue = useQuoteValue();
  const quoteCode = useQuoteCode();

  return (
    <p className={styles.value}>
      {baseValue} RPC = {quoteValue} {quoteCode}
    </p>
  );
}
