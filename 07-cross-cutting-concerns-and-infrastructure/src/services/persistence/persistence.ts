import type { Persist, Retrieve } from "~/shared/kernel";

export const persist: Persist = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const retrieve: Retrieve = (key) => {
  const value = window.localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

// Again, we could also use “dependency baking”
// and partial application to make the testing easier.
// But since we've already covered this topic earlier,
// I decided to not cover this “service” with tests.
