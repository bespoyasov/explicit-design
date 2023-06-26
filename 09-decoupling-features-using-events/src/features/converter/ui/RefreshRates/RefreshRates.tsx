import type { RefreshRates } from "../../core/ports.input";
import { Button } from "~/shared/ui/Button";

type RefreshRatesDeps = {
  useRefreshRates: Provider<Command<RefreshRates>>;
};

export function RefreshRates({ useRefreshRates }: RefreshRatesDeps) {
  const { execute, result } = useRefreshRates();
  const pending = result.is === "pending";
  const failure = result.is === "failure";

  return (
    <>
      <Button type="button" onClick={execute} disabled={pending}>
        Refresh Rates
      </Button>

      {failure && <span>{result.error.message}</span>}
    </>
  );
}
