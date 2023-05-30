// Just an example.
// In reality, this type would be much more generic
// and would include various collections
// of additional arguments like e.g. `payload`.

export type ApiRequest<R> = (url: Url) => Promise<R>;
