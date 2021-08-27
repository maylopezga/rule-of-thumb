import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Own components
import { Container } from "./Container";

test("Should show data", async () => {
  const { container } = render(<Container />);
  container.querySelector(`[data-testid="GridCard"]`);
});

test("Should show data with list view", async () => {
  const { container } = render(<Container />);
  userEvent.click(screen.getAllByText("Grid")[0]);
  userEvent.click(screen.getByText("List"));
  container.querySelector(`[data-testid="ListCard"]`);
});

test("Should change message of button submit", () => {
  render(<Container />);
  screen.getByText("Previous Rulings");
  const button = screen.getAllByAltText("up")[0].parentElement;
  expect(button.disabled).toBeFalsy();
  userEvent.click(button);
  userEvent.click(screen.getAllByText("Vote Now")[0]);
  screen.getByText("Vote Again");
});
