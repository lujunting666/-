import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "@/components/layout/Footer";

describe("Footer", () => {
  it("renders without errors", () => {
    const { container } = render(<Footer />);
    expect(container).toBeTruthy();
  });

  it("renders the copyright notice with current year", () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(`© ${year}`))
    ).toBeInTheDocument();
  });

  it("has social links (GitHub, LinkedIn, Email)", () => {
    render(<Footer />);
    expect(screen.getByLabelText("GitHub")).toBeInTheDocument();
    expect(screen.getByLabelText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("social links open in new tab", () => {
    render(<Footer />);
    const githubLink = screen.getByLabelText("GitHub");
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("social links have correct URLs", () => {
    render(<Footer />);
    expect(screen.getByLabelText("GitHub")).toHaveAttribute(
      "href",
      "https://github.com"
    );
    expect(screen.getByLabelText("LinkedIn")).toHaveAttribute(
      "href",
      "https://linkedin.com"
    );
    expect(screen.getByLabelText("Email")).toHaveAttribute(
      "href",
      "mailto:hello@example.com"
    );
  });

  it("mentions Next.js", () => {
    render(<Footer />);
    expect(screen.getByText(/Next\.js/)).toBeInTheDocument();
  });
});