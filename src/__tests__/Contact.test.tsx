import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Contact from "@/components/sections/Contact";

describe("Contact Section", () => {
  it("renders without errors", () => {
    const { container } = render(<Contact />);
    expect(container).toBeTruthy();
  });

  it("displays the section heading", () => {
    render(<Contact />);
    expect(screen.getByText("Get In Touch")).toBeInTheDocument();
  });

  it("displays the email address from content data", () => {
    render(<Contact />);
    expect(screen.getByText("alex@chen.dev")).toBeInTheDocument();
  });

  it("displays the location from content data", () => {
    render(<Contact />);
    expect(screen.getByText("San Francisco, CA")).toBeInTheDocument();
  });

  it("has an email link with correct mailto href", () => {
    render(<Contact />);
    const emailLink = screen.getByText("alex@chen.dev");
    expect(emailLink.closest("a")).toHaveAttribute(
      "href",
      "mailto:alex@chen.dev"
    );
  });

  it("renders social platform links", () => {
    render(<Contact />);
    expect(screen.getByLabelText("github")).toBeInTheDocument();
    expect(screen.getByLabelText("linkedin")).toBeInTheDocument();
  });

  it("has the contact section with id 'contact'", () => {
    const { container } = render(<Contact />);
    const section = container.querySelector("section#contact");
    expect(section).toBeTruthy();
  });
});