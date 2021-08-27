import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Own components
import { Filter } from "../Filter";

const items = [
  { id: "grid", name: "Grid" },
  { id: "list", name: "List" },
];

test("Should show default value and have items", () => {
  render(<Filter items={items} />);
  expect(screen.getAllByText("Grid")).toHaveLength(2);
  expect(screen.getAllByText("List")).toHaveLength(1);
});

test("Should show value and have items", () => {
  render(<Filter items={items} value="list" />);
  expect(screen.getAllByText("Grid")).toHaveLength(1);
  expect(screen.getAllByText("List")).toHaveLength(2);
});

test("Should call onChange with item is selected", () => {
  const spy = jest.fn();
  render(<Filter items={items} value="list" onChange={spy} />);
  expect(screen.getAllByText("Grid")).toHaveLength(1);
  expect(screen.getAllByText("List")).toHaveLength(2);
  userEvent.click(screen.getAllByText("List")[0]);
  userEvent.click(screen.getByText("Grid"));
  expect(spy).toBeCalledWith("grid");
});
