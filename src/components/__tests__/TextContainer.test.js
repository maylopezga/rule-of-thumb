import { render, screen } from "@testing-library/react";

// Own components
import { TextContainer } from "../TextContainer";

test("Should show text", () => {
  render(<TextContainer name="Juan" description="This is description" />);
  screen.getByText("Juan");
  screen.getByText("This is description");
});
