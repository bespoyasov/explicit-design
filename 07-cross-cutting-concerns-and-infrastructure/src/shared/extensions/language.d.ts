type Nullable<T> = T | null;
type Optional<T> = T | undefined;

type Unique<T> = T;
type List<T> = readonly T[];

type AsyncFn = (...args: unknown[]) => Promise<unknown>;
