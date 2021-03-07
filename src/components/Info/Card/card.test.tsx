import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./card";

describe("testing info card", () => {
  it("should render", () => {
    render(<Card />);
  }),

  it("should render title", () => {
    render(<Card />);

    const title = screen.getByTestId("card-title")

    expect(title.textContent).toBe("We are a high-level data storage bank")
  }),

  it("should render description", () => {
    render(<Card />);

    const description = screen.getByTestId("card-description")
    
    expect(description.textContent).toBe(
      "The place to store various data that you can access at any time through the internet and where you can carry it. This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse."
    );
  })
})
