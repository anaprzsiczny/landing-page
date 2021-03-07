import React from "react";
import { render, screen } from "@testing-library/react";
import CardFeatures from "./cardFeatures";

describe("testing card features", () => {
  it("should render a card with a custom title", () => {
    const mock = {
      title: 'Search Data',
      text: 'Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.'
    }
    render(<CardFeatures content={mock} />);

    const title = screen.getByTestId("card-title");

    expect(title.textContent).toBe(mock.title);
  }),

  it("should render a card with a custom description", () => {
    const mock = {
      title: 'Search Data',
      text: 'Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.'
    }
    render(<CardFeatures content={mock} />);

    const title = screen.getByTestId("card-text");

    expect(title.textContent).toBe(mock.text);
  })

})
