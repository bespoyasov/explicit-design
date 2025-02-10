import { useState } from "react";
import useSWR from "swr";

export const asCommand =
  <F extends AsyncFn>(command: F, _requestId: string): Provider<Command<F>> =>
    () => {
      const [requestId, setRequestId] = useState(_requestId);
      console.log(`Command with requestId: ${requestId}`);
      const { data, error, isLoading } = useSWR(requestId, command);

      const execute = (() => {
        const recycleId = `${_requestId}_${Date.now()}`;
        console.log(`Recycling requestId: ${recycleId}`);
        setRequestId(recycleId)
      }) as F;
      const status: Status = isLoading ? "pending" : !!error ? "failure" : "idle";
      const result = { is: status, data, error };
      console.log(`Command result:`, result);

      return { execute, result };
    };
