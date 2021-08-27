import { render, screen } from "@testing-library/react";

// Own components
import { ProgressBar } from "../ProgressBar";

test("Should show percentage", () => {
  render(<ProgressBar progress={{ positive: 30, negative: 65 }} />);
  screen.getByText("31.6%");
  screen.getByText("68.4%");
});
