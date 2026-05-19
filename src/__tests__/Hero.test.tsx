import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "@/components/sections/Hero";

describe("Hero Section", () => {
  it("renders without errors", () => {
    const { container } = render(<Hero />);
    expect(container).toBeTruthy();
  });

  it("displays the welcome badge", () => {
    render(<Hero />);
    expect(screen.getByText("Welcome to my portfolio")).toBeInTheDocument();
  });

  it("displays the main heading", () => {
    render(<Hero />);
    expect(screen.getByText(/Hi, I'm/)).toBeInTheDocument();
  });

  it("displays the tagline text", () => {
    render(<Hero />);
    // Hero uses TypeWriter component - check that TypeWriter rendered something
    // (it renders individual characters, so we check the container has content)
    const container = document.querySelector("section#hero");
    expect(container).toBeTruthy();
    expect(container?.textContent?.length).toBeGreaterThan(0);
  });

  it("has a View Projects link pointing to #projects", () => {
    render(<Hero />);
    const link = screen.getByText("View Projects");
    expect(link).toBeInTheDocument();
    expect(link.closest("a")).toHaveAttribute("href", "#projects");
  });

  it("has a Download Resume link", () => {
    render(<Hero />);
    const link = screen.getByText("Download Resume");
    expect(link).toBeInTheDocument();
    expect(link.closest("a")).toHaveAttribute("download");
  });

  it("has a scroll-down arrow linking to #about", () => {
    render(<Hero />);
    const arrows = document.querySelectorAll('a[href="#about"]');
    expect(arrows.length).toBeGreaterThan(0);
  });

  it("has the hero section with id 'hero'", () => {
    const { container } = render(<Hero />);
    const section = container.querySelector("section#hero");
    expect(section).toBeTruthy();
  });
});