type Fractional = number;
type LocalizedString = string;

// UI
type Selector<T> = () => T;
type Provider<T> = () => T;

// Network & API
type Url = string;

// Async IO
type Command<F extends AsyncFn> = {
  execute: F;
  result: Result;
};

type Status = Result["is"];
type Result =
  | { is: "idle" }
  | { is: "pending" }
  | { is: "failure"; error: Error };

/**
 * The `Result` can be generic to include
 * the return type of the async command or query.
 *
 * In that case the `Command` interface would probably
 * need to be split into `Query` and `Command`
 * to distinguish between the two.
 */
