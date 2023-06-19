import { render, act, fireEvent, screen } from "@testing-library/react";
import { RefreshRates } from "./RefreshRates";

const execute = vi.fn();
const idle: Result = { is: "idle" };
const pending: Result = { is: "pending" };
const failure: Result = { is: "failure", error: new Error("Test error.") };

describe("when in idle state", () => {
  it("returns an enabled button", () => {
    const useRefreshRates = () => ({ result: idle, execute });
    render(<RefreshRates useRefreshRates={useRefreshRates} />);

    const button = screen.getByRole<HTMLButtonElement>("button");

    expect(button.disabled).toEqual(false);
  });
});

describe("when in pending state", () => {
  it("returns a disabled button", () => {
    const useRefreshRates = () => ({ result: pending, execute });
    render(<RefreshRates useRefreshRates={useRefreshRates} />);

    const button = screen.getByRole<HTMLButtonElement>("button");

    expect(button.disabled).toEqual(true);
  });
});

describe("when in failure state", () => {
  it("returns a message error", () => {
    const useRefreshRates = () => ({ result: failure, execute });
    render(<RefreshRates useRefreshRates={useRefreshRates} />);

    const button = screen.getByText(/Test error./);

    expect(button).toBeDefined();
  });
});

describe("when the button is clicked", () => {
  it("triggers the refresh rates action", () => {
    const useRefreshRates = () => ({ result: idle, execute });
    render(<RefreshRates useRefreshRates={useRefreshRates} />);

    const button = screen.getByRole<HTMLButtonElement>("button");
    act(() => fireEvent.click(button));

    expect(execute).toHaveBeenCalledOnce();
  });
});
