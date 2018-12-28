import { render, fireEvent, wait } from "react-testing-library";
import 'jest-dom/extend-expect'
import * as axios from 'axios'
import MockAxios from 'axios-mock-adapter'
import React from 'react';
import Joke from '../joke';
import JokeGenerator from '../JokeGenerator'

const mock = new MockAxios(axios, { delayResponse: Math.random() * 500 });
afterAll(() => mock.restore());

test("Joke component receives props and then renders text", () => {
  const { getByTestId, getByText, container } = render(
    <Joke text="Some joke." />
  );

  expect(getByTestId("joke-text")).toHaveTextContent(
    "Some joke."
  );
});

test("Joke generator fetches a random joke and renders it", async  () => {
  mock.onGet().replyOnce(200, {
    value: {
      joke: "Really funny joke!"
    }
  });

  const { getByText, queryByText, queryByTestId } = render(<JokeGenerator />);
  expect(getByText("You haven't loaded any joke yet!")).toBeInTheDocument();

  fireEvent.click(getByText("Load a random joke."));
  expect(queryByText("You haven't loaded any joke yet!")).not.toBeInTheDocument();
  expect(queryByText("Loading...")).toBeInTheDocument();

  await wait(() => expect(queryByText("Loading...")).not.toBeInTheDocument());
  expect(queryByTestId("joke-text")).toBeInTheDocument();
})
