// ════════════════════════════════════════════════════════════════════
//  作品集数据文件 — 在这里编辑你的个人信息、技能、项目、经历和教育背景
// ════════════════════════════════════════════════════════════════════

// ─── TypeScript 接口定义 ──────────────────────────────────────────

export interface SocialLink {
  platform: string; // 平台名称: "github" | "wechat" | "email" 等
  url: string;      // 链接地址
  icon: string;     // 图标标识
  label?:   string; // 显示标签
}

export interface Skill {
  name:        string;   // 技能名称
  category:    string;   // 技能分类（自由填写，如"控制学与机器人学"）
  proficiency: number;   // 熟练度 1-5
  icon?:       string;   // 可选图标
}

export interface Project {
  name:        string;   // 项目名称
  description: string;   // 项目描述
  tech:        string[]; // 使用技术栈
  role?:       string;   // 担任角色
  period?:     string;   // 项目时间
  liveUrl?:    string;   // 在线演示链接
  githubUrl?:  string;   // GitHub 仓库链接
  image?:      string;   // 项目截图路径 (如 "/images/项目名.png")
  video?:      string;   // 项目演示视频路径 (可选)
  featured?:   boolean;  // 是否精选项目
}

export interface Experience {
  company:     string;   // 公司名称
  role:        string;   // 职位
  period:      string;   // 工作时间段
  description: string;   // 工作描述
  highlights:  string[]; // 主要成就亮点
}

export interface Education {
  school:      string; // 学校名称
  degree:      string; // 学位
  field:       string; // 专业领域
  period:      string; // 就读时间段
  description: string; // 描述
  gpa?:        string; // GPA
  rank?:       string; // 排名
}

export interface PersonalInfo {
  name:       string;       // 姓名
  title:      string;       // 职位头衔（首页显示）
  tagline:    string;       // 标语（显示在首页的打字机效果中）
  bio:        string;       // 个人简介
  phone?:     string;       // 电话
  avatar?:    string;       // 头像路径 (如 "/images/avatar.png")
  resumeUrl?: string;       // 简历文件路径
  email:      string;       // 邮箱
  location?:  string;       // 所在地
  social:     SocialLink[]; // 社交链接
}

export interface SiteContent {
  personalInfo: PersonalInfo;
  skills:       Skill[];
  projects:     Project[];
  experience:   Experience[];
  education:    Education[];
}

// ─── 网站内容数据 — 在此处修改你的信息 ─────────────────────────────

