// Composition from the post series:
import { BaseValueInput } from "../BaseValueInput";
import { QuoteSelector } from "../QuoteSelector";
import { RefreshRates } from "../RefreshRates";

import { ErrorBoundary } from "~/shared/ui/ErrorBoundary";

// Added “behind the scene”:
import { CurrentQuoteValue } from "../CurrentQuoteValue";
import { Heading } from "../Heading";

import styles from "./Converter.module.css";

export function Converter() {
  return (
    <ErrorBoundary>
      <form className={styles.converter}>
        <Heading />

        <CurrentQuoteValue />
        <BaseValueInput />
        <QuoteSelector />
        <RefreshRates />
      </form>
    </ErrorBoundary>
  );
}
