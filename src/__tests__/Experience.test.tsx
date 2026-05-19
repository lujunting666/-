import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Experience from "@/components/sections/Experience";

describe("Experience Section", () => {
  it("renders without errors", () => {
    const { container } = render(<Experience />);
    expect(container).toBeTruthy();
  });

  it("displays the section heading", () => {
    render(<Experience />);
    expect(screen.getByText("Work Experience")).toBeInTheDocument();
  });

  it("renders company names from content data", () => {
    render(<Experience />);
    expect(screen.getByText("TechCorp Inc.")).toBeInTheDocument();
    expect(screen.getByText("StartupXYZ")).toBeInTheDocument();
  });

  it("renders role titles from content data", () => {
    render(<Experience />);
    expect(
      screen.getByText("Senior Full-Stack Developer")
    ).toBeInTheDocument();
    expect(screen.getByText("Full-Stack Developer")).toBeInTheDocument();
  });

  it("renders experience highlights", () => {
    render(<Experience />);
    expect(
      screen.getByText(/Architected and built a new SaaS platform/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Reduced page load times by 40%/i)
    ).toBeInTheDocument();
  });

  it("has the experience section with id 'experience'", () => {
    const { container } = render(<Experience />);
    const section = container.querySelector("section#experience");
    expect(section).toBeTruthy();
  });
});