import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, it, expect, vi, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import PropertyDetails from "./propertyDetails";

// Component tests for the PropertyDetails view and its conditional states.
// Mock the data
vi.mock("./data/properties.json", () => ({
  default: {
    properties: [
      {
        id: "1",
        price: 500000,
        bedrooms: 3,
        tenure: "Freehold",
        type: "House",
        location: "London",
        pictures: ["img1.jpg", "img2.jpg"],
        description: "Beautiful property",
        floorplan: "http://example.com/floorplan.pdf",
        map: "",
      },
    ],
  },
}));

afterEach(() => cleanup());

describe("PropertyDetails Component", () => {
  const renderComponent = (id = "1") =>
    render(
      <MemoryRouter initialEntries={[`/property/${id}`]}>
        <Routes>
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/" element={<div>Home</div>} />
        </Routes>
      </MemoryRouter>
    );

  it("renders property details when property exists", () => {
    renderComponent();
    expect(screen.getByText("£500,000")).toBeInTheDocument();
    expect(screen.getByText(/3\s*beds/i)).toBeInTheDocument();
  });

  it('displays "Property not found" when property does not exist', () => {
    renderComponent("999");
    expect(screen.getByText(/property not found/i)).toBeInTheDocument();
  });

  it("renders back button", () => {
    renderComponent();

    // ✅ multiple back buttons exist, so check at least one
    const backLinks = screen.getAllByRole("link", { name: /back/i });
    expect(backLinks.length).toBeGreaterThan(0);
  });

  it("renders floorplan button when available", () => {
    renderComponent();

    // ✅ multiple floorplan links exist, so check at least one
    const floorplanLinks = screen.getAllByRole("link", {
      name: /see floorplan/i,
    });
    expect(floorplanLinks.length).toBeGreaterThan(0);
  });
});
