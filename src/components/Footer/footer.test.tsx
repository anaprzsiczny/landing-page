import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./footer";

describe("testing footer", () => {
  it("should render", () => {
    render(<Footer />);
  }),
  it("should render credits", () => {
    render(<Footer />)

    const credits = screen.getByTestId("credits")

    expect(credits.textContent).toBe("© Datawarehouse™, 2020. All rights reserved. Company Registration Number: 21479524.")
  })
})
