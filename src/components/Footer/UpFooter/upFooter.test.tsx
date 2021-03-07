import React from "react";
import { render, screen } from "@testing-library/react";
import UpFooter from "./upFooter";

describe("testing upfooter", () => {
  it("should render", () => {
    render(<UpFooter />)
  }),
  it("should render credits", () => {
    render(<UpFooter />);

    const desc = screen.getByTestId("upfooter-desc")
    expect(desc.textContent).toBe("Get limited 1 week free try our features!")
  })
})
