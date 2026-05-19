import { describe, it, expect } from "vitest";
import { siteContent, personalInfo } from "@/data/content";
import type { Skill } from "@/data/content";

describe("Content Data Validation", () => {
  it("has valid personalInfo with all required fields", () => {
    expect(personalInfo.name).toBeTruthy();
    expect(personalInfo.title).toBeTruthy();
    expect(personalInfo.tagline).toBeTruthy();
    expect(personalInfo.bio).toBeTruthy();
    expect(personalInfo.email).toBeTruthy();
    expect(personalInfo.email).toContain("@");
    expect(Array.isArray(personalInfo.social)).toBe(true);
  });

  it("has valid social links with required fields", () => {
    personalInfo.social.forEach((link) => {
      expect(link.platform).toBeTruthy();
      expect(link.url).toMatch(/^https?:\/\//);
      expect(link.icon).toBeTruthy();
    });
  });

  it("has skills with valid proficiency levels (1-5)", () => {
    expect(siteContent.skills.length).toBeGreaterThan(0);
    siteContent.skills.forEach((skill: Skill) => {
      expect(skill.name).toBeTruthy();
      expect(["Frontend", "Backend", "Tools"]).toContain(skill.category);
      expect(skill.proficiency).toBeGreaterThanOrEqual(1);
      expect(skill.proficiency).toBeLessThanOrEqual(5);
    });
  });

  it("has skills in all three categories", () => {
    const categories = siteContent.skills.map((s: Skill) => s.category);
    expect(categories).toContain("Frontend");
    expect(categories).toContain("Backend");
    expect(categories).toContain("Tools");
  });

  it("has projects with valid data", () => {
    expect(siteContent.projects.length).toBeGreaterThan(0);
    siteContent.projects.forEach((project) => {
      expect(project.name).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(Array.isArray(project.tech)).toBe(true);
      expect(project.tech.length).toBeGreaterThan(0);
      // At least one URL should exist
      expect(project.githubUrl || project.liveUrl).toBeTruthy();
    });
  });

  it("has at least one featured project", () => {
    const featured = siteContent.projects.filter((p) => p.featured);
    expect(featured.length).toBeGreaterThan(0);
  });

  it("has experience entries with highlights", () => {
    expect(siteContent.experience.length).toBeGreaterThan(0);
    siteContent.experience.forEach((exp) => {
      expect(exp.company).toBeTruthy();
      expect(exp.role).toBeTruthy();
      expect(exp.period).toBeTruthy();
      expect(Array.isArray(exp.highlights)).toBe(true);
      expect(exp.highlights.length).toBeGreaterThan(0);
    });
  });

  it("has education entries", () => {
    expect(siteContent.education.length).toBeGreaterThan(0);
    siteContent.education.forEach((edu) => {
      expect(edu.school).toBeTruthy();
      expect(edu.degree).toBeTruthy();
      expect(edu.field).toBeTruthy();
      expect(edu.period).toBeTruthy();
    });
  });

  it("exports personalInfo as a reference to siteContent.personalInfo", () => {
    expect(personalInfo).toBe(siteContent.personalInfo);
  });
});