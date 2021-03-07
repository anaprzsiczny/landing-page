import React from "react";
import { render, screen } from "@testing-library/react";
import Testimonials from "./testimonials";

describe("testing Testimonials", () => {
  it("should render", () => {
    render(<Testimonials />);
  })
});
