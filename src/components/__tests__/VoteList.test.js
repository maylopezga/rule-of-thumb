import { render, screen } from "@testing-library/react";

// Own components
import { VoteList } from "../VoteList";

const data = [
  {
    name: "Juan",
    description: "This is a description",
    category: "entertainment",
    picture: "juan.png",
    lastUpdated: "2020-03-10T23:08:57.892Z",
    votes: {
      positive: 25,
      negative: 45,
    },
  },
  {
    name: "Carlos",
    description: "Text with description",
    category: "business",
    picture: "carlos.png",
    lastUpdated: "2021-02-14T23:10:19.134Z",
    votes: {
      positive: 46,
      negative: 84,
    },
  },
];

test("Should show data", async () => {
  const { container } = render(<VoteList data={data} />);
  screen.getByText("Juan");
  screen.getByText("Carlos");
  container.querySelector(`[data-testid="GridCard"]`);
});

test("Should show data with list view", async () => {
  const { container } = render(<VoteList order="list" data={data} />);
  screen.getByText("Juan");
  screen.getByText("Carlos");
  container.querySelector(`[data-testid="ListCard"]`);
});
