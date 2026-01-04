import { afterEach, describe, it, expect } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Search from "./search";

afterEach(() => cleanup());

describe("Search Component (stable tests)", () => {
  const renderSearch = () =>
    render(
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    );

  it("renders site title", () => {
    renderSearch();
    expect(screen.getByText("Unity Estates")).toBeInTheDocument();
  });

  it("renders hero description text", () => {
    renderSearch();
    expect(
      screen.getByText(/connecting people with exceptional homes/i)
    ).toBeInTheDocument();
  });

  it("renders search heading", () => {
    renderSearch();
    expect(
      screen.getByText("Find property for sale in London")
    ).toBeInTheDocument();
  });

  it("renders search button", () => {
    renderSearch();
    expect(
      screen.getByRole("button", { name: /search properties/i })
    ).toBeInTheDocument();
  });

  it("renders properties section", () => {
    renderSearch();
    expect(screen.getByText("Properties")).toBeInTheDocument();
  });

  it("renders at least one property card", () => {
    renderSearch();
    const prices = screen.getAllByText(/£/);
    expect(prices.length).toBeGreaterThan(0);
  });

  it("renders explore more links", () => {
    renderSearch();
    const exploreLinks = screen.getAllByRole("link", {
      name: /explore more/i,
    });
    expect(exploreLinks.length).toBeGreaterThan(0);
  });

  it("renders favourites section", () => {
    renderSearch();
    expect(screen.getByText(/favourites/i)).toBeInTheDocument();
  });

  it("renders empty favourites hint text", () => {
    renderSearch();
    expect(
      screen.getByText(/drag properties here or click/i)
    ).toBeInTheDocument();
  });
});
