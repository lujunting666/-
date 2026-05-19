import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/ui/ProjectCard";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ThemeToggle from "@/components/ui/ThemeToggle";

describe("Accessibility Checks", () => {
  it("Hero has semantic section element", () => {
    const { container } = render(<Hero />);
    expect(container.querySelector("section")).toBeTruthy();
  });

  it("Navbar navigation links are keyboard accessible", () => {
    render(<Navbar />);
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveAttribute("href");
    });
  });

  it("Footer social links have aria labels", () => {
    render(<Footer />);
    expect(screen.getByLabelText("GitHub")).toBeInTheDocument();
    expect(screen.getByLabelText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("ScrollToTop button has aria label", () => {
    render(<ScrollToTop />);
    expect(
      screen.getByRole("button", { name: /scroll to top/i })
    ).toBeInTheDocument();
  });

  it("ThemeToggle button has aria label that reflects current mode", async () => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");
    render(<ThemeToggle />);

    const button = await screen.findByRole("button");
    expect(button).toHaveAttribute("aria-label");
    expect(button.getAttribute("aria-label")).toMatch(/switch to/i);
  });

  it("Navbar mobile menu toggle has aria label", () => {
    render(<Navbar />);
    expect(
      screen.getByRole("button", { name: /toggle menu/i })
    ).toBeInTheDocument();
  });

  it("ProjectCard external links open in new tab for safety", () => {
    render(
      <ProjectCard
        name="Test"
        description="Test"
        tech={["React"]}
        githubUrl="https://github.com/test"
        liveUrl="https://test.com"
      />
    );
    const sourceLink = screen.getByText("Source");
    const liveLink = screen.getByText("Live Demo");
    expect(sourceLink.closest("a")).toHaveAttribute("target", "_blank");
    expect(sourceLink.closest("a")).toHaveAttribute("rel", "noopener noreferrer");
    expect(liveLink.closest("a")).toHaveAttribute("target", "_blank");
    expect(liveLink.closest("a")).toHaveAttribute("rel", "noopener noreferrer");
  });
});