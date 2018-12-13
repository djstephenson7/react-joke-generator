import { render, fireEvent } from "react-testing-library";
import 'jest-dom/extend-expect'
import React from 'react';
import Joke from '../joke';
import JokeGenerator from '../JokeGenerator'

test("Joke component receives props and then renders text", () => {
  const { getByTestId, getByText, container } = render(
    <Joke text="Some joke." />
  );

  expect(getByTestId("joke-text")).toHaveTextContent(
    "Some joke."
  );
});

test("Joke generator fetches a random joke and renders it", () => {
  const { getByText, queryByText } = render(<JokeGenerator />);
  expect(getByText("You haven't loaded any joke yet!")).toBeInTheDocument();

  fireEvent.click(getByText("Load a random joke."));
  expect(queryByText("You haven't loaded any joke yet!")).not.toBeInTheDocument();
  expect(queryByText("Loading...")).toBeInTheDocument();
})
