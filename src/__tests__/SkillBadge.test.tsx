import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SkillBadge from "@/components/ui/SkillBadge";

describe("SkillBadge", () => {
  it("renders without errors with default props", () => {
    const { container } = render(<SkillBadge name="React" />);
    expect(container).toBeTruthy();
  });

  it("displays the skill name", () => {
    render(<SkillBadge name="TypeScript" />);
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("renders 5 proficiency dots when level is provided", () => {
    const { container } = render(<SkillBadge name="React" level={4} />);
    const dots = container.querySelectorAll(".rounded-full.bg-gray-200, .rounded-full.bg-primary-500");
    // 5 dots: level=4 means 4 filled + 1 empty
    expect(dots.length).toBe(5);
  });

  it("renders 5 proficiency dots with default level (3)", () => {
    const { container } = render(<SkillBadge name="React" />);
    const dots = container.querySelectorAll(".w-2.h-2");
    expect(dots.length).toBe(5);
  });

  it("does not render proficiency dots when level is 0", () => {
    const { container } = render(<SkillBadge name="React" level={0} />);
    const dots = container.querySelectorAll(".w-2.h-2");
    expect(dots.length).toBe(0);
  });
});