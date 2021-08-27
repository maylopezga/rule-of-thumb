import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Own components
import { ButtonAgain } from "../ButtonAgain";

test("Should show text and button", () => {
  render(<ButtonAgain />);
  screen.getByText("Thank you for you vote");
  screen.getByText("Vote Again");
});

test("Should call handleSubmit when button is clicked", () => {
  const spySubmit = jest.fn();
  render(<ButtonAgain handleSubmit={spySubmit} />);
  userEvent.click(screen.getByText("Vote Again"));
  expect(spySubmit).toBeCalled();
});
