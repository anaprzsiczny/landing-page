import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./home";

describe("testing home", () => {
  it("should render", () => {
    render(<Home />);
  }),

  it("should render home title", () => {
    render(<Home />);

    const title = screen.getByTestId("home-title")

    expect(title.textContent).toBe("Save your data storage here.")
  }),

  it("should render home description", () => {
    render(<Home />);

    const description = screen.getByTestId("home-description")

    expect(description.textContent).toBe("Data Warehouse is a data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others.")
  })
})
