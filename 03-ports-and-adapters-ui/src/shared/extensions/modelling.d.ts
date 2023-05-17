type Fractional = number;
type LocalizedString = string;

// UI
type Selector<T> = () => T;
type Provider<T> = () => T;

// Async IO
type Status = { is: "idle" } | { is: "pending" };
