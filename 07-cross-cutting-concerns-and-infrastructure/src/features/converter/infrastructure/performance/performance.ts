import type { RefreshRates } from "../../core/ports.input";

// Create a measurer that will measure the time
// it takes to execute a `RefreshRates` function.

export const createMeasurer =
  (perf: Performance) =>
  (fn: RefreshRates): RefreshRates =>
  async () => {
    const start = perf.now();
    await fn();
    const end = perf.now();
    console.log(`RefreshRates took ${end - start}ms.`);
  };

/**
 * We also could skip the “dependency baking”
 * and use the `performance` object right away like this:
 *
 * @example ```ts
 * export const withPerfMeasure =
 *   (fn: RefreshRates): RefreshRates =>
 *   async () => {
 *     const start = performance.now();
 *     await fn();
 *     const end = performance.now();
 *     console.log(`RefreshRates took ${end - start}ms.`);
 *   };
 * ```
 *
 * ...But for consistency let's keep it as “in the books”.
 */
