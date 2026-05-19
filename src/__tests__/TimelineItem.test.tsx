import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TimelineItem from "@/components/ui/TimelineItem";

const defaultProps = {
  title: "Software Engineer",
  organization: "Tech Corp",
  period: "2022 - Present",
  description: "Building great software.",
  highlights: ["Led a team", "Improved performance", "Wrote tests"],
};

describe("TimelineItem", () => {
  it("renders without errors", () => {
    const { container } = render(<TimelineItem {...defaultProps} />);
    expect(container).toBeTruthy();
  });

  it("displays the title", () => {
    render(<TimelineItem {...defaultProps} />);
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
  });

  it("displays the organization", () => {
    render(<TimelineItem {...defaultProps} />);
    expect(screen.getByText("Tech Corp")).toBeInTheDocument();
  });

  it("displays the period", () => {
    render(<TimelineItem {...defaultProps} />);
    expect(screen.getByText("2022 - Present")).toBeInTheDocument();
  });

  it("displays the description", () => {
    render(<TimelineItem {...defaultProps} />);
    expect(screen.getByText("Building great software.")).toBeInTheDocument();
  });

  it("renders all highlights as list items", () => {
    render(<TimelineItem {...defaultProps} />);
    expect(screen.getByText("Led a team")).toBeInTheDocument();
    expect(screen.getByText("Improved performance")).toBeInTheDocument();
    expect(screen.getByText("Wrote tests")).toBeInTheDocument();
  });

  it("works without highlights", () => {
    const props = { ...defaultProps, highlights: undefined };
    const { container } = render(<TimelineItem {...props} />);
    expect(container).toBeTruthy();
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
  });

  it("works with empty highlights array", () => {
    const props = { ...defaultProps, highlights: [] };
    render(<TimelineItem {...props} />);
    // Should not render the <ul> for highlights
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });
});