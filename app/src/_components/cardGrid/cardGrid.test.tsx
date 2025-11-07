import { render, screen, fireEvent } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { CardGrid } from "./cardGrid";

describe("CardGrid", () => {
  const mockOnDelete = vi.fn();
  const mockItems = [
    { id: "1", text: "First item", author: "John" },
    { id: "2", text: "Second item", author: "Michael" },
  ];

  beforeEach(() => {
    mockOnDelete.mockClear();
  });

  test("should be render all cardItems correctly", () => {
    render(<CardGrid items={mockItems} onDelete={mockOnDelete} />);

    expect(screen.getByText("First item")).toBeInTheDocument();
    expect(screen.getByText("Second item")).toBeInTheDocument();
  });

  test("call to onDelete when makes click on the delete button", () => {
    render(<CardGrid items={mockItems} onDelete={mockOnDelete} />);
    const deleteButtons = screen.getAllByRole("button");

    fireEvent.click(deleteButtons[0]);

    expect(mockOnDelete).toHaveBeenCalledWith("1");
  });
});
