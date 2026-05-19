import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProjectCard from "@/components/ui/ProjectCard";

const defaultProps = {
  name: "Test Project",
  description: "A test project description",
  tech: ["React", "TypeScript", "Node.js"],
  githubUrl: "https://github.com/test/project",
  liveUrl: "https://test-project.vercel.app",
};

describe("ProjectCard", () => {
  it("renders without errors", () => {
    const { container } = render(<ProjectCard {...defaultProps} />);
    expect(container).toBeTruthy();
  });

  it("displays the project name", () => {
    render(<ProjectCard {...defaultProps} />);
    expect(screen.getByText("Test Project")).toBeInTheDocument();
  });

  it("displays the project description", () => {
    render(<ProjectCard {...defaultProps} />);
    expect(
      screen.getByText("A test project description")
    ).toBeInTheDocument();
  });

  it("renders technology tags", () => {
    render(<ProjectCard {...defaultProps} />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
  });

  it("renders Source link when githubUrl is provided", () => {
    render(<ProjectCard {...defaultProps} />);
    const sourceLink = screen.getByText("Source");
    expect(sourceLink).toBeInTheDocument();
    expect(sourceLink.closest("a")).toHaveAttribute(
      "href",
      "https://github.com/test/project"
    );
    expect(sourceLink.closest("a")).toHaveAttribute("target", "_blank");
  });

  it("renders Live Demo link when liveUrl is provided", () => {
    render(<ProjectCard {...defaultProps} />);
    const liveLink = screen.getByText("Live Demo");
    expect(liveLink).toBeInTheDocument();
    expect(liveLink.closest("a")).toHaveAttribute(
      "href",
      "https://test-project.vercel.app"
    );
  });

  it("does not render Source link when githubUrl is undefined", () => {
    const props = { ...defaultProps, githubUrl: undefined };
    render(<ProjectCard {...props} />);
    expect(screen.queryByText("Source")).not.toBeInTheDocument();
  });

  it("does not render Live Demo link when liveUrl is undefined", () => {
    const props = { ...defaultProps, liveUrl: undefined };
    render(<ProjectCard {...props} />);
    expect(screen.queryByText("Live Demo")).not.toBeInTheDocument();
  });

  it("renders without any links when both URLs are undefined", () => {
    const props = { ...defaultProps, githubUrl: undefined, liveUrl: undefined };
    render(<ProjectCard {...props} />);
    expect(screen.queryByText("Source")).not.toBeInTheDocument();
    expect(screen.queryByText("Live Demo")).not.toBeInTheDocument();
  });
});