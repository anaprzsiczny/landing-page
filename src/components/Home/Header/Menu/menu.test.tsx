import React from "react";
import { render, screen } from "@testing-library/react";
import Menu from "./menu";

describe("testing menu", () => {
  it("should render", () => {
    render(<Menu />);
  }),
  it("should render menu about", () => {
    render(<Menu />);
    const about = screen.getByTestId("about");
    expect(about.textContent).toBe("About");
  }),
  it("should render menu help", () => {
    render(<Menu />);
    const about = screen.getByTestId("help");

    expect(about.textContent).toBe("Help");
  }),
  it("should render menu features", () => {
    render(<Menu />);
    const about = screen.getByTestId("features");

    expect(about.textContent).toBe("Features");
  }),
  it("should render menu signup", () => {
    render(<Menu />);
    const about = screen.getByTestId("signup");

    expect(about.textContent).toBe("Signup");
  })
})
