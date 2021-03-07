import React from "react";
import { render, screen } from "@testing-library/react";
import CardTitle from "./cardTitle";

describe("testing card title subcomponent", () => {
  it("should render a card with a custom title", () => {
    const mock = {
      title: "Search Data",
    };
    render(<CardTitle title={mock.title} />);

    const title = screen.getByTestId("card-title");

    expect(title.textContent).toBe(mock.title);
  })
});
