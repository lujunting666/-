import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { fireEvent, cleanup } from "@testing-library/react";

describe("ScrollToTop", () => {
  beforeEach(() => {
    window.scrollY = 0;
  });

  afterEach(() => {
    cleanup();
  });

  it("renders without errors", () => {
    const { container } = render(<ScrollToTop />);
    expect(container).toBeTruthy();
  });

  it("is hidden by default (scrollY = 0)", () => {
    render(<ScrollToTop />);
    const button = screen.getByRole("button", { name: /scroll to top/i });
    expect(button.className).toContain("pointer-events-none");
  });

  it("becomes visible after scrolling past 400px", () => {
    // Set scrollY first, then render - effect picks up the value
    window.scrollY = 500;
    render(<ScrollToTop />);
    fireEvent.scroll(window);
    const button = screen.getByRole("button", { name: /scroll to top/i });
    expect(button.className).not.toContain("pointer-events-none");
  });

  it("has an accessible aria label", () => {
    render(<ScrollToTop />);
    expect(
      screen.getByRole("button", { name: /scroll to top/i })
    ).toBeInTheDocument();
  });
});