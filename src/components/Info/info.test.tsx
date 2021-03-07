import React from "react";
import { render, screen } from "@testing-library/react";
import Info from "./info";

describe("testing info", () => {
  it("should render", () => {
    render(<Info />);
  })
})
