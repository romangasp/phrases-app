import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { CardItem } from "..";

describe("CardItem", () => {
  it("should be render the text correctly", () => {
    render(
      <CardItem id="1" text="new phrase" author="author" onDelete={() => {}} />
    );
    expect(screen.getByText("new phrase")).toBeInTheDocument();
  });

  it("should be call to onDelete with the correct id to do click on the button", () => {
    const handleDelete = vi.fn();
    render(
      <CardItem
        id="1zaxv2"
        text="Delete"
        author="author"
        onDelete={handleDelete}
      />
    );

    const deleteButton = screen.getByRole("button");
    fireEvent.click(deleteButton);

    expect(handleDelete).toHaveBeenCalledWith("1zaxv2");
    expect(handleDelete).toHaveBeenCalledTimes(1);
  });
});