export const siteContent: SiteContent = {
  // ── 个人信息 ────────────────────────────────────────────────────
  personalInfo: {
    name: "鲁俊廷",
    title: "机器人规划控制算法工程师",
    tagline: "具身智能 · 算法设计 · 硬件落地 · 全栈工程",
    bio: "东北大学控制科学与工程研究生（研二），目标岗位：机器人规划控制算法工程师、具身智能嵌入式软件开发工程师。\n\n" +
         "有多段机器人公司实习经历和实际机器人项目经验，发表算法相关论文两篇、专利一篇。\n\n" +
         "具备从算法设计到硬件落地的全栈工程能力，持续跟进 CoRL/ICRA 顶会，热爱具身智能。",
    phone: "13271303289",
    avatar: "/images/avatar.png",
    email: "lu.jun.ting@qq.com",
    location: "辽宁省沈阳市和平区文化路3巷11号",
    resumeUrl: "/resume/resume.pdf",
    social: [
      { platform: "github", url: "https://github.com/lujunting666", icon: "github", label: "GitHub" },
    ],
  },

  // ── 技能列表 ────────────────────────────────────────────────────
  // proficiency: 1-5）
  skills: [
    // ── 控制学与机器人学（主力方向） ──
    { name: "PID /串级", category: "控制学与机器人学", proficiency: 5 },
    { name: "LQR/MPC", category: "控制学与机器人学", proficiency: 4 },
    { name: "计算力矩法 / 滑模控制", category: "控制学与机器人学", proficiency: 4 },
    { name: "阻抗 / 导纳控制 / WBC", category: "控制学与机器人学", proficiency: 4 },
    { name: "正/逆运动学（DH法）", category: "控制学与机器人学", proficiency: 5 },
    { name: "动力学（RNEA / ABA）", category: "控制学与机器人学", proficiency: 4 },
    { name: "轨迹规划 / 零空间控制", category: "控制学与机器人学", proficiency: 4 },
    { name: "卡尔曼滤波（EKF/UKF）", category: "控制学与机器人学", proficiency: 4 },

    // ── 学习算法（探索方向） ──
    { name: "强化学习（PPO / SAC）", category: "学习算法", proficiency: 4 },
    { name: "模仿学习（DP / ACT / BC）", category: "学习算法", proficiency: 4 },
    { name: "路径规划（A* / RRT* / DWA）", category: "学习算法", proficiency: 5 },
    { name: "群智能算法", category: "学习算法", proficiency: 4 },
    { name: "YOLO / DETR / SAM", category: "学习算法", proficiency: 4 },
    { name: "6D Pose Estimation", category: "学习算法", proficiency: 3 },
    { name: "SLAM（LIO-SAM / ORB-SLAM3 / FASTLIO）", category: "学习算法", proficiency: 4 },
    { name: "VLA（π（π0 / RT-2 / PaLM-E）", category: "学习算法", proficiency: 3 },
    { name: "World Models（3DGS）", category: "学习算法", proficiency: 3 },

    // ── 硬件知识（应用方向） ──
    { name: "STM32（F1/F4）", category: "硬件知识", proficiency: 5 },
    { name: "香橙派 / 树莓派 / Jetson", category: "硬件知识", proficiency: 5 },
    { name: "C / HAL库 / FreeRTOS", category: "硬件知识", proficiency: 4 },
    { name: "UART / SPI / I2C / CAN", category: "硬件知识", proficiency: 4 },
    { name: "舵机 / 步进电机 / 直流电机", category: "硬件知识", proficiency: 5 },
    { name: "电动推杆 / 电磁铁", category: "硬件知识", proficiency: 4 },
    { name: "电机控制（PWM / FOC / H桥）", category: "硬件知识", proficiency: 4 },
    { name: "传感器融合（IMU+LiDAR / IMU+视觉）", category: "硬件知识", proficiency: 4 },
    { name: "ONNXRuntime / TensorRT", category: "硬件知识", proficiency: 3 },
    { name: "PCB调试 / 逻辑分析仪 / 示波器", category: "硬件知识", proficiency: 3 },

    // ── 编程与工具（日常使用） ──
    { name: "C++ / Python / MATLAB", category: "编程与工具", proficiency: 5 },
    { name: "ROS1 / ROS2", category: "编程与工具", proficiency: 5 },
    { name: "Eigen / Pinocchio / OpenCV", category: "编程与工具", proficiency: 4 },
    { name: "PyTorch", category: "编程与工具", proficiency: 4 },
    { name: "Linux / Ubuntu", category: "编程与工具", proficiency: 5 },
    { name: "Git / CMake", category: "编程与工具", proficiency: 5 },
    { name: "Gazebo / MuJoCo", category: "编程与工具", proficiency: 4 },
    { name: "SolidWorks / FreeCAD", category: "编程与工具", proficiency: 4 },
    { name: "大模型（Gemini / Claude / GPT / DeepSeek）", category: "编程与工具", proficiency: 4 },
  ],

  // ── 项目列表 ──────────────────────────────────────────────────
  // image: 将项目截图放在 public/images/ 目录下，填写路径如 "/images/项目名.png"
  // tech: 使用的技术栈（也用于项目筛选）
  projects: [
    {
      name: "宇树G1机器人导览系统",
      description: "基于宇树G1机器人开发导览系统，使用FASTLIO建图 + 导航算法，设计并实现语音多模态系统（ASR-LLM-TTS），包含天气查询、导航到点、任务流、视觉抓图等功能。独立完成导览帽硬件设计（OpenCV视觉）及完整软硬件联调）",
      tech: ["ROS2", "FASTLIO", "ASR", "LLM", "TTS", "OpenCV", "Python", "C++"],
      role: "核心开发者（软硬结合）",
      period: "2026.04 - 2026.07",
      githubUrl: "https://github.com/lujunting666",
      featured: true,
    },
    {
      name: "机狗 Go2 巡检系统",
      description: "设计机械狗消防系统（电动拉杆接入灭火器，实现自动连续多次喷射）；设计武器系统（电动电机接入机枪，实现自动射击）；设计巡检系统（SLAM导航，香橙派+雷达模块）；设计交通协（语音喊话功能）。",
      tech: ["ROS2", "SLAM", "香橙派", "LiDAR", "嵌入式", "C++", "Python"],
      role: "核心开发者（软硬结合）",
      period: "2025.04 - 2026.07",
      githubUrl: "https://github.com/lujunting666",
      featured: true,
    },
    {
      name: "具身智能学习网站",
      description: "独立开发具身智能学习网站，涵盖基础知识（机器人运动学/动力学/控制学/状态估计/优化）、硬件知识（单片机等）、软件知识（Linux/ROS/OpenCV/PyTorch等）、算法知识（强化学习/模仿学习/VLA/SLAM等）、代码题库（在线运行、前沿论文与新闻实时更新。",
      tech: ["FASTAPI", "React", "Python", "Docker", "Linux"],
      role: "独立开发",
      period: "2026.03 - 至今",
      githubUrl: "https://github.com/lujunting666",
      featured: true,
    },
    {
      name: "七轴冗余机械臂智能控制系统",
      description: "基于Pinocchio实现运动学/动力学计算，设计计算力矩法+滑模控制器，轨迹精度0.2mm，性能提升80%。实现变阻抗控制，装配任务成功率从70%提升至95%。基于PPO+域随机化训练抓取策略，成功率85%。搭建ROS2实时控制框架（C++/1kHz），集成状态估计与碰撞检测。",
      tech: ["Pinocchio", "ROS2", "PPO", "C++", "Python", "sim2sim"],
      role: "核心开发者（sim2sim）",
      period: "2024.09 - 2025.03",
      featured: true,
    },
    {
      name: "基于多尺度DCC的工业过程故障检测",
      description: "设计了一种全新的故障检测方法，大大提高了故障检测率。发表两篇相关论文（SCI/EI检索），授权实用新型专利1项。",
      tech: ["MATLAB", "信号处理", "机器学习"],
      role: "论文作者",
      period: "2024.06 - 2027.09",
      featured: false,
    },
    {
      name: "STM32四轴机械臂智能小车",
      description: "设计机械臂+小车系统，实现抓取、循迹、避障、定点充电全闭环功能。负责算法开发与系统联调，项目用于校内教学展示。（市级大创项目）",
      tech: ["STM32", "嵌入式", "C", "传感器"],
      role: "项目负责人",
      period: "2022.10 - 2023.06",
      featured: false,
    },
    {
      name: "无人机路径规划算法设计",
      description: "实现A*、RRT*、群智能算法，完成MATLAB仿真对比与性能分析。（优秀毕设）",
      tech: ["MATLAB", "A*", "RRT*", "群智能算法"],
      role: "论文作者",
      period: "2022.12 - 2024.06",
      featured: false,
    },
    {
      name: "一种新型围棋桌",
      description: "摒弃传统分拣思路，采用传送带流水作业式分拣方法，使用红外识别及电磁推杆作为分拣装置。具有速度快、精准度高、抗干扰强的特点。负责内部结构设计并使用SolidWorks建立模型，最终完成全自动围棋分拣棋桌模型及实物组建。",
      tech: ["SolidWorks", "嵌入式", "红外识别", "电磁推杆"],
      role: "模型建立与搭建",
      period: "2023.06 - 2024.01",
      featured: false,
    },
  ],

  // ── 工作经历 ──────────────────────────────────────────────────
  experience: [
    {
      company: "上海擎朗智能科技股份有限公司",
      role: "机器人开发实习生",
      period: "2024.06 - 2024.09",
      description: "商用服务机器人出货量全球第一的公司。参与商用服务机器人ROS2软件开发测试，负责底盘控制、传感器数据处理与导航调试。",
      highlights: [
        "设计机器人教学课程体系，覆盖3所合作院校，完成技术文档与教学视频制作",
        "参与 T10、T8、T1 机器人课程开发项目",
      ],
    },
    {
      company: "北京深图灵科技有限公司",
      role: "机器人技术开发实习生",
      period: "2026.04 - 2026.07",
      description: "参与宇树机器人技术开发，负责系统设计及软硬件技术开发。",
      highlights: [
        "设计开发了宇树 G1 机器人导览项目",
        "设计开发 GO2 机器狗巡检、消防、安保、警用项目",
        "独立完成从需求分析→硬件选型→软件开发→系统联调→客户交付全流程，累计交付5套机器人应用系统",
      ],
    },
  ],

  // ── 教育背景 ──────────────────────────────────────────────────
  education: [
    {
      school: "东北大学（985）",
      degree: "硕士",
      field: "控制科学与工程（全国第一）",
      period: "2024.09 - 2027.06",
      description: "GPA 3.98，专业前3%（6/207）",
      gpa: "3.98",
      rank: "前3%（6/207）",
    },
    {
      school: "上海第二工业大学",
      degree: "学士",
      field: "自动化",
      period: "2020.09 - 2024.06",
      description: "GPA 4.06，专业前1%（1/210）。多次获得学业奖学金、优秀毕业生、优秀学生等荣誉称号。全国大学生数学建模竞赛二等奖。",
      gpa: "4.06",
      rank: "前1%（1/210）",
    },
  ],
};
