import { render, screen } from "@testing-library/react";

// Own components
import { TitleContainer } from "../TitleContainer";

test("Should show only title", () => {
  render(<TitleContainer order="grid" isMobile />);
  screen.getByText("Previous Rulings");
});

test("Should show title with filter", () => {
  render(<TitleContainer order="grid" />);
  screen.getByText("Previous Rulings");
  screen.getByText("Submit");
  expect(screen.getAllByText("Grid")).toHaveLength(2);
  expect(screen.getAllByText("List")).toHaveLength(1);
});
