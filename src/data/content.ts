// ════════════════════════════════════════════════════════════════════
//  作品集数据文件 — 在这里编辑你的个人信息、技能、项目、经历和教育背景
//  Portfolio Data File — Edit your info here
// ════════════════════════════════════════════════════════════════════

// ─── TypeScript 接口定义 ──────────────────────────────────────────

export interface SocialLink {
  platform: string; // 平台名称: "github" | "linkedin" | "twitter" 等
  url: string;      // 链接地址
  icon: string;     // 图标标识
}

export interface Skill {
  name: string;                   // 技能名称
  category: "前端" | "后端" | "工具"; // 技能分类
  proficiency: number;            // 熟练度 1-5
  icon?: string;                  // 可选图标
}

export interface Project {
  name: string;        // 项目名称
  description: string; // 项目描述
  tech: string[];      // 使用技术栈
  liveUrl?: string;    // 在线演示链接
  githubUrl?: string;  // GitHub 仓库链接
  image?: string;      // 项目截图路径 (如 "/images/project-taskflow.png")
  video?: string;      // 项目演示视频路径 (可选)
  featured?: boolean;  // 是否精选项目
}

export interface Experience {
  company: string;     // 公司名称
  role: string;        // 职位
  period: string;      // 工作时间段
  description: string; // 工作描述
  highlights: string[]; // 主要成就亮点
}

export interface Education {
  school: string;      // 学校名称
  degree: string;      // 学位
  field: string;       // 专业领域
  period: string;      // 就读时间段
  description: string; // 描述
}

export interface PersonalInfo {
  name: string;        // 姓名
  title: string;       // 职位头衔
  tagline: string;     // 标语（显示在首页的打字机效果中）
  bio: string;         // 个人简介
  avatar?: string;     // 头像路径 (如 "/images/avatar.png")
  resumeUrl?: string;  // 简历文件路径
  email: string;       // 邮箱
  location?: string;   // 所在地
  social: SocialLink[]; // 社交链接
}

export interface SiteContent {
  personalInfo: PersonalInfo;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
}

// ─── 网站内容数据 — 在此处修改你的信息 ─────────────────────────

export const siteContent: SiteContent = {
  // ── 个人信息 ────────────────────────────────────────────────
  // 修改这里的姓名、职位、标语、简介等信息
  personalInfo: {
    name: "Alex Chen",
    title: "全栈开发工程师",
    tagline: "构建美观、易用且高性能的现代 Web 应用",
    bio: "我是一名全栈开发工程师，热衷于打造无缝的数字体验。精通 React、Next.js、TypeScript 以及现代后端技术，通过简洁、可维护的代码将想法变为现实。不 coding 的时候，我喜欢探索新技术、贡献开源项目，或撰写技术博客与社区分享知识。",
    avatar: "/images/avatar.png",
    email: "alex@chen.dev",
    location: "旧金山, 加利福尼亚州",
    resumeUrl: "/resume/resume.pdf",
    social: [
      { platform: "github", url: "https://github.com/alexchen", icon: "github" },
      { platform: "linkedin", url: "https://linkedin.com/in/alexchen", icon: "linkedin" },
      { platform: "twitter", url: "https://twitter.com/alexchen", icon: "twitter" },
    ],
  },

  // ── 技能列表 ──────────────────────────────────────────────────
  // 修改或添加你的技能。category 可选: "前端" | "后端" | "工具"
  // proficiency: 熟练度 1-5
  skills: [
    { name: "React", category: "前端", proficiency: 5 },
    { name: "Next.js", category: "前端", proficiency: 5 },
    { name: "TypeScript", category: "前端", proficiency: 4 },
    { name: "Tailwind CSS", category: "前端", proficiency: 5 },
    { name: "Framer Motion", category: "前端", proficiency: 4 },
    { name: "Node.js", category: "后端", proficiency: 4 },
    { name: "Python", category: "后端", proficiency: 4 },
    { name: "PostgreSQL", category: "后端", proficiency: 3 },
    { name: "MongoDB", category: "后端", proficiency: 3 },
    { name: "GraphQL", category: "后端", proficiency: 3 },
    { name: "Docker", category: "工具", proficiency: 4 },
    { name: "Git", category: "工具", proficiency: 5 },
    { name: "AWS", category: "工具", proficiency: 3 },
    { name: "CI/CD", category: "工具", proficiency: 4 },
    { name: "Linux", category: "工具", proficiency: 4 },
  ],

  // ── 项目列表 ──────────────────────────────────────────────────
  // 修改或添加你的项目。
  // image: 将项目截图放在 public/images/ 目录下，填写路径如 "/images/项目名.png"
  // video: 可选，项目演示视频路径
  // tech: 使用的技术栈（也用于项目筛选）
  // githubUrl / liveUrl: 可选，项目链接
  projects: [
    {
      name: "TaskFlow",
      description:
        "一个基于 Next.js 和 Node.js 的全栈项目管理应用，支持实时协作、在线编辑、评论和任务追踪等功能，帮助团队高效协同工作。",
      tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "WebSocket"],
      githubUrl: "https://github.com/alexchen/taskflow",
      liveUrl: "https://taskflow-demo.vercel.app",
      image: "/images/project-taskflow.png",
      featured: true,
    },
    {
      name: "UI Kit",
      description:
        "基于 React 和 TypeScript 的开源组件库，包含 50+ 可访问且可定制的 UI 组件，配有完整的 Storybook 文档和单元测试。",
      tech: ["React", "TypeScript", "Storybook", "Rollup", "Testing Library"],
      githubUrl: "https://github.com/alexchen/ui-kit",
      liveUrl: "https://ui-kit-demo.vercel.app",
      image: "/images/project-uikit.png",
      featured: true,
    },
    {
      name: "DataViz Dashboard",
      description:
        "一个实时数据分析仪表盘，具有交互式数据可视化、可定制 Widget 和自动报告导出功能。",
      tech: ["React", "D3.js", "WebSocket", "Express", "Redis"],
      githubUrl: "https://github.com/alexchen/dataviz",
      image: "/images/project-dataviz.png",
      featured: false,
    },
  ],

  // ── 工作经历 ──────────────────────────────────────────────────
  // 修改或添加你的工作经历
  experience: [
    {
      company: "TechCorp Inc.",
      role: "高级全栈开发工程师",
      period: "2022 - 至今",
      description: "负责面向客户的 Web 应用及内部工具平台的开发工作。",
      highlights: [
        "架构并构建了服务于 10,000+ 用户的 SaaS 平台",
        "指导初级开发者并建立代码审查流程",
        "通过性能优化将页面加载时间减少 40%",
      ],
    },
    {
      company: "StartupXYZ",
      role: "全栈开发工程师",
      period: "2020 - 2022",
      description: "使用现代 JavaScript 框架构建和维护多个 Web 应用。",
      highlights: [
        "开发了基于 WebSocket 的实时协作功能",
        "实现 CI/CD 流水线，部署时间缩短 60%",
        "为 React 生态的开源项目贡献代码",
      ],
    },
  ],

  // ── 教育背景 ──────────────────────────────────────────────────
  // 修改或添加你的教育经历
  education: [
    {
      school: "科技大学",
      degree: "学士",
      field: "计算机科学",
      period: "2015 - 2019",
      description: "以优异成绩毕业，主修软件工程和 Web 技术。",
    },
  ],
};

// ─── 向后兼容的导出 ──────────────────────────────────────────────

export const personalInfo = siteContent.personalInfo;
