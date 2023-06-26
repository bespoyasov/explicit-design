export type CreateNote = (content: string) => Promise<void>;

// So far, we're going to call this port from the UI
// _and_ from the other feature directly.
// However, it isn't a good approach because of high coupling.
// Instead, in the future we'll decouple the features using an event bus.
