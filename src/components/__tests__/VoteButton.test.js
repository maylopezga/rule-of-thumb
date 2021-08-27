import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Own components
import { VoteButton } from "../VoteButton";

test("Should call onChange when button is clicked", () => {
  const spy = jest.fn();
  render(<VoteButton onChange={spy} />);
  userEvent.click(screen.getByRole("button"));
  expect(spy).toBeCalled();
});

test("The button must be disabled", () => {
  render(<VoteButton isDisabled />);
  expect(screen.getByRole("button").disabled).toBeTruthy();
});

test("Should not call onChange when button is disabled", () => {
  const spy = jest.fn();
  render(<VoteButton isDisabled onChange={spy} />);
  expect(screen.getByRole("button").disabled).toBeTruthy();
  userEvent.click(screen.getByRole("button"));
  expect(spy).not.toBeCalled();
});
