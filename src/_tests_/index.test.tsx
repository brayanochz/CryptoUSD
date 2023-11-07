import Home from "../app/home/[page]/page";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

// Render table title
test("it render the table title", () => {
  render(<Home params={{ page: '1' }} searchParams={{}} />);
  const tableTitle = screen.getByRole("heading", {
    name: "Crypto List"
  })
  expect(tableTitle).toBeInTheDocument();
  expect(tableTitle).toBeVisible()
});

// Render table title
test("it render teh table", () => {
  render(<Home params={{ page: '1' }} searchParams={{}} />);
  const list = screen.getByRole("table")
  expect(list).toBeInTheDocument();
  expect(list).toBeVisible()
});

// Render table columns
test("it render the table columns titles", () => {
  render(<Home params={{ page: '1' }} searchParams={{}} />);
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

// Render name filter input
test("it render the currency selector", () => {
  render(<Home params={{ page: '1' }} searchParams={{}} />);
  const currencyInput = screen.getByRole("input", {
    name: 'currency'
  });
  const currencyLabel = screen.getByRole("label", {
    name: 'Select currency'
  });
  expect(currencyInput).toBeInTheDocument();
  expect(currencyInput).toHaveTextContent("USD");

  expect(currencyLabel).toBeInTheDocument();
  expect(currencyLabel).toHaveTextContent("Select currency");
});

// Render name filter input
test("it render the name filter input", () => {
  render(<Home params={{ page: '1' }} searchParams={{}} />);
  const nameFilterInput = screen.getByRole("input", {
    name: 'name'
  });
  const nameFilterLabel = screen.getByRole("label", {
    name: 'Search by name'
  });
  expect(nameFilterInput).toBeInTheDocument();
  expect(nameFilterInput).toHaveTextContent("Name");

  expect(nameFilterLabel).toBeInTheDocument();
  expect(nameFilterLabel).toHaveTextContent("Name");
});

// Render load more button
test("it render the symbol filter input", () => {
  render(<Home params={{ page: '1' }} searchParams={{}} />);
  const symbolFilterInput = screen.getByRole("input", {
    name: 'Symbol'
  });
  const symbolFilterLabel = screen.getByRole("label", {
    name: 'Search by symbol'
  });
  expect(symbolFilterInput).toBeInTheDocument();
  expect(symbolFilterInput).toHaveTextContent("Symbol");

  expect(symbolFilterLabel).toBeInTheDocument();
  expect(symbolFilterLabel).toHaveTextContent("Search by symbol");
});

// Render load more button
test("it render the apply button", () => {
  render(<Home params={{ page: '1' }} searchParams={{}} />);
  const loadMoreButton = screen.getByRole("button", {
    name: 'Apply'
  });
  expect(loadMoreButton).toBeInTheDocument();
  expect(loadMoreButton).toHaveTextContent("Apply");
});


// Render load more button
test("it render the load more button", () => {
  render(<Home params={{ page: '1' }} searchParams={{}} />);
  const loadMoreButton = screen.getByRole("button", {
    name: 'Load More'
  });
  expect(loadMoreButton).toBeInTheDocument();
  expect(loadMoreButton).toHaveTextContent("Load More");
});



