// Just an example.
// In reality, this type would be much more generic
// and would include various collections
// of additional arguments like e.g. `payload`.

export type ApiRequest<R> = (url: Url) => Promise<R>;

// “Analytics Service”:
export type SendEvent = (event: string, payload?: string) => Promise<void>;

// “Alert Monitor”:
export type CaptureError = (error: unknown) => Promise<void>;

// Persistence:
type PersistenceKey = string;
export type Persist = <T>(key: PersistenceKey, value: T) => void;
export type Retrieve = <T>(key: PersistenceKey) => Nullable<T>;

// The `T` type parameter might need a `Stringifiable` constraint,
// so that we only can save the data that can be serialized.
// However, for a sample app, I decided I didn't care =)
