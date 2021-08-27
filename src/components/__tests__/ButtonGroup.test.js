import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Own components
import { ButtonGroup } from "../ButtonGroup";
import { getTime } from "../utils/getters";

const date = "Fri Aug 27 2021 11:02:56 GMT-0500";

test("Should show text and button", () => {
  render(<ButtonGroup lastUpdated={date} category="politics" />);
  screen.getByText(`${getTime(date)} in politics`);
  screen.getByText("Vote Now");
});

test("Should have three buttons", () => {
  render(<ButtonGroup lastUpdated={date} category="politics" />);
  expect(screen.getAllByRole("button")).toHaveLength(3);
});

test("The submit button must be disabled", () => {
  const spySubmit = jest.fn();
  render(<ButtonGroup voteSelected="" handleSubmit={spySubmit} />);
  expect(screen.getByText("Vote Now").disabled).toBeTruthy();
});

test("The submit button must be enabled and should call handleSubmit", () => {
  const spySubmit = jest.fn();
  render(<ButtonGroup voteSelected="up" handleSubmit={spySubmit} />);
  expect(screen.getByText("Vote Now").disabled).toBeFalsy();
  userEvent.click(screen.getByText("Vote Now"));
  expect(spySubmit).toBeCalled();
});

test("Should not call handleSubmit when button is disabled", () => {
  const spySubmit = jest.fn();
  render(<ButtonGroup voteSelected="" handleSubmit={spySubmit} />);
  expect(screen.getByText("Vote Now").disabled).toBeTruthy();
  userEvent.click(screen.getByText("Vote Now"));
  expect(spySubmit).not.toBeCalled();
});

test("The up button should call handleVoteSelected with the up message", () => {
  const spy = jest.fn();
  render(<ButtonGroup voteSelected="" handleVoteSelected={spy} />);
  expect(screen.getByText("Vote Now").disabled).toBeTruthy();
  userEvent.click(screen.getAllByRole("button")[0]);
  expect(spy).toBeCalledWith("up");
});

test("The down button should call handleVoteSelected with the down message", () => {
  const spy = jest.fn();
  render(<ButtonGroup voteSelected="" handleVoteSelected={spy} />);
  expect(screen.getByText("Vote Now").disabled).toBeTruthy();
  userEvent.click(screen.getAllByRole("button")[1]);
  expect(spy).toBeCalledWith("down");
});

test("Should call handleSubmit after the button vote is selected", () => {
  const spy = jest.fn();
  const spySubmit = jest.fn();
  const { rerender } = render(
    <ButtonGroup
      voteSelected=""
      handleVoteSelected={spy}
      handleSubmit={spySubmit}
    />
  );
  expect(screen.getByText("Vote Now").disabled).toBeTruthy();
  userEvent.click(screen.getAllByRole("button")[0]);
  expect(spy).toBeCalledWith("up");
  rerender(
    <ButtonGroup
      voteSelected="up"
      handleVoteSelected={spy}
      handleSubmit={spySubmit}
    />
  );
  userEvent.click(screen.getByText("Vote Now"));
  expect(spySubmit).toBeCalled();
});
