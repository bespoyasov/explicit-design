import { render, act, fireEvent, screen } from "@testing-library/react";
import { BaseValueInput } from "./BaseValueInput";

const updateBaseValue = vi.fn();
const useBaseValue = () => 42;
const dependencies = {
  updateBaseValue,
  useBaseValue,
};

describe("when entered a value in the field", () => {
  it("renders the value from the specified selector", () => {
    render(<BaseValueInput {...dependencies} />);
    const field = screen.getByLabelText<HTMLInputElement>(/Value in RPC/);
    expect(field.value).toEqual("42");
  });

  it("triggers the base value update handler", () => {
    render(<BaseValueInput {...dependencies} />);

    const field = screen.getByLabelText(/Value in RPC/);
    act(() => fireEvent.change(field, { target: { value: "146" } }));
    // ↑ Use `userEvent` instead of `fireEvent`
    //   for better and more concise API.

    expect(updateBaseValue).toHaveBeenCalledWith(146);
  });
});
