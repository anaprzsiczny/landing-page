import React from "react";
import { render, screen } from "@testing-library/react";
import CardText from "./cardText";

describe("testing card text subcomponent", () => {
  it("should render a card text with a custom text", () => {
    const mock = {
      text:"testing",
    }
    render(<CardText text={mock.text} />);

    const title = screen.getByTestId("card-text");

    expect(title.textContent).toBe(mock.text);
  });
});
