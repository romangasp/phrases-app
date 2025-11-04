import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Input } from "./input";

describe("Input component", () => {
  it("should be render the label correctly", () => {
    render(
      <Input
        label="Type a phrase"
        placeholder="Type a phrase"
        name="phrase"
        value=""
        onChange={() => {}}
      />
    );
    expect(screen.getByText("Type a phrase")).toBeInTheDocument();
  });

  it("should be render the placeholder correctly", () => {
    render(
      <Input
        label="Placeholder"
        name="Placeholder"
        placeholder="Placeholder"
        value=""
        onChange={() => {}}
      />
    );
  });

  it("should be call to onChange when writes on the input", () => {
    const handleChange = vi.fn();

    render(
      <Input
        label="author"
        name="author"
        placeholder="Type the author"
        value=""
        onChange={handleChange}
      />
    );
  });
});
