import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Skills from "@/components/sections/Skills";

describe("Skills Section", () => {
  it("renders without errors", () => {
    const { container } = render(<Skills />);
    expect(container).toBeTruthy();
  });

  it("displays the section heading", () => {
    render(<Skills />);
    expect(
      screen.getByText("Skills & Technologies")
    ).toBeInTheDocument();
  });

  it("renders all skill categories", () => {
    render(<Skills />);
    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("Backend")).toBeInTheDocument();
    expect(screen.getByText("Tools")).toBeInTheDocument();
  });

  it("renders individual skill names", () => {
    render(<Skills />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
    expect(screen.getByText("Docker")).toBeInTheDocument();
  });

  it("renders proficiency dots for skills", () => {
    render(<Skills />);
    // SkillBadge renders 5 dot divs per skill, at least some should exist
    const dots = document.querySelectorAll(".rounded-full");
    expect(dots.length).toBeGreaterThan(0);
  });

  it("has the skills section with id 'skills'", () => {
    const { container } = render(<Skills />);
    const section = container.querySelector("section#skills");
    expect(section).toBeTruthy();
  });
});