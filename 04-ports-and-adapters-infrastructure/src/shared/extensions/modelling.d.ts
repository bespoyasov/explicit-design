type Fractional = number;
type LocalizedString = string;

// UI
type Selector<T> = () => T;
type Provider<T> = () => T;

// Network & API
type Url = string;

// Async IO
type Status = { is: "idle" } | { is: "pending" };
