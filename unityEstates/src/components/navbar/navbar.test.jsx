import { afterEach, describe, it, expect } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Navbar from "./navbar";

// Unit coverage for Navbar links and logo rendering.
afterEach(() => cleanup());

describe("Navbar Component", () => {
  it("renders the logo with correct alt text", () => {
    render(<Navbar />);
    expect(screen.getByAltText("Unity Estates Logo")).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<Navbar />);
    expect(screen.getAllByRole("link", { name: "Home" })[0]).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "About" })[0]).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Contact" })[0]).toBeInTheDocument();
  });

  it("home link has correct href", () => {
    render(<Navbar />);
    const homeLink = screen.getAllByRole("link", { name: "Home" })[0];
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("about link points to /about", () => {
    render(<Navbar />);
    const aboutLink = screen.getAllByRole("link", { name: "About" })[0];
    expect(aboutLink).toHaveAttribute("href", "/about");
  });

  it("contact link points to /contact", () => {
    render(<Navbar />);
    const contactLink = screen.getAllByRole("link", { name: "Contact" })[0];
    expect(contactLink).toHaveAttribute("href", "/contact");
  });
});
