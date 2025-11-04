import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Button } from "./button";

describe("Button component", () => {
  it("should be render the label correctly", () => {
    render(<Button label="Add phrase" parentMethod={() => {}} />);
    expect(screen.getByText("Add phrase")).toBeInTheDocument();
  });

  it("should be eject parentMethod to do click", () => {
    const mockFn = vi.fn();
    render(<Button label="Press" parentMethod={mockFn} />);

    fireEvent.click(screen.getByText("Press"));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});