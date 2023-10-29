import Home from "../app/page";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

// Render table title
test("it render the table title", () => {
  render(<Home />);
  const tableTitle = screen.getByRole("heading", {
    name: "Crypto List"
  })
  expect(tableTitle).toBeInTheDocument();
  expect(tableTitle).toBeVisible()
});

// Render table title
test("it render teh table", () => {
  render(<Home />);
  const list = screen.getByRole("table")
  expect(list).toBeInTheDocument();
  expect(list).toBeVisible()
});

// Render table columns
test("it render the table columns titles", () => {
  render(<Home />);
  const idColumn = screen.getByRole("columnheader", {
    name: 'Id'
  })
  expect(idColumn).toBeInTheDocument();
  expect(idColumn).toBeVisible()
  const nameColumn = screen.getByRole("columnheader",
    { name: "Name" })
  expect(nameColumn).toBeInTheDocument();
  expect(nameColumn).toBeVisible()
  const symbolColumn = screen.getByRole("columnheader",
    { name: "Symbol" })
  expect(symbolColumn).toBeInTheDocument();
  expect(symbolColumn).toBeVisible()
  const priveColumn = screen.getByRole("columnheader",
    { name: "Price" })
  expect(priveColumn).toBeInTheDocument();
  expect(priveColumn).toBeVisible()
});

// Render load more button
test("it render the load more button", () => {
  render(<Home />);
  const loadMoreButton = screen.getByRole("button", {
    name: 'Load More'
  });
  expect(loadMoreButton).toBeInTheDocument();
  expect(loadMoreButton).toHaveTextContent("Load More");
});

