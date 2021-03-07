import React from "react";
import { render, screen } from "@testing-library/react";
import Features from "./features"

describe("testing features", () => {
  it("should render", () => {
      render(<Features />)
  }),

  it("should have features title", () => {
    render(<Features />)

    const mainTitle = screen.getByTitle("features-main-title")

    expect(mainTitle.textContent).toBe("Features");
    
  }),

  it("should have features subtitle", () => {
    render(<Features />);

    const subtitle = screen.getByTitle("features-main-subtitle");

    expect(subtitle.textContent).toBe("Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.");
  })

})
