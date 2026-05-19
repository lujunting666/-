import SectionWrapper from "@/components/ui/SectionWrapper";
import TimelineItem from "@/components/ui/TimelineItem";
import { siteContent } from "@/data/content";

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          工作经历
        </h2>
        <p className="text-center text-gray-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
          我的职业历程。
        </p>

        <div className="max-w-3xl mx-auto">
          {siteContent.experience.map((exp, i) => (
            <TimelineItem
              key={i}
              title={exp.role}
              organization={exp.company}
              period={exp.period}
              description={exp.description}
              highlights={exp.highlights}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}