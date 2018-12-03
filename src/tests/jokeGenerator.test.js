import { render } from "react-testing-library";
import "dom-testing-library/extend-expect";

test("Joke component receives props and renders test", () => {
  const { getByTestId } = render(
    <Joke text="Some joke" />
  );

  expect(getByTestId("joke-text")).toHaveTextContent("Some joke");
}
