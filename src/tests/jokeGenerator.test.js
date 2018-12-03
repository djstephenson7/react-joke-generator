import { render } from "react-testing-library";
import React from 'react';

test("Joke component receives props and then renders text", () => {
  const { getByTestId, getByText, container } = render(
    <Joke text="The funniest joke this year." />
  );

  expect(getByTestId("joke-text")).toHaveTextContent(
    "The funniest joke this year."
  );
});
