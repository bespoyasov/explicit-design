import { render, act, fireEvent, screen } from "@testing-library/react";
import { RefreshRates } from "./RefreshRates";

const execute = vi.fn();
const idle: Status = { is: "idle" };
const pending: Status = { is: "pending" };

describe("when in idle state", () => {
  it("returns an enabled button", () => {
    const useRefreshRates = () => ({ status: idle, execute });
    render(<RefreshRates useRefreshRates={useRefreshRates} />);

    const button = screen.getByRole<HTMLButtonElement>("button");

    expect(button.disabled).toEqual(false);
  });
});

describe("when in pending state", () => {
  it("returns a disabled button", () => {
    const useRefreshRates = () => ({ status: pending, execute });
    render(<RefreshRates useRefreshRates={useRefreshRates} />);

    const button = screen.getByRole<HTMLButtonElement>("button");

    expect(button.disabled).toEqual(true);
  });
});

describe("when the button is clicked", () => {
  it("triggers the refresh rates action", () => {
    const useRefreshRates = () => ({ status: idle, execute });
    render(<RefreshRates useRefreshRates={useRefreshRates} />);

    const button = screen.getByRole<HTMLButtonElement>("button");
    act(() => fireEvent.click(button));

    expect(execute).toHaveBeenCalledOnce();
  });
});
