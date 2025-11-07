import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Input } from "..";

describe("Input component", () => {
  const mockOnChange = vi.fn();
  const mockOnBlur = vi.fn();

  it("should be render the label correctly", () => {
    render(
      <Input
        label="Type a phrase"
        placeholder="Type a phrase"
        name="phrase"
        value=""
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    expect(screen.getByLabelText("Type a phrase")).toBeInTheDocument();
  });

  it("should be render the placeholder correctly", () => {
    render(
      <Input
        label="Placeholder"
        name="Placeholder"
        placeholder="Placeholder"
        value=""
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
  });

  it("should be call to onChange when writes on the input", () => {
    render(
      <Input
        label="author"
        name="author"
        placeholder="Type the author"
        value=""
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
  });
});
