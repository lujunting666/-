import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import ThemeToggle from "@/components/ui/ThemeToggle";

describe("ThemeToggle", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  afterEach(() => {
    cleanup();
    localStorage.clear();
    document.documentElement.classList.remove("dark");
  });

  it("renders a button after mounting", async () => {
    render(<ThemeToggle />);
    const button = await screen.findByRole("button", {
      name: /switch to dark mode/i,
    });
    expect(button).toBeInTheDocument();
  });

  it("starts in light mode by default and shows Moon icon", async () => {
    render(<ThemeToggle />);
    const button = await screen.findByRole("button", {
      name: /switch to dark mode/i,
    });
    const moonIcon = button.querySelector(".lucide-moon");
    expect(moonIcon).toBeTruthy();
  });

  it("toggles to dark mode on click", async () => {
    render(<ThemeToggle />);
    const button = await screen.findByRole("button", {
      name: /switch to dark mode/i,
    });

    fireEvent.click(button);

    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(localStorage.getItem("theme")).toBe("dark");
    expect(
      screen.getByRole("button", { name: /switch to light mode/i })
    ).toBeInTheDocument();
  });

  it("toggles back to light mode on second click", async () => {
    render(<ThemeToggle />);
    const button = await screen.findByRole("button", {
      name: /switch to dark mode/i,
    });

    fireEvent.click(button);
    fireEvent.click(button);

    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(localStorage.getItem("theme")).toBe("light");
  });

  it("persists theme preference in localStorage", async () => {
    render(<ThemeToggle />);
    const button = await screen.findByRole("button", {
      name: /switch to dark mode/i,
    });

    fireEvent.click(button);
    expect(localStorage.getItem("theme")).toBe("dark");
  });

  it("shows Sun icon when in dark mode", async () => {
    localStorage.setItem("theme", "dark");
    render(<ThemeToggle />);
    const button = await screen.findByRole("button", {
      name: /switch to light mode/i,
    });
    const sunIcon = button.querySelector(".lucide-sun");
    expect(sunIcon).toBeTruthy();
  });
});