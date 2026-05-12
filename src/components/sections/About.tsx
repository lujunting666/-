"use client";

import { Code, Sparkles, Globe } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { siteContent } from "@/data/content";

const stats = [
  {
    end: 3,
    label: "Years of Experience",
    suffix: "+",
    icon: <Code className="w-5 h-5" />,
  },
  {
    end: 20,
    label: "Projects Completed",
    suffix: "+",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    end: 15,
    label: "Technologies Used",
    suffix: "+",
    icon: <Globe className="w-5 h-5" />,
  },
];

export default function About() {
  return (
    <SectionWrapper
      id="about"
      className="py-20 bg-gray-50/50 dark:bg-slate-900/50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          About Me
        </h2>
        <p className="text-center text-gray-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
          A passionate developer who loves turning complex problems into simple,
          beautiful solutions.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
              I am a full-stack developer with a deep passion for creating
              seamless digital experiences. With expertise in React, Next.js,
              TypeScript, and modern backend technologies, I bring ideas to life
              through clean, maintainable code.
            </p>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open source, or writing technical
              blog posts to share knowledge with the developer community.
            </p>
          </div>

          <div className="grid gap-4">
            {stats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                end={stat.end}
                label={stat.label}
                suffix={stat.suffix}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}