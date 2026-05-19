import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "@/components/sections/About";

describe("About Section", () => {
  it("renders without errors", () => {
    const { container } = render(<About />);
    expect(container).toBeTruthy();
  });

  it("displays the section heading", () => {
    render(<About />);
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("displays highlights cards", () => {
    render(<About />);
    // About now uses AnimatedCounter which renders numbers, not text labels
    // Check for the section content instead
    const container = document.querySelector("section#about");
    expect(container).toBeTruthy();
    // AnimatedCounter renders numeric values
    const numbers = container?.querySelectorAll(".tabular-nums");
    expect(numbers?.length).toBeGreaterThan(0);
  });

  it("has the about section with id 'about'", () => {
    const { container } = render(<About />);
    const section = container.querySelector("section#about");
    expect(section).toBeTruthy();
  });
});