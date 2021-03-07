import React from "react";
import { render, screen } from "@testing-library/react";
import TestimonialsCard from "./testimonialsCard";

describe("testing testimonials card", () => {
  it("should render", () => {
    render(<TestimonialsCard />);
  }),

  it("should render name", () => {
    render(<TestimonialsCard />);
    const name = screen.getByTestId("name");
    expect(name.textContent).toBe("John Fang");
  }),

  it("should render company", () => {
    render(<TestimonialsCard />);
    const company = screen.getByTestId("company");
    expect(company.textContent).toBe("wordfaang.com");
  }),

  it("should render description", () => {
    render(<TestimonialsCard />);
    const desc = screen.getByTestId("desc");
    expect(desc.textContent).toBe(
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla."
    );
  })

});
