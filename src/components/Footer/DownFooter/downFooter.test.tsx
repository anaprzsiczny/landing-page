import React from "react";
import { render, screen } from "@testing-library/react";
import DownFooter from "./downFooter";

describe("testing downfooter", () => {
  it("should render", () => {
    render(<DownFooter />);
  }),
  it("should render data warehouse", () => {
    render(<DownFooter />);

    const dw = screen.getByTestId("upper-info-dw");
    expect(dw.textContent).toBe("Data Warehouse");
  }),
  it("should render about", () => {
    render(<DownFooter />);

    const about = screen.getByTestId("down-footer-about");
    expect(about.textContent).toBe("About");
  }),
  it("should render helper", () => {
    render(<DownFooter />);

    const help = screen.getByTestId("down-footer-help");
    expect(help.textContent).toBe("Help");
  }),

  it("should render social media", () => {
    render(<DownFooter />);

    const socialMedia = screen.getByTestId("down-footer-social-media");
    expect(socialMedia.textContent).toBe("Social Media");
  })
})