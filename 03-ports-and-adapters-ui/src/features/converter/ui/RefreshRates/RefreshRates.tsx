import type { RefreshRates } from "../../core/ports.input";
import { Button } from "~/shared/ui/Button";

type RefreshRatesDeps = {
  useRefreshRates: () => {
    execute: RefreshRates;
    status: Status;
  };
};

export function RefreshRates({ useRefreshRates }: RefreshRatesDeps) {
  const { execute, status } = useRefreshRates();
  const pending = status.is === "pending";

  return (
    <Button type="button" onClick={execute} disabled={pending}>
      Refresh Rates
    </Button>
  );
}
