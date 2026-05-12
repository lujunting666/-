import SectionWrapper from "@/components/ui/SectionWrapper";
import SkillBadge from "@/components/ui/SkillBadge";
import { siteContent } from "@/data/content";

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Skills & Technologies
        </h2>
        <p className="text-center text-gray-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
          Technologies and tools I work with on a daily basis.
        </p>

        <div className="space-y-10">
          {siteContent.skills.reduce<{ category: string; items: typeof siteContent.skills }[]>((acc, skill) => {
            const existing = acc.find((c) => c.category === skill.category);
            if (existing) {
              existing.items.push(skill);
            } else {
              acc.push({ category: skill.category, items: [skill] });
            }
            return acc;
          }, []).map((category) => (
            <div key={category.category}>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 capitalize">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    level={skill.proficiency}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
