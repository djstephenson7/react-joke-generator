import { render } from "react-testing-library";
import 'jest-dom/extend-expect'
import React from 'react';
import Joke from '../joke';

test("Joke component receives props and then renders text", () => {
  const { getByTestId, getByText, container } = render(
    <Joke text="The funniest joke this year." />
  );

  expect(getByTestId("joke-text")).toHaveTextContent(
    "The funniest joke this year."
  );
});
