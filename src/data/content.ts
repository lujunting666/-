// ─── TypeScript Interfaces ────────────────────────────────────────

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools";
  proficiency: number; // 1-5
  icon?: string;
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Education {
  school: string;
  degree: string;
  field: string;
  period: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  avatar?: string;
  resumeUrl?: string;
  email: string;
  location?: string;
  social: SocialLink[];
}

export interface SiteContent {
  personalInfo: PersonalInfo;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
}

// ─── Site Content Data ────────────────────────────────────────────

export const siteContent: SiteContent = {
  personalInfo: {
    name: "Alex Chen",
    title: "Full-Stack Developer",
    tagline: "Building beautiful, accessible, and performant web applications",
    bio: "I'm a full-stack developer with a deep passion for creating seamless digital experiences. With expertise in React, Next.js, TypeScript, and modern backend technologies, I bring ideas to life through clean, maintainable code. When I'm not coding, you'll find me exploring new technologies, contributing to open source, or writing technical blog posts to share knowledge with the developer community.",
    email: "alex@chen.dev",
    location: "San Francisco, CA",
    resumeUrl: "/resume/resume.pdf",
    social: [
      { platform: "github", url: "https://github.com/alexchen", icon: "github" },
      { platform: "linkedin", url: "https://linkedin.com/in/alexchen", icon: "linkedin" },
      { platform: "twitter", url: "https://twitter.com/alexchen", icon: "twitter" },
    ],
  },

  skills: [
    { name: "React", category: "Frontend", proficiency: 5 },
    { name: "Next.js", category: "Frontend", proficiency: 5 },
    { name: "TypeScript", category: "Frontend", proficiency: 4 },
    { name: "Tailwind CSS", category: "Frontend", proficiency: 5 },
    { name: "Framer Motion", category: "Frontend", proficiency: 4 },
    { name: "Node.js", category: "Backend", proficiency: 4 },
    { name: "Python", category: "Backend", proficiency: 4 },
    { name: "PostgreSQL", category: "Backend", proficiency: 3 },
    { name: "MongoDB", category: "Backend", proficiency: 3 },
    { name: "GraphQL", category: "Backend", proficiency: 3 },
    { name: "Docker", category: "Tools", proficiency: 4 },
    { name: "Git", category: "Tools", proficiency: 5 },
    { name: "AWS", category: "Tools", proficiency: 3 },
    { name: "CI/CD", category: "Tools", proficiency: 4 },
    { name: "Linux", category: "Tools", proficiency: 4 },
  ],

  projects: [
    {
      name: "TaskFlow",
      description:
        "A full-stack project management application built with Next.js and Node.js that helps teams collaborate in real-time with features like live editing, comments, and task tracking.",
      tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "WebSocket"],
      githubUrl: "https://github.com/alexchen/taskflow",
      liveUrl: "https://taskflow-demo.vercel.app",
      featured: true,
    },
    {
      name: "UI Kit",
      description:
        "An open-source component library built with React and TypeScript, featuring 50+ accessible and customizable UI components with full Storybook documentation and unit tests.",
      tech: ["React", "TypeScript", "Storybook", "Rollup", "Testing Library"],
      githubUrl: "https://github.com/alexchen/ui-kit",
      liveUrl: "https://ui-kit-demo.vercel.app",
      featured: true,
    },
    {
      name: "DataViz Dashboard",
      description:
        "A real-time analytics dashboard featuring interactive data visualizations, customizable widgets, and automated reporting capabilities with export functionality.",
      tech: ["React", "D3.js", "WebSocket", "Express", "Redis"],
      githubUrl: "https://github.com/alexchen/dataviz",
      featured: false,
    },
  ],

  experience: [
    {
      company: "TechCorp Inc.",
      role: "Senior Full-Stack Developer",
      period: "2022 - Present",
      description:
        "Leading development of customer-facing web applications and internal tooling platforms.",
      highlights: [
        "Architected and built a new SaaS platform serving 10k+ users",
        "Mentored junior developers and established code review practices",
        "Reduced page load times by 40% through performance optimization",
      ],
    },
    {
      company: "StartupXYZ",
      role: "Full-Stack Developer",
      period: "2020 - 2022",
      description:
        "Built and maintained multiple web applications using modern JavaScript frameworks.",
      highlights: [
        "Developed a real-time collaboration feature using WebSockets",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Contributed to open-source projects in the React ecosystem",
      ],
    },
  ],

  education: [
    {
      school: "University of Technology",
      degree: "B.S.",
      field: "Computer Science",
      period: "2015 - 2019",
      description:
        "Graduated with honors. Focused on software engineering and web technologies.",
    },
  ],
};

// ─── Backward-compatible exports ──────────────────────────────────

export const personalInfo = siteContent.personalInfo;
