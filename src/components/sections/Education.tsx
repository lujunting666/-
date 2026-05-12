import SectionWrapper from "@/components/ui/SectionWrapper";
import TimelineItem from "@/components/ui/TimelineItem";
import { siteContent } from "@/data/content";

export default function Education() {
  return (
    <SectionWrapper
      id="education"
      className="py-20 bg-gray-50/50 dark:bg-slate-900/50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Education
        </h2>
        <p className="text-center text-gray-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
          Academic background and certifications.
        </p>

        <div className="max-w-3xl mx-auto">
          {siteContent.education.map((edu, i) => (
            <TimelineItem
              key={i}
              title={edu.degree + " in " + edu.field}
              organization={edu.school}
              period={edu.period}
              description={edu.description}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
