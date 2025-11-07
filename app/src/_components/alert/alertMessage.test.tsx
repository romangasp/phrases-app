import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { expect, describe, it } from "vitest";
import { AlertMessage } from "./alertMessage";
import { Provider } from "react-redux";
import { makeStore } from "../../_lib/store/store";


describe("AlertMessage Component", () => {
  it("checking rendering", () => {
    render(<Provider store={makeStore()}><AlertMessage /></Provider>);
    expect(screen.getByTestId("notAlert")).not.toBeVisible();
  });
});
