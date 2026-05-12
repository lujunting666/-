interface SkillBadgeProps {
  name: string;
  level?: number; // 1-5
}

export default function SkillBadge({ name, level = 3 }: SkillBadgeProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="px-3 py-1.5 text-sm font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800">
        {name}
      </span>
      {level > 0 && (
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i < level
                  ? "bg-primary-500"
                  : "bg-gray-200 dark:bg-slate-700"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
