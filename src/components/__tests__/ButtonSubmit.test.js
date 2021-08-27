import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Own components
import { ButtonSubmit } from "../ButtonSubmit";

test("Should call handleSubmit when button is clicked", () => {
  const spySubmit = jest.fn();
  render(<ButtonSubmit handleSubmit={spySubmit} name="Submit" />);
  userEvent.click(screen.getByText("Submit"));
  expect(spySubmit).toBeCalled();
});

test("The button must be disabled", () => {
  render(<ButtonSubmit disabled name="Submit" />);
  expect(screen.getByText("Submit").disabled).toBeTruthy();
});

test("The button must be enabled", () => {
  render(<ButtonSubmit name="Submit" />);
  expect(screen.getByText("Submit").disabled).toBeFalsy();
});

test("Should not call handleSubmit when button is disabled", () => {
  const spySubmit = jest.fn();
  render(<ButtonSubmit disabled name="Submit" handleSubmit={spySubmit} />);
  expect(screen.getByText("Submit").disabled).toBeTruthy();
  userEvent.click(screen.getByText("Submit"));
  expect(spySubmit).not.toBeCalled();
});
