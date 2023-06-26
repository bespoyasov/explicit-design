import { createPublisher } from "./bus";
import { rates } from "~/shared/testing/data";

const emitter = vi.fn();
const publish = createPublisher(emitter);

describe("when called", () => {
  it("publishes the `RatesRefreshed` event", () => {
    publish(rates);
    expect(emitter).toHaveBeenCalledOnce();
  });

  it.todo("sends the stringified rates as the payload");
});
