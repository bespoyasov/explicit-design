import { useState } from "react";

export const asCommand =
  <F extends AsyncFn>(command: F): Provider<Command<F>> =>
  () => {
    const [status, setStatus] = useState<Status>("idle");
    const [error, setError] = useState<Nullable<Error>>(null);

    const execute = (async () => {
      setStatus("pending");
      setError(null);

      try {
        await command();
        setStatus("idle");
      } catch (error) {
        setError(error as Error);
        setStatus("failure");
      }
    }) as F;

    // Sorry for using `as` cast and not typing it properly.
    // I was lazy to create a whole generic CQS library
    // for a post series with an experimental example app :–)

    const result =
      status === "failure" ? { is: status, error: error! } : { is: status };

    return { result, execute };
  };

// And yup, such “library” code must be tested
// even more thoroughly than the “usual production” code.
// However, as you probably suspect by this moment
// I was kinda lazy to do that just to show the point :–)
