import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Own components
import { Search } from "../Search";

test("Should call onSubmit when button is clicked", async () => {
  const spy = jest.fn();
  render(<Search onSubmit={spy} />);
  userEvent.type(screen.getByRole("textbox"), "De");
  userEvent.click(screen.getByRole("button"));
  await waitFor(() => expect(spy).toHaveBeenCalledWith("De"));
});
