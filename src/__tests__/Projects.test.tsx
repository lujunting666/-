import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Projects from "@/components/sections/Projects";

describe("Projects Section", () => {
  it("renders without errors", () => {
    const { container } = render(<Projects />);
    expect(container).toBeTruthy();
  });

  it("displays the section heading", () => {
    render(<Projects />);
    expect(screen.getByText("Featured Projects")).toBeInTheDocument();
  });

  it("renders all project names from content data", () => {
    render(<Projects />);
    expect(screen.getByText("TaskFlow")).toBeInTheDocument();
    expect(screen.getByText("UI Kit")).toBeInTheDocument();
    expect(screen.getByText("DataViz Dashboard")).toBeInTheDocument();
  });

  it("renders project descriptions", () => {
    render(<Projects />);
    expect(
      screen.getByText(/full-stack project management/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/open-source component library/i)
    ).toBeInTheDocument();
  });

  it("renders project tech tags", () => {
    render(<Projects />);
    // Tech tags appear in both filter buttons and project cards, so use getAllByText
    const nextJsElements = screen.getAllByText("Next.js");
    expect(nextJsElements.length).toBeGreaterThan(0);
    const tsElements = screen.getAllByText("TypeScript");
    expect(tsElements.length).toBeGreaterThan(0);
  });

  it("renders Source links with correct URLs", () => {
    render(<Projects />);
    const sourceLinks = screen.getAllByText("Source");
    expect(sourceLinks.length).toBeGreaterThan(0);
    sourceLinks.forEach((link) => {
      expect(link.closest("a")).toHaveAttribute("href");
    });
  });

  it("renders Live Demo links", () => {
    render(<Projects />);
    const liveLinks = screen.getAllByText("Live Demo");
    expect(liveLinks.length).toBeGreaterThan(0);
  });

  it("has the projects section with id 'projects'", () => {
    const { container } = render(<Projects />);
    const section = container.querySelector("section#projects");
    expect(section).toBeTruthy();
  });
});