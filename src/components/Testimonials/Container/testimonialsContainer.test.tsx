import React from "react";
import { render, screen } from "@testing-library/react";
import TestimonialsContainer from "./testimonialsContainer";

describe("testing testimonials container", () => {
  it("should render", () => {
    render(<TestimonialsContainer />);
  }),
  it("should render title", () => {
    render(<TestimonialsContainer />);
    const title = screen.getByTestId("testimonials-title");
    expect(title.textContent).toBe("Testimonials");
  })
})
