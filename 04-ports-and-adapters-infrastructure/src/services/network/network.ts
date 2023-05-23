const config = { base: "http://localhost:3000/" } as const;

export async function get<T>(url: Url): Promise<T> {
  const absolute = new URL(url, config.base);
  const response = await fetch(absolute);
  if (!response.ok) throw new Error("Failed to perform the request.");

  return await response.json();
}

// This module can be implemented in various ways,
// using “dependency baking” or mocking `fetch` in tests,
// using classes or functions,
// using `fetch` or various libraries for network calls.
// It doesn't make a difference for the other code
// as long as the `ApiRequest<T>` interface is implemented properly.

// In fact, we're going to extend our infrastructure
// in one of the following posts to see how this distinction
// can help with keeping the code base decoupled.

// Also, sorry for not covering the `get` function with tests,
// I was kinda lazy to do it :–)
