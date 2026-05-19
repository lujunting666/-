import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Education from "@/components/sections/Education";

describe("Education Section", () => {
  it("renders without errors", () => {
    const { container } = render(<Education />);
    expect(container).toBeTruthy();
  });

  it("displays the section heading", () => {
    render(<Education />);
    expect(screen.getByText("Education")).toBeInTheDocument();
  });

  it("renders education data from content", () => {
    render(<Education />);
    expect(
      screen.getByText("University of Technology")
    ).toBeInTheDocument();
    expect(screen.getByText(/B\.S\. in Computer Science/)).toBeInTheDocument();
    expect(screen.getByText("2015 - 2019")).toBeInTheDocument();
  });

  it("has the education section with id 'education'", () => {
    const { container } = render(<Education />);
    const section = container.querySelector("section#education");
    expect(section).toBeTruthy();
  });
});