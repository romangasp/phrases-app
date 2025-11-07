import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Spinner } from "./spinner";

describe("Spinner", () => {
  it("should be render the spinner (CircularProgress)", () => {
    render(<Spinner />);
    const spinner = screen.getByRole("progressbar");
    expect(spinner).toBeInTheDocument();
  });
});
