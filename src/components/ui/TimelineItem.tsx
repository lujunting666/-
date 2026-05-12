import { Calendar } from "lucide-react";

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
}

export default function TimelineItem({
  title,
  organization,
  period,
  description,
  highlights,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-slate-700 last:pb-0">
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-500 border-2 border-white dark:border-slate-900" />
      <div className="mb-1">
        <span className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-slate-400">
          <Calendar className="w-3 h-3" />
          {period}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-sm text-primary-600 dark:text-primary-400 mb-2">
        {organization}
      </p>
      <p className="text-gray-600 dark:text-slate-400 text-sm mb-2">
        {description}
      </p>
      {highlights && highlights.length > 0 && (
        <ul className="list-disc list-inside text-sm text-gray-600 dark:text-slate-400 space-y-1">
          {highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
