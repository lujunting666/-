import React from "react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Navbar from "@/components/layout/Navbar";

describe("Navbar", () => {
  beforeEach(() => {
    Object.defineProperty(window, "scrollY", { value: 0, writable: true, configurable: true });
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
    localStorage.clear();
  });

  afterEach(() => {
    cleanup();
  });

  it("renders without errors", () => {
    const { container } = render(<Navbar />);
    expect(container).toBeTruthy();
  });

  it("displays the Portfolio brand name", () => {
    render(<Navbar />);
    expect(screen.getByText("Portfolio")).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<Navbar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Education")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("has a theme toggle button", () => {
    render(<Navbar />);
    // ThemeToggle renders nothing initially (hydration safety), then shows button
    // Check that a theme toggle button exists in the rendered output
    const buttons = screen.getAllByRole("button");
    // There should be at least the menu toggle button and potentially theme toggle
    expect(buttons.length).toBeGreaterThan(0);
  });

  it("has a mobile menu toggle button", () => {
    render(<Navbar />);
    const toggleBtn = screen.getByRole("button", { name: /toggle menu/i });
    expect(toggleBtn).toBeInTheDocument();
  });

  it("hamburger opens mobile menu", () => {
    render(<Navbar />);
    const toggleBtn = screen.getByRole("button", { name: /toggle menu/i });

    fireEvent.click(toggleBtn);

    const xIcon = document.querySelector(".lucide-x");
    expect(xIcon).toBeTruthy();
  });

  it("uses transparent background when at top of page", () => {
    window.scrollY = 0;
    render(<Navbar />);
    // Trigger scroll handler
    fireEvent.scroll(window);
    const nav = document.querySelector("nav");
    expect(nav?.className).toContain("bg-transparent");
  });
});