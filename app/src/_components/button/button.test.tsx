import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { CustomButton } from "./button";

describe("CustomButton", () => {
  it("should be render the label correctly", () => {
    render(<CustomButton label="Save" />);
    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
  });

  it("should be execute onClick to do Click", () => {
    const handleClick = vi.fn();
    render(<CustomButton label="Send" onClick={handleClick} />);

    fireEvent.click(screen.getByRole("button", { name: "Send" }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
