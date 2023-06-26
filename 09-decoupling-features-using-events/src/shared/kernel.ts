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

// Message Bus:
export type InternalEvent =
  "RatesRefreshed" /* | 'NoteCreated' | 'SessionExpired' | etc */;

type EventPayload = string;
type EventHandler = (data: EventPayload) => void;

export type PublishEvent = (event: InternalEvent, data: EventPayload) => void;
export type SubscribeTo = (event: InternalEvent, handler: EventHandler) => void;
export type Unsubscribe = (event: InternalEvent, handler: EventHandler) => void;

// The `EventPayload` type can also be generic
// but then it might need to be constrained as `Stringifiable`,
// so that the events themselves are serializable.
// Here, for simplicity, we just make it `string`.
