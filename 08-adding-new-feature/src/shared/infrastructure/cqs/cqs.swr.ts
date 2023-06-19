import { useState } from "react";
import useSWR from "swr";

type RequestId = List<Unique<string>>;

export const asCommand =
  <F extends AsyncFn>(command: F, requestId: RequestId): Provider<Command<F>> =>
  () => {
    const [run, setRun] = useState(false);
    const { data, error, isLoading } = useSWR(run ? requestId : null, command);

    const execute = (() => setRun(true)) as F;
    const status: Status = isLoading ? "pending" : !!error ? "failure" : "idle";
    const result = { is: status, data, error };

    return { execute, result };
  };
